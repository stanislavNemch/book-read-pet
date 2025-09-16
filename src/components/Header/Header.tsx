import css from "./Header.module.css";
import toast from "react-hot-toast";
import { authService } from "../services/authService";
import { useAuth } from "../hooks/useAuth";


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
            logout(); // Все равно выходим, чтобы очистить состояние
        }
    };

    return (
        <header className="container">
            <section className={css.headerSection}>
	    </section>
        </header>
    );
}
