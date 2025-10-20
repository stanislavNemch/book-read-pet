import { api } from "../lib/api";
import type {
    Planning,
    AddPlanningRequest,
    ReadPagesRequest,
} from "../types/training";

// Получить данные об активном планировании (тренировке)
export const getPlanning = async (): Promise<Planning | null> => {
    try {
        const { data } = await api.get("/planning");
        // Бэкенд возвращает Planning | {}, поэтому проверяем наличие ID
        if (data && data._id) {
            return data;
        }
        return null;
    } catch (error: any) {
        // Если ответ - ошибка, но не 404, возможно это проблема с токеном, которую обработает interceptor
        // Если 404 или другая ошибка, значит планирования нет
        return null;
    }
};

// Создать новое планирование (тренировку)
export const startPlanning = async (
    planningData: AddPlanningRequest
): Promise<Planning> => {
    const { data } = await api.post("/planning", planningData);
    return data;
};

// Добавить прочитанные страницы к текущему планированию
export const addReadPages = async (
    pagesData: ReadPagesRequest
): Promise<any> => {
    // Тип ответа сложный, пока оставим any
    const { data } = await api.patch("/planning", pagesData);
    return data;
};
