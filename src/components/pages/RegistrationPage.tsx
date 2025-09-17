import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authService } from "../services/authService";
import type { RegistrationRequest } from "../types/auth";
import AuthLayout from "../AuthLayout/AuthLayout";
import RegisterForm from "../RegisterForm/RegisterForm";
import AuthHeader from "../AuthHeader/AuthHeader";

const RegistrationPage = () => {
    const navigate = useNavigate();

    const handleRegister = async (
        values: RegistrationRequest,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        try {
            // Вызываем метод register из нашего authService
            await authService.register(values);

            toast.success("Регистрация прошла успешно! Теперь войдите.");

            // После успешной регистрации перенаправляем на логин
            navigate("/login");
        } catch (error: any) {
            console.error(error);
            // Используем react-hot-toast для показа ошибок
            toast.error(
                error.response?.data?.message ||
                    "Ошибка при регистрации. Попробуйте снова."
            );
        } finally {
            // Сообщаем Formik, что отправка завершена
            setSubmitting(false);
        }
    };

    return (
        <>
            <AuthHeader />
            <AuthLayout>
                <RegisterForm onSubmit={handleRegister} />

                {/* Ссылка "Вже з нами? Увійти" из макета */}
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <span>Вже з нами? </span>
                    <Link to="/login">Увійти</Link>
                </div>
            </AuthLayout>
        </>
    );
};

export default RegistrationPage;
