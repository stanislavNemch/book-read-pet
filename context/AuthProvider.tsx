import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { authService } from "../services/authService";
import { api } from "../lib/api";
import type { UserData, LoginResponse } from "../types/auth";
import { AuthContext } from "./AuthContext";
import { authStorage } from "../utils/authStorage";
import Loader from "../components/Loader/Loader";

const privateRoutes = ["/library", "/training", "/statistics"];
const publicOnlyRoutes = ["/login", "/register"];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const [initialLoadComplete, setInitialLoadComplete] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            setIsLoading(true);
            setInitialLoadComplete(false);
            const auth = authStorage.getAuth();
            if (auth && auth.accessToken) {
                authService.setToken(auth.accessToken);
                try {
                    await api.get("/user/books");
                    setIsLoggedIn(true);
                    setUser(auth.user);
                    setToken(auth.accessToken);
                } catch (error) {
                    authStorage.clearAuth();
                    authService.setToken(null);
                    setIsLoggedIn(false);
                    setUser(null);
                    setToken(null);
                }
            } else {
                setIsLoggedIn(false);
                setUser(null);
                setToken(null);
            }
            setIsLoading(false);
            setInitialLoadComplete(true);
        };
        checkAuth();
    }, []);

    useEffect(() => {
        if (isLoading || !initialLoadComplete) {
            return;
        }

        const isPrivateRoute = privateRoutes.includes(router.pathname);
        const isPublicOnlyRoute = publicOnlyRoutes.includes(router.pathname);

        if (isLoggedIn && isPublicOnlyRoute) {
            router.replace("/library");
        }

        if (!isLoggedIn && isPrivateRoute) {
            router.replace("/login");
        }
    }, [isLoggedIn, isLoading, initialLoadComplete, router]);

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
        router.replace("/login");
    };

    if (isLoading && !initialLoadComplete) {
        return <Loader type="full-page" />;
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                user,
                token,
                isLoading: isLoading && !initialLoadComplete,
                login: handleLogin,
                logout: handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
