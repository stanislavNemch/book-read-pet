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
    // --- ИСПРАВЛЕНИЕ ЗДЕСЬ: 'date' заменено на 'time' ---
    stats: [
        { time: "2025-10-01 21:45", pagesCount: 160 },
        { time: "2025-10-02 22:10", pagesCount: 140 },
        { time: "2025-10-03 23:00", pagesCount: 175 },
        { time: "2025-10-04 21:50", pagesCount: 150 },
        { time: "2025-10-05 22:30", pagesCount: 180 },
        { time: "2025-10-06 20:55", pagesCount: 130 },
        { time: "2025-10-07 22:05", pagesCount: 155 },
        { time: "2025-10-08 21:40", pagesCount: 165 },
        { time: "2025-10-09 23:15", pagesCount: 190 },
        { time: "2025-10-10 22:22", pagesCount: 145 },
        { time: "2025-10-11 21:35", pagesCount: 160 },
        { time: "2025-10-12 22:00", pagesCount: 170 },
        { time: "2025-10-13 23:05", pagesCount: 200 },
        { time: "2025-10-14 21:58", pagesCount: 120 },
        { time: "2025-10-15 22:12", pagesCount: 158 },
        { time: "2025-10-16 22:45", pagesCount: 162 },
        { time: "2025-10-17 21:50", pagesCount: 185 },
        { time: "2025-10-18 22:08", pagesCount: 140 },
        { time: "2025-10-19 23:01", pagesCount: 150 },
        { time: "2025-10-20 22:30", pagesCount: 177 },
    ],
};
