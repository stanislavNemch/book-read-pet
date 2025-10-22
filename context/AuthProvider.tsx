import React, { useState, useEffect } from "react";
import { authService } from "../services/authService";
import type { UserData, LoginResponse } from "../types/auth";
import { AuthContext } from "./AuthContext";
import { authStorage } from "../utils/authStorage";
import Loader from "../components/Loader/Loader";
import { useRouter } from "next/router";

// 2. Список защищенных страниц (как в middleware.ts)
const privateRoutes = ["/library", "/training", "/statistics"];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter(); // 3. Получаем доступ к роутеру

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
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        // Если проверка авторизации еще не завершена, ничего не делаем
        if (isLoading) {
            return;
        }

        const isPrivateRoute = privateRoutes.includes(router.pathname);
        // Если пользователь не авторизован и пытается зайти на защищенную страницу
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
