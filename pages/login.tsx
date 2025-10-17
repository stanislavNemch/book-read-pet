import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { authService } from "../src/components/services/authService";
import type { LoginRequest, LoginResponse } from "../src/components/types/auth";
import Quote from "../src/components/Quote/Quote";
import AuthFormContainer from "../src/components/AuthFormContainer/AuthFormContainer";
import AuthHeader from "../src/components/AuthHeader/AuthHeader";
import AnimatedPage from "../src/components/AnimatedPage/AnimatedPage";
import { useAuth } from "../src/components/hooks/useAuth";
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
            toast.success("Вход выполнен успешно!");
            router.push("/library");
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Неверный email или пароль."
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

                <section className={css.quoteSection}>
                    <Quote />
                </section>
            </main>
        </AnimatedPage>
    );
};

export default LoginPage;
