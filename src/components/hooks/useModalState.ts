import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
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
    const location = useLocation();
    const initialMountRef = useRef(true);
    const lastPathRef = useRef(location.pathname);

    // Методы управления
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((o) => !o), []);

    // Закрытие при смене маршрута (кроме первого монтирования)
    useEffect(() => {
        if (!closeOnRouteChange) return;
        if (initialMountRef.current) {
            initialMountRef.current = false;
            lastPathRef.current = location.pathname;
            return;
        }
        if (location.pathname !== lastPathRef.current) {
            lastPathRef.current = location.pathname;
            setIsOpen(false);
        }
    }, [location, closeOnRouteChange]);

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
