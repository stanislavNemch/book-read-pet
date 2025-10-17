import Link from "next/link";
import css from "./AuthFormContainer.module.css";
import LoginForm from "../LoginForm/LoginForm";
import GoogleAuthBtn from "../GoogleAuthBtn/GoogleAuthBtn";
import type { LoginRequest } from "../types/auth";

interface AuthFormContainerProps {
    onLogin: (
        values: LoginRequest,
        helpers: { setSubmitting: (isSubmitting: boolean) => void }
    ) => void;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({ onLogin }) => {
    return (
        <div className={css.container}>
            <GoogleAuthBtn />
            <LoginForm onSubmit={onLogin} />
            <div className={css.registerLinkWrapper}>
                <Link href="/register" className={css.registerLink}>
                    Реєстрація
                </Link>
            </div>
        </div>
    );
};

export default AuthFormContainer;
