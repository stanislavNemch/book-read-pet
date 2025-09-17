// import { api } from "../api/api";
import toast from "react-hot-toast";
import css from "./GoogleAuthBtn.module.css";
import googleIcon from "../../assets/google.svg";

const GoogleAuthBtn = () => {
    // Получаем базовый URL из нашего инстанса axios
    // const googleAuthUrl = `${api.defaults.baseURL}/auth/google`;

    const handleDummyClick = () => {
        toast.error(
            "Авторизация через Google временно недоступна. Пожалуйста, используйте email и пароль.",
            {
                duration: 4000,
            }
        );
    };

    return (
        // Ссылка (<a>) она ведет на внешний URL (бэкенд)
        // <a href={googleAuthUrl} className={css.googleButton}>
        //     <img src={googleIcon} alt="Google" className={css.icon} />
        //     <span className={css.text}>Google</span>
        // </a>

        <button
            type="button"
            onClick={handleDummyClick}
            className={css.googleButton}
        >
            <img src={googleIcon} alt="Google" className={css.icon} />
            <span className={css.text}>Google</span>
        </button>
    );
};

export default GoogleAuthBtn;
