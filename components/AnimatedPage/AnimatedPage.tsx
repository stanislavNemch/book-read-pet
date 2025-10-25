import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Экспортируем для использования в других компонентах
export const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

export const animationTransition = { duration: 0.3 };

interface AnimatedPageProps {
    children: ReactNode;
    className?: string;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children, className }) => {
    return (
        <motion.div
            className={className}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animationTransition}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
