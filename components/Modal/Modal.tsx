import { useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import css from "./Modal.module.css";
import { useEscapeKey } from "../../hooks/useEscapeKey";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const backdropAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEscapeKey(onClose, isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={css.backdrop}
                    onClick={handleBackdropClick}
                    variants={backdropAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        className={css.modalContent}
                        variants={modalAnimation}
                        transition={{ duration: 0.2 }}
                    >
                        <button
                            className={css.closeButton}
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            <IoClose size={24} />
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
