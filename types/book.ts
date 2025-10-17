// Описывает книгу, как она приходит от бэкенда
export interface Book {
    _id: string;
    title: string;
    author: string;
    publishYear: number;
    pagesTotal: number;
    pagesFinished: number;
    rating?: number;
    feedback?: string;
}

// Запрос на добавление новой книги
export interface AddBookRequest {
    title: string;
    author: string;
    publishYear: number;
    pagesTotal: number;
}

// Запрос на добавление отзыва
export interface BookReviewRequest {
    rating: number;
    feedback: string;
}

// Ответ от эндпоинта /user/books
export interface GetUserBooksResponse {
    name: string;
    email: string;
    goingToRead: Book[];
    currentlyReading: Book[];
    finishedReading: Book[];
}
