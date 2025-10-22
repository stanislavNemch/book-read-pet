import type { Planning } from "../types/training";

// Этот объект полностью имитирует ответ сервера для активной тренировки
export const mockPlanningData: Planning = {
    _id: "mock-planning-id-123",
    startDate: "2025-10-01",
    endDate: "2025-10-20", // 20 дней тренировки
    duration: 20,
    pagesPerDay: 160, // Среднее плановое количество страниц в день
    books: [
        // --- 4 Прочитанные книги ---
        {
            _id: "book-1",
            title: "Scrum. Революционный метод управления проектами",
            author: "Джефф Сазерленд",
            publishYear: 2014,
            pagesTotal: 250,
            pagesFinished: 250, // Прочитана
        },
        {
            _id: "book-2",
            title: "Deadline. Роман об управлении проектами",
            author: "Том ДеМарко",
            publishYear: 2006,
            pagesTotal: 300,
            pagesFinished: 300, // Прочитана
        },
        {
            _id: "book-3",
            title: "5 Пороков команды. Притчи о лидерстве",
            author: "Патрик Ленсиони",
            publishYear: 2011,
            pagesTotal: 125,
            pagesFinished: 125, // Прочитана
        },
        {
            _id: "book-4",
            title: "Від хорошого до величного",
            author: "Джим Коллинз",
            publishYear: 2001,
            pagesTotal: 300,
            pagesFinished: 300, // Прочитана
        },
        // --- 4 Книги в процессе чтения ---
        {
            _id: "book-5",
            title: "Майстер і Маргарита",
            author: "Михаил Булгаков",
            publishYear: 1967,
            pagesTotal: 480,
            pagesFinished: 210, // В процессе
        },
        {
            _id: "book-6",
            title: "Сто років самотності",
            author: "Габриэль Гарсиа Маркес",
            publishYear: 1967,
            pagesTotal: 417,
            pagesFinished: 50, // В процессе
        },
        {
            _id: "book-7",
            title: "1984",
            author: "Джордж Оруэлл",
            publishYear: 1949,
            pagesTotal: 328,
            pagesFinished: 100, // В процессе
        },
        {
            _id: "book-8",
            title: "Колгосп тварин",
            author: "Джордж Оруэлл",
            publishYear: 1945,
            pagesTotal: 112,
            pagesFinished: 10, // В процессе
        },
        // --- 2 Книги, которые еще не начаты ---
        {
            _id: "book-9",
            title: "Маленький принц",
            author: "Антуан де Сент-Экзюпери",
            publishYear: 1943,
            pagesTotal: 96,
            pagesFinished: 0, // Не начата
        },
        {
            _id: "book-10",
            title: "451° за Фаренгейтом",
            author: "Рэй Брэдбери",
            publishYear: 1953,
            pagesTotal: 256,
            pagesFinished: 0, // Не начата
        },
    ],
    stats: [
        // Непрерывная статистика за 20 дней для графика
        { date: "2025-10-01", pagesCount: 160 },
        { date: "2025-10-02", pagesCount: 140 },
        { date: "2025-10-03", pagesCount: 175 },
        { date: "2025-10-04", pagesCount: 150 },
        { date: "2025-10-05", pagesCount: 180 },
        { date: "2025-10-06", pagesCount: 130 },
        { date: "2025-10-07", pagesCount: 155 },
        { date: "2025-10-08", pagesCount: 165 },
        { date: "2025-10-09", pagesCount: 190 },
        { date: "2025-10-10", pagesCount: 145 },
        { date: "2025-10-11", pagesCount: 160 },
        { date: "2025-10-12", pagesCount: 170 },
        { date: "2025-10-13", pagesCount: 200 },
        { date: "2025-10-14", pagesCount: 120 },
        { date: "2025-10-15", pagesCount: 158 },
        { date: "2025-10-16", pagesCount: 162 },
        { date: "2025-10-17", pagesCount: 185 },
        { date: "2025-10-18", pagesCount: 140 },
        { date: "2025-10-19", pagesCount: 150 },
        { date: "2025-10-20", pagesCount: 177 },
    ],
};
