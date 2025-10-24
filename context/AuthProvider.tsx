import React, { useState, type ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { authService } from "../services/authService";
import { getUserBooks } from "../services/bookService";
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
        const validateSession = async () => {
            const storedAccessToken = Cookies.get("accessToken");
            const storedRefreshToken = Cookies.get("refreshToken");
            const storedSid = Cookies.get("sid");
            const storedUser = Cookies.get("user");

            if (!storedAccessToken || !storedUser) {
                handleLogout(false);
                setIsLoading(false);
                return;
            }

            try {
                authService.setToken(storedAccessToken);
                await getUserBooks();

                setIsLoggedIn(true);
                setUser(JSON.parse(storedUser));
                setToken(storedAccessToken);
            } catch (error: any) {
                console.log("Token validation failed:", error.response?.status);

                if (
                    error.response?.status === 401 &&
                    storedRefreshToken &&
                    storedSid
                ) {
                    try {
                        const { data } = await authService.refresh(storedSid);

                        const cookieOptions = {
                            expires: 7,
                            path: "/",
                            sameSite: "lax" as const,
                        };
                        Cookies.set(
                            "accessToken",
                            data.newAccessToken,
                            cookieOptions
                        );
                        Cookies.set(
                            "refreshToken",
                            data.newRefreshToken,
                            cookieOptions
                        );
                        Cookies.set("sid", data.newSid, cookieOptions);

                        authService.setToken(data.newAccessToken);
                        setIsLoggedIn(true);
                        setUser(JSON.parse(storedUser));
                        setToken(data.newAccessToken);
                    } catch (refreshError) {
                        console.log("Token refresh failed, logging out");
                        handleLogout(false);
                    }
                } else {
                    handleLogout(false);
                }
            } finally {
                setIsLoading(false);
            }
        };

        validateSession();
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
