import css from "./Header.module.css";
import toast from "react-hot-toast";
import { authService } from "../services/authService";
import { useAuth } from "../hooks/useAuth";
// Импортируем стили App, чтобы взять .container
import appCss from "../App/App.module.css";

export default function Header() {
    // 'user' и 'logout' теперь будут использоваться
    const { logout, user } = useAuth();

    // 'handleLogout' теперь будет использоваться
    const handleLogout = async () => {
        try {
            await authService.logout();
            logout();
            toast.success("Вы успешно вышли!");
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Не удалось выйти из системы."
            );
            logout(); // Все равно выходим, чтобы очистить состояние
        }
    };

    return (
        <header className={css.header}>
            {/* Используем .container для секции, как вы просили */}
            <section className={appCss.container}>
                <div className={css.headerSection}>
                    {/* --- ВРЕМЕННАЯ ОТЛАДОЧНАЯ ПАНЕЛЬ --- */}
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
                    {/* --- КОНЕЦ ВРЕМЯНКИ --- */}
                </div>
            </section>
        </header>
    );
}
