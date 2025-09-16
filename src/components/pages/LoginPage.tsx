import { Link } from "react-router-dom";
import { authService } from "../services/authService";
import type { LoginRequest, LoginResponse } from "../types/auth";
import { useAuth } from "../hooks/useAuth";
import AuthLayout from "../AuthLayout/AuthLayout";
import toast from "react-hot-toast";
import LoginForm from "../LoginForm/LoginForm";

const LoginPage = () => {
    // Получаем функцию login из нашего AuthContext
    const { login } = useAuth();

    const handleLogin = async (
        values: LoginRequest,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        try {
            // 1. Вызываем метод API
            const { data }: { data: LoginResponse } = await authService.login(
                values
            );

            // 2. Обновляем состояние приложения через Context
            // (Это сохранит токен, юзера и isLoggedIn)
            //
            login(data);

            toast.success("Вход выполнен успешно!");
            // PrivateRoute/PublicRoute сам позаботится о редиректе на /library
        } catch (error: any) {
            console.error(error);
            toast.error(
                error.response?.data?.message || "Неверный email или пароль."
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <AuthLayout>
            {/* Здесь будет компонент GoogleAuthBtn (Шаг 6)
              <GoogleAuthBtn /> 
            */}

            <LoginForm onSubmit={handleLogin} />

            {/* Ссылка "Реєстрація" из макета */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Link to="/register">Реєстрація</Link>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;
