import Cookies from "js-cookie";
import { LoginResponse, UserData } from "../types/auth";

const COOKIE_OPTIONS = {
    expires: 7,
    path: "/",
    sameSite: "lax" as const,
};

export const authStorage = {
    saveAuth(data: LoginResponse) {
        Cookies.set("accessToken", data.accessToken, COOKIE_OPTIONS);
        Cookies.set("refreshToken", data.refreshToken, COOKIE_OPTIONS);
        Cookies.set("sid", data.sid, COOKIE_OPTIONS);
        Cookies.set("user", JSON.stringify(data.userData), COOKIE_OPTIONS);
    },

    getAuth(): { accessToken: string; user: UserData } | null {
        const accessToken = Cookies.get("accessToken");
        const userStr = Cookies.get("user");

        if (!accessToken || !userStr) return null;

        try {
            const user = JSON.parse(userStr);
            return { accessToken, user };
        } catch {
            return null;
        }
    },

    clearAuth() {
        Cookies.remove("accessToken", { path: "/" });
        Cookies.remove("refreshToken", { path: "/" });
        Cookies.remove("sid", { path: "/" });
        Cookies.remove("user", { path: "/" });
    },
};
