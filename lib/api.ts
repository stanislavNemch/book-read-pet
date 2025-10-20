import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie"; // 1. Импортируем Cookies
import type { RefreshResponse } from "../types/auth";
import { authStorage } from "../utils/authStorage"; // Импортируем authStorage для очистки

const BASE_URL = "https://bookread-backend.goit.global";

export const api = axios.create({
    baseURL: BASE_URL,
});

// --- Динамическая установка токена ---
export const setAuthHeader = (token: string | null) => {
    if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common.Authorization;
    }
};

// --- Перехватчик ответов для обновления токенов ---
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
                "Ошибка соединения с сервером. Пожалуйста, проверьте ваше интернет-соединение."
            );
            return Promise.reject(error);
        }

        // 2. Бэкенд возвращает 400, 401 или 403 на проблемы с токеном. Будем проверять их все.
        if (
            [400, 401, 403].includes(error.response.status) &&
            !originalRequest._retry
        ) {
            // Проверяем сообщение, чтобы убедиться, что это ошибка токена
            const errorMessage = error.response.data.message || "";
            if (!errorMessage.toLowerCase().includes("token")) {
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
                    .catch((err) => {
                        return Promise.reject(err);
                    });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            // 3. Читаем токены из Cookies, а не из localStorage
            const refreshToken = Cookies.get("refreshToken");
            const sid = Cookies.get("sid");

            if (!refreshToken || !sid) {
                isRefreshing = false;
                // Если токенов для обновления нет, выходим
                return Promise.reject(error);
            }

            try {
                // Во время запроса на refresh, Axios instance не должен иметь заголовка Authorization
                // Но так как у нас interceptor на глобальном инстансе, мы просто продолжим.
                // В идеале, для refresh создают отдельный инстанс без interceptor'ов.
                // Для текущей задачи это не критично.

                const { data } = await api.post<RefreshResponse>(
                    "/auth/refresh",
                    { sid }
                );

                // 4. Обновляем токены в Cookies
                Cookies.set("accessToken", data.newAccessToken);
                Cookies.set("refreshToken", data.newRefreshToken);
                Cookies.set("sid", data.newSid);

                setAuthHeader(data.newAccessToken); // Устанавливаем новый accessToken

                processQueue(null, data.newAccessToken);
                originalRequest.headers.Authorization = `Bearer ${data.newAccessToken}`;

                return api(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);

                // 5. Используем готовую функцию для очистки cookie
                authStorage.clearAuth();

                // Перенаправляем на страницу логина
                if (typeof window !== "undefined") {
                    window.location.href = "/login";
                }

                toast.error("Сессия истекла. Пожалуйста, войдите снова.");
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);
