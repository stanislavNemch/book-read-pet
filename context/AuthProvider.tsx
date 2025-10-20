import React, { useState, useEffect } from "react";
import { authService } from "../services/authService";
import type { UserData, LoginResponse } from "../types/auth";
import { AuthContext } from "./AuthContext";
import { authStorage } from "../utils/authStorage";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true); // 1. Добавляем состояние загрузки

    useEffect(() => {
        try {
            const auth = authStorage.getAuth();
            if (auth) {
                authService.setToken(auth.accessToken);
                setIsLoggedIn(true);
                setUser(auth.user);
                setToken(auth.accessToken);
            }
        } catch (error) {
            console.error("Failed to initialize auth state", error);
        } finally {
            setIsLoading(false); // 2. В любом случае (нашли токен или нет) завершаем загрузку
        }
    }, []);

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
    };

    // 3. Пока идет проверка, не рендерим остальное приложение
    if (isLoading) {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    fontSize: "20px",
                }}
            >
                Перевірка авторизації...
            </div>
        );
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
