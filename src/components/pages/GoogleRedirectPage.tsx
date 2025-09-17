import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { LoginResponse } from "../types/auth";
import toast from "react-hot-toast";

const GoogleRedirectPage = () => {
    const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            // 1. Парсим query-параметры из URL
            const searchParams = new URLSearchParams(location.search);
            const accessToken = searchParams.get("accessToken");
            const refreshToken = searchParams.get("refreshToken");
            const sid = searchParams.get("sid");

            // TODO: Бэкенд также должен вернуть userData (id, email)
            // Либо нам нужно сделать доп. запрос на /user/me
            // Предположим, что userData тоже в query (нужно уточнить у бэкенда)
            // const email = searchParams.get('email');
            // const id = searchParams.get('id');

            if (!accessToken || !refreshToken || !sid) {
                // Если чего-то не хватает, это ошибка
                throw new Error(
                    "Ошибка аутентификации Google. Отсутствуют токены."
                );
            }

            // 2. Собираем данные в тот же формат, что и при обычном логине
            //
            const loginData: LoginResponse = {
                accessToken,
                refreshToken,
                sid,
                // Это временная заглушка, т.к. бэкенд не вернул user
                // В идеале: { email, id } из searchParams
                userData: {
                    name: "User", // Заглушка, т.к. имя не приходит
                    email: "Email", // Нужно будет сделать запрос на /user
                    id: "ID User",
                },
            };

            // 3. Используем нашу стандартную функцию login
            login(loginData);

            // 4. Перенаправляем пользователя
            toast.success("Вход через Google выполнен успешно!");
            navigate("/library");
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || "Не удалось войти через Google.");
            navigate("/login");
        }
    }, [location, login, navigate]);

    // Пока идет обработка, показываем индикатор загрузки
    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h2>Выполняется вход через Google...</h2>
            {/* Сюда можно добавить компонент Loader (спиннер) */}
        </div>
    );
};

export default GoogleRedirectPage;
