import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { authService } from "../services/authService";
import type { RegistrationRequest } from "../types/auth";
import AuthHeader from "../AuthHeader/AuthHeader";
import RegisterForm from "../RegisterForm/RegisterForm";
import GoogleAuthBtn from "../GoogleAuthBtn/GoogleAuthBtn";
import AuthInfo from "../AuthInfo/AuthInfo";
import clsx from "clsx";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { useMediaQuery } from "../hooks/useMediaQuery";
import css from "./LoginPage.module.css";
import regCss from "./RegistrationPage.module.css";

const RegistrationPage = () => {
    // По умолчанию хотим показывать модалку на мобильном
    const [isInfoModalOpen, setInfoModalOpen] = useState(true);

    const isMobile = useMediaQuery("(max-width: 767px)");
    const navigate = useNavigate();
    const location = useLocation();
    const initialMountRef = useRef(true);
    const lastPathRef = useRef(location.pathname);

    // Лочим скролл только если реально открыта модалка на мобильном
    useBodyScrollLock(isMobile && isInfoModalOpen, { breakpoint: 768 });

    // Реагируем на смену ширины: если ушли с mobile — закрыть; если вернулись — открыть (можно убрать reopen, если не нужно)
    useEffect(() => {
        if (!isMobile) {
            if (isInfoModalOpen) setInfoModalOpen(false);
        } else {
            // Если нужно, чтобы при возврате на мобильное модалка снова появлялась:
            if (!isInfoModalOpen) setInfoModalOpen(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile]);

    // Закрывать модалку при смене маршрута (КРОМЕ первого рендера)
    useEffect(() => {
        if (initialMountRef.current) {
            initialMountRef.current = false;
            lastPathRef.current = location.pathname;
            return;
        }
        if (location.pathname !== lastPathRef.current) {
            lastPathRef.current = location.pathname;
            if (isInfoModalOpen) setInfoModalOpen(false);
        }
    }, [location, isInfoModalOpen]);

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

    const shouldShowModal = isMobile && isInfoModalOpen;

    return (
        <div className={css.pageContainer}>
            <AuthHeader />
            <main className={css.pageWrapper}>
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

                <section
                    className={clsx(css.quoteSection, regCss.hideInfoOnMobile)}
                >
                    <AuthInfo />
                </section>

                {shouldShowModal && (
                    <div className={regCss.mobileInfoModal}>
                        <div className={regCss.modalContent}>
                            <AuthInfo />
                            <div className={regCss.modalButtons}>
                                <Link to="/login" className={regCss.loginBtn}>
                                    Увійти
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setInfoModalOpen(false)}
                                    className={regCss.registerBtn}
                                >
                                    Реєстрація
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default RegistrationPage;
