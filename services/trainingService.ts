import { api } from "../lib/api";
import type {
    Planning,
    AddPlanningRequest,
    ReadPagesRequest,
} from "../types/training";

// Отримати дані про активне планування (тренування)
export const getPlanning = async (): Promise<Planning | null> => {
    try {
        const { data } = await api.get("/planning");

        // Перевіряємо, чи існує вкладений об'єкт "planning" і чи є у нього ID
        if (data && data.planning && data.planning._id) {
            return data.planning; // Повертаємо вкладений об'єкт
        }

        return null;
    } catch (error: any) {
        // Якщо відповідь - помилка, значить планування немає
        return null;
    }
};

// Створити нове планування (тренування)
export const startPlanning = async (
    planningData: AddPlanningRequest
): Promise<Planning> => {
    const { data } = await api.post("/planning", planningData);
    // Відповідь на створення приходить в тій же структурі { planning: ... }
    return data.planning;
};

// Додати прочитані сторінки до поточного планування
export const addReadPages = async (
    pagesData: ReadPagesRequest
): Promise<any> => {
    const { data } = await api.patch("/planning", pagesData);
    return data;
};

// Видалити/завершити поточне тренування
export const deletePlanning = async (): Promise<any> => {
    const { data } = await api.delete("/planning");
    return data;
};
