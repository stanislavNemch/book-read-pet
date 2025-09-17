import { api } from "../api/api";

// Временная функция, чтобы 'api' не считалась неиспользуемой
export const getMyBooks = () => {
    return api.get("/user/books");
};
