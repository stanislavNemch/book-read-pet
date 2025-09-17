import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";
import toast from "react-hot-toast";
import { authService } from "../services/authService";
import { useAuth } from "../hooks/useAuth";
import appCss from "../App/App.module.css";
import { FiHome, FiBookOpen } from "react-icons/fi"; // Иконки из react-icons

export default function Header() {
    const { logout, user } = useAuth();

    const handleLogout = async () => {
        try {
            await authService.logout();
            logout();
            toast.success("Вы успешно вышли!");
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Не удалось выйти из системы."
            );
            logout();
        }
    };

    // API при логине возвращает только email и id.
    // Поле `name` приходит только при регистрации.
    // Поэтому мы временно будем использовать первую букву email для аватара.
    const userName = user?.name || user?.email || "User";
    const userAvatarLetter = userName.charAt(0).toUpperCase();

    return (
        <header className={css.header}>
            <div className={clsx(appCss.container, css.headerContainer)}>
                <NavLink to="/library" className={css.logo}>
                    BR
                </NavLink>

                <div className={css.userMenu}>
                    <div className={css.avatar}>{userAvatarLetter}</div>
                    <span className={css.userName}>{userName}</span>
                </div>

                <div className={css.navWrapper}>
                    <nav className={css.nav}>
                        <NavLink
                            to="/library"
                            className={({ isActive }) =>
                                clsx(css.navLink, isActive && css.active)
                            }
                        >
                            <FiBookOpen size={22} />
                        </NavLink>
                        <NavLink
                            to="/training"
                            className={({ isActive }) =>
                                clsx(css.navLink, isActive && css.active)
                            }
                        >
                            <FiHome size={22} />
                        </NavLink>
                    </nav>

                    <button onClick={handleLogout} className={css.logoutButton}>
                        Вихід
                    </button>
                </div>
            </div>
        </header>
    );
}
