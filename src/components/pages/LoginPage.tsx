import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import { authService } from "../services/authService";
import type { LoginRequest, LoginResponse } from "../types/auth";
import css from "./LoginPage.module.css";
import Quote from "../Quote/Quote";
import AuthFormContainer from "../AuthFormContainer/AuthFormContainer";
import AuthHeader from "../AuthHeader/AuthHeader";
import AnimatedPage from "../AnimatedPage/AnimatedPage";

const LoginPage = () => {
    const { login } = useAuth();

    const handleLogin = async (
        values: LoginRequest,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        try {
            const { data } = await authService.login(values);
            login(data as LoginResponse);
            toast.success("Вход выполнен успешно!");
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Неверный email или пароль."
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <AnimatedPage className={css.pageContainer}>
                <AuthHeader />
                <main className={css.pageWrapper}>
                    {/* Эта секция будет с фоном */}
                    <section className={css.formSection}>
                        <AuthFormContainer onLogin={handleLogin} />
                    </section>

                    {/* Эта секция будет с цитатой */}
                    <section className={css.quoteSection}>
                        <Quote />
                    </section>
                </main>
            </AnimatedPage>
        </>
    );
};

export default LoginPage;
