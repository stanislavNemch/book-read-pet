import css from "./Header.module.css";
import toast from "react-hot-toast";
import { authService } from "../services/authService";
import { useAuth } from "../hooks/useAuth";
import appCss from "../App/App.module.css";

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

    return (
        <header className={css.header}>
            <section className={appCss.container}>
                <div className={css.headerSection}>
                    {user && (
                        <div className={css.userInfo}>
                            <span>{user.email}</span>
                            <button
                                onClick={handleLogout}
                                className={css.logoutButton}
                            >
                                Вийти
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </header>
    );
}
