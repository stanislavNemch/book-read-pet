import type { Book } from "./book";

// Запрос на создание нового планирования (тренировки)
// POST /planning
export interface AddPlanningRequest {
    startDate: string; // 'YYYY-MM-DD'
    endDate: string; // 'YYYY-MM-DD'
    books: string[]; // Массив ID книг
}

// Точка статистики для графика
export interface StatPoint {
    date: string; // 'YYYY-MM-DD'
    pagesCount: number; // Обратите внимание: в документации "string", но скорее всего это ошибка, должно быть число. Используем number.
}

// Объект планирования, который приходит от бэкенда
// GET /planning
export interface Planning {
    _id: string;
    startDate: string;
    endDate: string;
    duration: number;
    pagesPerDay: number;
    books: Book[];
    stats: StatPoint[];
}

// Запрос на добавление прочитанных страниц
// PATCH /planning
export interface ReadPagesRequest {
    pages: number;
}
