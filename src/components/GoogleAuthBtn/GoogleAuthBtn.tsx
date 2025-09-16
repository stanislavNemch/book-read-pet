import { api } from "../api/api";
import css from "./GoogleAuthBtn.module.css";

// Импортируем иконку Google (предполагая, что она у вас есть)
import googleIcon from "../../assets/google.svg";

const GoogleAuthBtn = () => {
    // Получаем базовый URL из нашего инстанса axios
    //
    const googleAuthUrl = `${api.defaults.baseURL}/auth/google`;

    return (
        // Это должна быть ссылка (<a>), а не кнопка (<button>),
        // так как она ведет на внешний URL (бэкенд)
        <a href={googleAuthUrl} className={css.googleButton}>
            <img src={googleIcon} alt="Google" className={css.icon} />
            <span className={css.text}>Google</span>
        </a>
    );
};

export default GoogleAuthBtn;
