import React, { useState, type ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
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
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const initializeAuth = () => {
            const storedAccessToken = Cookies.get("accessToken");
            const storedUser = Cookies.get("user");

            if (storedAccessToken && storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    authService.setToken(storedAccessToken);
                    setIsLoggedIn(true);
                    setUser(parsedUser);
                    setToken(storedAccessToken);
                } catch (error) {
                    console.error("Failed to parse user data:", error);
                    handleLogout(false);
                }
            } else {
                handleLogout(false);
            }

            setIsLoading(false);
        };

        initializeAuth();
    }, []);

    const handleLogin = (loginData: LoginResponse) => {
        const cookieOptions = {
            expires: 7,
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

    const handleLogout = (shouldRedirect: boolean = false) => {
        Cookies.remove("accessToken", { path: "/" });
        Cookies.remove("refreshToken", { path: "/" });
        Cookies.remove("sid", { path: "/" });
        Cookies.remove("user", { path: "/" });
        authService.setToken(null);
        setIsLoggedIn(false);
        setUser(null);
        setToken(null);

        if (shouldRedirect && typeof window !== "undefined") {
            router.push("/login");
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                user,
                token,
                login: handleLogin,
                logout: handleLogout,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
