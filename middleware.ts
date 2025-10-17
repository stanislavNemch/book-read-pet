import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const accessToken = req.cookies.get("accessToken")?.value;

    const privateRoutes = ["/library", "/training", "/statistics"];
    const publicOnlyRoutes = ["/login", "/register"];

    const isPrivateRoute = privateRoutes.some((route) =>
        pathname.startsWith(route)
    );
    const isPublicOnlyRoute = publicOnlyRoutes.some((route) =>
        pathname.startsWith(route)
    );

    // Если пытаемся попасть на приватный маршрут без токена - на логин
    if (isPrivateRoute && !accessToken) {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    // Если авторизованный пользователь пытается попасть на логин/регистрацию - в библиотеку
    if (isPublicOnlyRoute && accessToken) {
        const url = req.nextUrl.clone();
        url.pathname = "/library";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/library/:path*",
        "/training/:path*",
        "/statistics/:path*",
        "/login",
        "/register",
    ],
};
