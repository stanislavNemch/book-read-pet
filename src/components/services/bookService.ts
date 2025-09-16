import { api } from "../api/api";

// Временная функция, чтобы 'api' не считалась неиспользуемой
// TODO: Заменить на реальные функции для работы с книгами
export const getMyBooks = () => {
    return api.get("/user/books");
};
