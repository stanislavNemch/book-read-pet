import { api } from "../api/api";
import toast from "react-hot-toast";
import css from "./GoogleAuthBtn.module.css";

const GoogleAuthBtn = () => {
    // ============================================
    // ВРЕМЕННАЯ ЗАГЛУШКА
    // ============================================
    // Бэкенд пока не поддерживает Google OAuth
    const handleDummyClick = () => {
        toast.error(
            "Авторизация через Google временно недоступна. Пожалуйста, используйте email и пароль.",
            {
                duration: 4000,
            }
        );
    };

    return (
        <button
            type="button"
            onClick={handleDummyClick}
            className={css.googleButton}
        >
            <img src="/google.svg" alt="Google" className={css.icon} />
            <span className={css.text}>Google</span>
        </button>
    );

    // ============================================
    // РАБОЧАЯ ВЕРСИЯ ДЛЯ БУДУЩЕГО
    // ============================================
    // Раскомментируйте код ниже, когда бэкенд будет поддерживать Google OAuth
    //
    // const url = new URL("/auth/google", api.defaults.baseURL!);
    // url.searchParams.set(
    //     "redirect_uri",
    //     `${typeof window !== "undefined" ? window.location.origin : ""}/auth/google-redirect`
    // );
    // const googleAuthUrl = url.toString();
    //
    // return (
    //     <a href={googleAuthUrl} className={css.googleButton}>
    //         <img src="/google.svg" alt="Google" className={css.icon} />
    //         <span className={css.text}>Google</span>
    //     </a>
    // );
};

export default GoogleAuthBtn;
