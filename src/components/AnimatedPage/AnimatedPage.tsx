import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Определяем саму анимацию
const animations = {
    initial: { opacity: 0, x: 100 }, // Начальное состояние: прозрачный и справа
    animate: { opacity: 1, x: 0 }, // Конечное состояние: видимый и на своем месте
    exit: { opacity: 0, x: -100 }, // Состояние при уходе: прозрачный и слева
};

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
            transition={{ duration: 0.3 }} // Длительность анимации
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
