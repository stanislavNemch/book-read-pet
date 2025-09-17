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
            let searchParams;

            // Проверяем, есть ли параметры в стандартном location.search (после "?")
            if (location.search) {
                searchParams = new URLSearchParams(location.search);
            } else {
                // Если нет, предполагаем, что бэкенд прислал "сломанный" URL с пробелами.
                // 1. Декодируем URL, чтобы '%20' превратился в пробел.
                const brokenPath = decodeURIComponent(location.pathname);
                // 2. Разделяем строку по первому пробелу.
                const queryString = brokenPath.substring(
                    brokenPath.indexOf(" ") + 1
                );
                // 3. Создаем параметры из "починенной" строки.
                searchParams = new URLSearchParams(queryString);
            }

            const accessToken = searchParams.get("accessToken");
            const refreshToken = searchParams.get("refreshToken");
            const sid = searchParams.get("sid");

            if (!accessToken || !refreshToken || !sid) {
                throw new Error(
                    "Ошибка аутентификации Google. Отсутствуют необходимые токены."
                );
            }

            // Собираем данные в объект, соответствующий типу LoginResponse.
            // Используем "заглушки", так как бэкенд не возвращает данные
            // пользователя в параметрах. В будущем здесь может быть
            // дополнительный запрос к API для получения user info.
            const loginData: LoginResponse = {
                accessToken,
                refreshToken,
                sid,
                userData: {
                    name: "User",
                    email: "Email...",
                    id: "ID...",
                },
            };

            // Вызываем функцию login из AuthContext
            login(loginData);

            toast.success("Вход через Google выполнен успешно!");
            navigate("/library");
        } catch (error: any) {
            console.error("Ошибка при обработке редиректа Google:", error);
            toast.error(error.message || "Не удалось войти через Google.");
            navigate("/login");
        }
    }, [location, login, navigate]);

    // Пока идет обработка, показываем индикатор загрузки
    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h2>Выполняется вход через Google...</h2>
            <p>Пожалуйста, подождите.</p>
        </div>
    );
};

export default GoogleRedirectPage;
