import type { Book } from "./book";

// Запрос на создание нового планирования (тренировки)
export interface AddPlanningRequest {
    startDate: string; // 'YYYY-MM-DD'
    endDate: string; // 'YYYY-MM-DD'
    books: string[]; // Массив ID книг
}

// Точка статистики для графика
export interface StatPoint {
    time: string;
    pagesCount: number;
}

// Объект планирования, который приходит от бэкенда (с исправленными полями)
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
export interface ReadPagesRequest {
    pages: number;
}
