import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authService } from "../services/authService";
import type { RegistrationRequest } from "../types/auth";
import AuthHeader from "../AuthHeader/AuthHeader";
import RegisterForm from "../RegisterForm/RegisterForm";
import GoogleAuthBtn from "../GoogleAuthBtn/GoogleAuthBtn";
import AuthInfo from "../AuthInfo/AuthInfo";
import clsx from "clsx";
// Стили со страницы логина для общей структуры
import css from "./LoginPage.module.css";
// Уникальные стили для этой страницы
import regCss from "./RegistrationPage.module.css";

const RegistrationPage = () => {
    // Состояние для управления видимостью мобильного инфо-окна
    const [isInfoModalOpen, setInfoModalOpen] = useState(true);
    const navigate = useNavigate();

    const handleRegister = async (
        values: RegistrationRequest,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        try {
            await authService.register(values);
            toast.success("Регистрация прошла успешно! Теперь войдите.");
            navigate("/login");
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Ошибка при регистрации."
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <AuthHeader />
            <main className={css.pageWrapper}>
                {/* Секция с формой (левая колонка на десктопе) */}
                <section className={css.formSection}>
                    <div className={regCss.formContainer}>
                        <GoogleAuthBtn />
                        <RegisterForm onSubmit={handleRegister} />
                        <div className={regCss.loginLinkWrapper}>
                            <span>Вже з нами? </span>
                            <Link to="/login" className={regCss.loginLink}>
                                Увійти
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Секция с информацией (правая колонка на десктопе) */}
                <section
                    className={clsx(css.quoteSection, regCss.hideInfoOnMobile)}
                >
                    <AuthInfo />
                </section>

                {/* МОБИЛЬНОЕ ИНФОРМАЦИОННОЕ ОКНО (модалка) */}
                {isInfoModalOpen && (
                    <div className={regCss.mobileInfoModal}>
                        <AuthInfo />
                        <div className={regCss.modalButtons}>
                            <Link to="/login" className={regCss.loginBtn}>
                                Увійти
                            </Link>
                            <button
                                onClick={() => setInfoModalOpen(false)}
                                className={regCss.registerBtn}
                            >
                                Реєстрація
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
};

export default RegistrationPage;
