import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { authService } from "../services/authService";
import { api } from "../lib/api";
import type { UserData, LoginResponse } from "../types/auth";
import { AuthContext } from "./AuthContext";
import { authStorage } from "../utils/authStorage";
import Loader from "../components/Loader/Loader";

const privateRoutes = ["/library", "/training", "/statistics"];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Создаем асинхронную функцию внутри useEffect для проверки сессии
        const checkAuth = async () => {
            const auth = authStorage.getAuth();

            // Если токен в cookie вообще есть
            if (auth && auth.accessToken) {
                authService.setToken(auth.accessToken);
                try {
                    await api.get("/user/books");

                    // Если запрос прошел успешно (ошибки не было):
                    setIsLoggedIn(true);
                    setUser(auth.user);
                    setToken(auth.accessToken);
                } catch (error) {
                    // Если запрос вернул ошибку (например, 401), значит токен "протух".
                    // Очищаем старые данные.
                    authStorage.clearAuth();
                    authService.setToken(null);
                }
            }
            setIsLoading(false);
        };

        checkAuth();
    }, []);

    useEffect(() => {
        if (isLoading) {
            return;
        }
        const isPrivateRoute = privateRoutes.includes(router.pathname);
        if (!isLoggedIn && isPrivateRoute) {
            router.push("/login");
        }
    }, [isLoggedIn, isLoading, router]);

    const handleLogin = (loginData: LoginResponse) => {
        authStorage.saveAuth(loginData);
        authService.setToken(loginData.accessToken);
        setIsLoggedIn(true);
        setUser(loginData.userData);
        setToken(loginData.accessToken);
    };

    const handleLogout = () => {
        authStorage.clearAuth();
        authService.setToken(null);
        setIsLoggedIn(false);
        setUser(null);
        setToken(null);
        router.push("/login");
    };

    if (isLoading) {
        return <Loader type="full-page" />;
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                user,
                token,
                isLoading,
                login: handleLogin,
                logout: handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
