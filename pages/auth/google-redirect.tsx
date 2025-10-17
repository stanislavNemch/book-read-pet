import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../src/components/hooks/useAuth";
import type { LoginResponse } from "../../src/components/types/auth";
import toast from "react-hot-toast";

const GoogleRedirectPage = () => {
    const { login } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        try {
            const { accessToken, refreshToken, sid } = router.query;

            if (!accessToken || !refreshToken || !sid) {
                throw new Error(
                    "Ошибка аутентификации Google. Отсутствуют необходимые токены."
                );
            }

            const loginData: LoginResponse = {
                accessToken: accessToken as string,
                refreshToken: refreshToken as string,
                sid: sid as string,
                userData: {
                    name: "User",
                    email: "Email...",
                    id: "ID...",
                },
            };

            login(loginData);

            toast.success("Вход через Google выполнен успешно!");
            router.push("/library");
        } catch (error: any) {
            console.error("Ошибка при обработке редиректа Google:", error);
            toast.error(error.message || "Не удалось войти через Google.");
            router.push("/login");
        }
    }, [router.isReady, router.query, login, router]);

    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h2>Выполняется вход через Google...</h2>
            <p>Пожалуйста, подождите.</p>
        </div>
    );
};

export default GoogleRedirectPage;
