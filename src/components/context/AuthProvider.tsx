import React, { useState, type ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import { authService } from "../services/authService";
import type { UserData, LoginResponse } from "../types/auth";
import { AuthContext } from "./AuthContext";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedAccessToken = Cookies.get("accessToken");
        const storedUser = Cookies.get("user");
        if (storedAccessToken && storedUser) {
            authService.setToken(storedAccessToken);
            setIsLoggedIn(true);
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Failed to parse user from cookie", error);
                Cookies.remove("accessToken");
                Cookies.remove("refreshToken");
                Cookies.remove("sid");
                Cookies.remove("user");
            }
            setToken(storedAccessToken);
        }
    }, []);

    const handleLogin = (loginData: LoginResponse) => {
        // Устанавливаем cookies с опциями для правильной работы
        const cookieOptions = {
            expires: 7, // 7 дней
            path: "/",
            sameSite: "lax" as const,
        };

        Cookies.set("accessToken", loginData.accessToken, cookieOptions);
        Cookies.set("refreshToken", loginData.refreshToken, cookieOptions);
        Cookies.set("sid", loginData.sid, cookieOptions);
        Cookies.set("user", JSON.stringify(loginData.userData), cookieOptions);

        authService.setToken(loginData.accessToken);
        setIsLoggedIn(true);
        setUser(loginData.userData);
        setToken(loginData.accessToken);
    };

    const handleLogout = () => {
        Cookies.remove("accessToken", { path: "/" });
        Cookies.remove("refreshToken", { path: "/" });
        Cookies.remove("sid", { path: "/" });
        Cookies.remove("user", { path: "/" });
        authService.setToken(null);
        setIsLoggedIn(false);
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                user,
                token,
                login: handleLogin,
                logout: handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
