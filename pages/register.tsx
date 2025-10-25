import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import toast from "react-hot-toast";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { authService } from "../services/authService";
import type { RegistrationRequest } from "../types/auth";
import AuthHeader from "../components/AuthHeader/AuthHeader";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import GoogleAuthBtn from "../components/GoogleAuthBtn/GoogleAuthBtn";
import AuthInfo from "../components/AuthInfo/AuthInfo";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import AnimatedContent from "../components/AnimatedContent/AnimatedContent";
import { useMediaQuery } from "../hooks/useMediaQuery";
import loginPageCss from "./styles/LoginPage.module.css";
import regPageCss from "./styles/RegistrationPage.module.css";

const RegistrationPage = () => {
    const router = useRouter();
    const isMobile = useMediaQuery("(max-width: 767px)");
    const [showFormOnMobile, setShowFormOnMobile] = useState(false);

    const handleRegister = async (
        values: RegistrationRequest,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        try {
            await authService.register(values);
            toast.success("Реєстрація пройшла успішно! Тепер увійдіть.");
            router.push("/login");
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Помилка під час реєстрації."
            );
        } finally {
            setSubmitting(false);
        }
    };

    const handleShowRegisterForm = () => {
        setShowFormOnMobile(true);
    };

    return (
        <AnimatedPage className={loginPageCss.pageContainer}>
            <AuthHeader />
            <main className={loginPageCss.pageWrapper}>
                <section
                    className={clsx(
                        loginPageCss.formSection,
                        isMobile &&
                            !showFormOnMobile &&
                            loginPageCss.formSectionLight
                    )}
                >
                    <AnimatePresence mode="wait">
                        {isMobile && !showFormOnMobile ? (
                            <AnimatedContent
                                animationKey="auth-info"
                                className={regPageCss.mobileInfoContainer}
                            >
                                <AuthInfo />
                                <div className={loginPageCss.mobileAuthButtons}>
                                    <Link
                                        href="/login"
                                        className={loginPageCss.mobileLoginBtn}
                                    >
                                        Увійти
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={handleShowRegisterForm}
                                        className={
                                            loginPageCss.mobileRegisterBtn
                                        }
                                    >
                                        Реєстрація
                                    </button>
                                </div>
                            </AnimatedContent>
                        ) : (
                            <AnimatedContent
                                animationKey="register-form"
                                className={regPageCss.formContainer}
                            >
                                <GoogleAuthBtn />
                                <RegisterForm onSubmit={handleRegister} />
                                <div className={regPageCss.loginLinkWrapper}>
                                    <span>Вже з нами? </span>
                                    <Link
                                        href="/login"
                                        className={regPageCss.loginLink}
                                    >
                                        Увійти
                                    </Link>
                                </div>
                            </AnimatedContent>
                        )}
                    </AnimatePresence>
                </section>

                {!isMobile && (
                    <section className={loginPageCss.quoteSection}>
                        <AuthInfo />
                    </section>
                )}
            </main>
        </AnimatedPage>
    );
};

export default RegistrationPage;
