import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "./useMediaQuery";

interface UseModalStateOptions {
    initialOpen?: boolean;
    closeOnRouteChange?: boolean;
    mobileOnly?: boolean;
    mobileQuery?: string; // по умолчанию "(max-width: 767px)"
    reopenOnReturnToMobile?: boolean; // если вернулись на мобильный — снова открыть
}

export function useModalState(options: UseModalStateOptions = {}) {
    const {
        initialOpen = false,
        closeOnRouteChange = true,
        mobileOnly = false,
        mobileQuery = "(max-width: 767px)",
        reopenOnReturnToMobile = true,
    } = options;

    const [isOpen, setIsOpen] = useState(initialOpen);
    const isMobile = useMediaQuery(mobileQuery);
    const router = useRouter();
    const initialMountRef = useRef(true);
    const lastPathRef = useRef(router.pathname);

    // Методы управления
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((o) => !o), []);

    // Закрытие при смене маршрута (кроме первого монтирования)
    useEffect(() => {
        if (!closeOnRouteChange) return;
        if (initialMountRef.current) {
            initialMountRef.current = false;
            lastPathRef.current = router.pathname;
            return;
        }
        if (router.pathname !== lastPathRef.current) {
            lastPathRef.current = router.pathname;
            setIsOpen(false);
        }
    }, [router.pathname, closeOnRouteChange]);

    // Реакция на уход с мобильной ширины
    useEffect(() => {
        if (!mobileOnly) return;
        if (!isMobile) {
            if (isOpen) setIsOpen(false);
        } else {
            if (reopenOnReturnToMobile && !isOpen && initialOpen) {
                setIsOpen(true);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile, mobileOnly]);

    // shouldRender — пригодится для анимаций (компонент остаётся смонтированным немного дольше)
    const shouldRender = mobileOnly ? isMobile || isOpen : true;

    return {
        isOpen,
        open,
        close,
        toggle,
        isMobile,
        shouldRender,
    };
}
