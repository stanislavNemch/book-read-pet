import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";

const Custom404 = () => {
    // 1. Получаем доступ к роутеру для перенаправления
    const router = useRouter();
    // 2. Получаем статус аутентификации из нашего AuthContext
    const { isLoggedIn, isLoading } = useAuth();

    useEffect(() => {
        // 3. Ждем, пока завершится первоначальная проверка статуса (isLoggedIn еще может быть не определен)
        if (isLoading) {
            return; // Ничего не делаем, пока идет проверка
        }

        // 4. Логика перенаправления
        if (isLoggedIn) {
            // Если пользователь авторизован, отправляем его в библиотеку
            router.replace("/library");
        } else {
            // Если пользователь не авторизован (гость), отправляем на страницу регистрации
            router.replace("/register");
        }
    }, [isLoading, isLoggedIn, router]); // Этот эффект сработает, как только изменится статус

    // 5. Пока идет проверка и подготовка к редиректу, показываем лоадер на весь экран.
    // Это предотвращает мигание какого-либо другого контента.
    return <Loader type="full-page" />;
};

export default Custom404;
