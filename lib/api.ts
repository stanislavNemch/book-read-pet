import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
    baseURL: "https://bookread-backend.goit.global",
    headers: {
        "Content-Type": "application/json",
    },
});

export const setAuthHeader = (token: string | null) => {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common["Authorization"];
    }
};

// Флаг для предотвращения множественных refresh запросов
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

// Response interceptor для автоматического refresh
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Если 401 и это не повторный запрос
        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                // Если уже идёт refresh, ждём его завершения
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers[
                            "Authorization"
                        ] = `Bearer ${token}`;
                        return api(originalRequest);
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            const refreshToken = Cookies.get("refreshToken");
            const sid = Cookies.get("sid");

            if (!refreshToken || !sid) {
                // Нет refresh токена - разлогиниваем
                Cookies.remove("accessToken", { path: "/" });
                Cookies.remove("refreshToken", { path: "/" });
                Cookies.remove("sid", { path: "/" });
                Cookies.remove("user", { path: "/" });

                if (typeof window !== "undefined") {
                    window.location.href = "/login";
                }
                return Promise.reject(error);
            }

            try {
                // Пытаемся обновить токен
                const { data } = await api.post("/auth/refresh", { sid });

                const cookieOptions = {
                    expires: 7,
                    path: "/",
                    sameSite: "lax" as const,
                };

                Cookies.set("accessToken", data.newAccessToken, cookieOptions);
                Cookies.set(
                    "refreshToken",
                    data.newRefreshToken,
                    cookieOptions
                );
                Cookies.set("sid", data.newSid, cookieOptions);

                setAuthHeader(data.newAccessToken);
                processQueue(null, data.newAccessToken);

                // Повторяем оригинальный запрос с новым токеном
                originalRequest.headers[
                    "Authorization"
                ] = `Bearer ${data.newAccessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                // Refresh не удался - разлогиниваем
                processQueue(refreshError, null);

                Cookies.remove("accessToken", { path: "/" });
                Cookies.remove("refreshToken", { path: "/" });
                Cookies.remove("sid", { path: "/" });
                Cookies.remove("user", { path: "/" });

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
