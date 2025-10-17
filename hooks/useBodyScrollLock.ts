import { useEffect, useRef } from "react";

export function useBodyScrollLock(
    active: boolean,
    options?: { breakpoint?: number }
) {
    const { breakpoint = 768 } = options || {};
    const wasLockedRef = useRef(false);
    const scrollYRef = useRef(0);

    useEffect(() => {
        const lock = () => {
            if (wasLockedRef.current) return;
            scrollYRef.current = window.scrollY;
            document.body.classList.add("scroll-lock");
            // Фиксируем текущую позицию
            document.body.style.top = `-${scrollYRef.current}px`;
            wasLockedRef.current = true;
        };

        const unlock = () => {
            if (!wasLockedRef.current) return;
            document.body.classList.remove("scroll-lock");
            document.body.style.top = "";
            window.scrollTo(0, scrollYRef.current);
            wasLockedRef.current = false;
        };

        const apply = () => {
            const isMobile = window.innerWidth < breakpoint;
            if (active && isMobile) lock();
            else unlock();
        };

        apply();
        window.addEventListener("resize", apply);
        return () => {
            window.removeEventListener("resize", apply);
            unlock();
        };
    }, [active, breakpoint]);
}
