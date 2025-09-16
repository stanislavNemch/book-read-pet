import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ReactNode } from "react";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    // Если пользователь не залогинен, перенаправляем на /login
    // Мы также сохраняем `location.state` - страницу,
    // на которую пользователь хотел попасть, чтобы вернуть его
    // туда после успешного входа.
    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
