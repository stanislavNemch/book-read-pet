import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import css from "./Header.module.css";
import toast from "react-hot-toast";
import { authService } from "../../services/authService";
import { useAuth } from "../../hooks/useAuth";
import appCss from "../../styles/container.module.css";
import { FiHome, FiBookOpen } from "react-icons/fi";

export default function Header() {
    const { logout, user } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await authService.logout();
            logout();
            toast.success("Вы успешно вышли!");
            router.push("/login");
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Не удалось выйти из системы."
            );
            logout();
            router.push("/login");
        }
    };

    const userName = user?.name || user?.email || "User";
    const userAvatarLetter = userName.charAt(0).toUpperCase();

    const isActive = (path: string) => router.pathname === path;

    return (
        <header className={css.header}>
            <div className={clsx(appCss.container, css.headerContainer)}>
                <Link href="/library" className={css.logo}>
                    BR
                </Link>

                <div className={css.navWrapper}>
                    <div className={css.userMenu}>
                        <div className={css.avatar}>{userAvatarLetter}</div>
                        <span className={css.userName}>{userName}</span>
                    </div>
                    <nav className={css.nav}>
                        <Link
                            href="/library"
                            className={clsx(
                                css.navLink,
                                isActive("/library") && css.active
                            )}
                        >
                            <FiBookOpen size={22} />
                        </Link>
                        <Link
                            href="/training"
                            className={clsx(
                                css.navLink,
                                isActive("/training") && css.active
                            )}
                        >
                            <FiHome size={22} />
                        </Link>
                    </nav>
                    <button onClick={handleLogout} className={css.logoutButton}>
                        Вихід
                    </button>
                </div>
            </div>
        </header>
    );
}
