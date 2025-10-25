import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { authService } from "../services/authService";
import type { LoginRequest, LoginResponse } from "../types/auth";
import Quote from "../components/Quote/Quote"; // Повертаємо Quote
import AuthFormContainer from "../components/AuthFormContainer/AuthFormContainer";
import AuthHeader from "../components/AuthHeader/AuthHeader";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import { useAuth } from "../hooks/useAuth";
import css from "./styles/LoginPage.module.css";

const LoginPage = () => {
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = async (
        values: LoginRequest,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        try {
            const { data } = await authService.login(values);
            login(data as LoginResponse);
            toast.success("Вхід виконано успішно!");
            router.push("/library"); // Перенаправляємо після логіну
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Невірний email або пароль."
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <AnimatedPage className={css.pageContainer}>
            <AuthHeader />
            <main className={css.pageWrapper}>
                <section className={css.formSection}>
                    <AuthFormContainer onLogin={handleLogin} />
                </section>

                {/* Залишаємо Quote для десктопу/планшету */}
                <section className={css.quoteSection}>
                    <Quote />
                </section>
            </main>
        </AnimatedPage>
    );
};

export default LoginPage;
