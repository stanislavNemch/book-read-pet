import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authService } from "../services/authService";
import type { RegistrationRequest } from "../types/auth";
import AuthHeader from "../AuthHeader/AuthHeader";
import RegisterForm from "../RegisterForm/RegisterForm";
import GoogleAuthBtn from "../GoogleAuthBtn/GoogleAuthBtn";
import AuthInfo from "../AuthInfo/AuthInfo";
import clsx from "clsx";

import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { useModalState } from "../hooks/useModalState";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

import css from "./LoginPage.module.css";
import regCss from "./RegistrationPage.module.css";

const ANIMATION_MS = 250;

const RegistrationPage = () => {
    // Универсальный модальный стейт
    const modal = useModalState({
        initialOpen: true,
        mobileOnly: true,
        closeOnRouteChange: true,
        reopenOnReturnToMobile: true,
    });

    const navigate = useNavigate();

    // Лочим скролл только если открыто и мобильный
    useBodyScrollLock(modal.isOpen && modal.isMobile, { breakpoint: 768 });

    // Анимационное состояние (нужно, чтобы при закрытии мы дождались transition)
    const [isMounted, setIsMounted] = useState(modal.isOpen);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (modal.isOpen) {
            setIsMounted(true);
            setIsClosing(false);
        } else if (isMounted) {
            setIsClosing(true);
            const t = setTimeout(() => {
                setIsMounted(false);
                setIsClosing(false);
            }, ANIMATION_MS);
            return () => clearTimeout(t);
        }
    }, [modal.isOpen, isMounted]);

    // Закрытие по Escape
    useEscapeKey(() => modal.close(), modal.isOpen);

    // Реф контейнера (чтобы клик вне закрывал)
    const modalRef = useRef<HTMLDivElement | null>(null);
    useOnClickOutside(modalRef, () => {
        if (modal.isOpen) modal.close();
    });

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

    const showModalLayer = modal.shouldRender && isMounted;
    const modalContentClass = clsx(
        regCss.mobileInfoModal,
        modal.isOpen && !isClosing && regCss.mobileInfoModalOpen,
        isClosing && regCss.mobileInfoModalClosing
    );

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

                {showModalLayer && (
                    <div className={regCss.modalLayer} aria-live="off">
                        {/* Overlay */}
                        <div
                            className={clsx(
                                regCss.modalOverlay,
                                modal.isOpen &&
                                    !isClosing &&
                                    regCss.modalOverlayOpen
                            )}
                            // Дополнительно можно закрывать по клику прямо здесь:
                            onClick={() => modal.close()}
                        />
                        {/* Modal Content */}
                        <div
                            className={modalContentClass}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Информация о сервисе"
                            ref={modalRef}
                        >
                            <div className={regCss.modalContent}>
                                <AuthInfo />
                                <div className={regCss.modalButtons}>
                                    <Link
                                        to="/login"
                                        className={regCss.loginBtn}
                                    >
                                        Увійти
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => modal.close()}
                                        className={regCss.registerBtn}
                                    >
                                        Реєстрація
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default RegistrationPage;
