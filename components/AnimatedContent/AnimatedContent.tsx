import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { animations, animationTransition } from "../AnimatedPage/AnimatedPage";

interface AnimatedContentProps {
    children: ReactNode;
    className?: string;
    animationKey: string; // Уникальный ключ для AnimatePresence
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
    children,
    className,
    animationKey,
}) => {
    return (
        <motion.div
            key={animationKey}
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

export default AnimatedContent;
