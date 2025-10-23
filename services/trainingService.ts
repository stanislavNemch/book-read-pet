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

        if (data && data.planning && data.planning._id) {
            return data.planning;
        }
        return null;
    } catch (error: any) {
        if (error.response && error.response.status === 403) {
            return null;
        }
        throw error;
    }
};

// Створити нове планування (тренування)
export const startPlanning = async (
    planningData: AddPlanningRequest
): Promise<Planning> => {
    const { data } = await api.post("/planning", planningData);
    return data.planning;
};

// Додати прочитані сторінки до поточного планування
export const addReadPages = async (
    pagesData: ReadPagesRequest
): Promise<any> => {
    const { data } = await api.patch("/planning", pagesData);
    return data;
};
