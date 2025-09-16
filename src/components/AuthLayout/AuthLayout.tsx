import type { ReactNode } from "react";
import css from "./AuthLayout.module.css";

interface AuthLayoutProps {
    children: ReactNode;
}

// Этот компонент будет обеспечивать фон и центрирование
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        // Вы просили секционную верстку
        <main className={css.main}>
            <section className={css.section}>
                {/* Этот div будет для контента (формы) */}
                <div className={css.contentWrapper}>{children}</div>
            </section>
        </main>
    );
};

export default AuthLayout;
