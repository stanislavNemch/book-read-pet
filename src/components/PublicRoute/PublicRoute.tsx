import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ReactNode } from "react";

interface PublicRouteProps {
    children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const { isLoggedIn } = useAuth();

    // Если пользователь залогинен, перенаправляем его
    // с публичной страницы (напр. /login) на /library.
    if (isLoggedIn) {
        return <Navigate to="/library" replace />;
    }

    return <>{children}</>;
};

export default PublicRoute;
