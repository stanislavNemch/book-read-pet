import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { authService } from "../services/authService";
import type { RegistrationRequest } from "../types/auth";
import AuthHeader from "../components/AuthHeader/AuthHeader";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import GoogleAuthBtn from "../components/GoogleAuthBtn/GoogleAuthBtn";
import AuthInfo from "../components/AuthInfo/AuthInfo";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Link from "next/link";
import css from "./styles/LoginPage.module.css";
import regCss from "./styles/RegistrationPage.module.css";

const RegistrationPage = () => {
    const router = useRouter();

    const handleRegister = async (
        values: RegistrationRequest,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        try {
            await authService.register(values);
            toast.success("Регистрация прошла успешно! Теперь войдите.");
            router.push("/login");
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Ошибка при регистрации."
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
                    <div className={regCss.formContainer}>
                        <GoogleAuthBtn />
                        <RegisterForm onSubmit={handleRegister} />
                        <div className={regCss.loginLinkWrapper}>
                            <span>Вже з нами? </span>
                            <Link href="/login" className={regCss.loginLink}>
                                Увійти
                            </Link>
                        </div>
                    </div>
                </section>

                <section
                    className={`${css.quoteSection} ${regCss.hideInfoOnMobile}`}
                >
                    <AuthInfo />
                </section>
            </main>
        </AnimatedPage>
    );
};

export default RegistrationPage;
