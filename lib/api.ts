import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import type { RefreshResponse } from "../types/auth";
import { authStorage } from "../utils/authStorage";

const BASE_URL = "https://bookread-backend.goit.global";

export const api = axios.create({
    baseURL: BASE_URL,
});

export const setAuthHeader = (token: string | null) => {
    if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common.Authorization;
    }
};

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (!error.response) {
            toast.error(
                "Ошибка соединения с сервером. Проверьте ваше интернет-соединение."
            );
            return Promise.reject(error);
        }

        if (
            [400, 401, 403].includes(error.response.status) &&
            !originalRequest._retry
        ) {
            const errorMessage = error.response.data?.message || "";
            const isTokenError = /token/i.test(errorMessage);

            if (!isTokenError) {
                return Promise.reject(error);
            }

            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return api(originalRequest);
                    })
                    .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            const refreshToken = Cookies.get("refreshToken");
            const sid = Cookies.get("sid");

            if (!refreshToken || !sid) {
                isRefreshing = false;
                return Promise.reject(error);
            }

            try {
                const { data } = await api.post<RefreshResponse>(
                    "/auth/refresh",
                    { sid }
                );

                authStorage.saveAuth({
                    accessToken: data.newAccessToken,
                    refreshToken: data.newRefreshToken,
                    sid: data.newSid,
                    userData: JSON.parse(Cookies.get("user") || "{}"),
                });

                setAuthHeader(data.newAccessToken);
                processQueue(null, data.newAccessToken);
                originalRequest.headers.Authorization = `Bearer ${data.newAccessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);

                authStorage.clearAuth(); // Очищаем cookie
                toast.error("Сессия истекла. Пожалуйста, войдите снова.");

                // Принудительно перенаправляем на страницу логина
                if (typeof window !== "undefined") {
                    window.location.href = "/login";
                }

                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);
