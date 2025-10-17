import { api } from "../api/api";
import type {
    Book,
    AddBookRequest,
    BookReviewRequest,
    GetUserBooksResponse,
} from "../types/book";

// Получить все книги пользователя
export const getUserBooks = async (): Promise<GetUserBooksResponse> => {
    const { data } = await api.get("/user/books");
    return data;
};

// Добавить новую книгу
export const addBook = async (bookData: AddBookRequest): Promise<Book> => {
    const { data } = await api.post("/book", bookData);
    return data;
};

// Удалить книгу
export const deleteBook = async (bookId: string): Promise<Book> => {
    const { data } = await api.delete(`/book/${bookId}`);
    return data;
};

// Добавить/обновить отзыв о книге
export const addBookReview = async (
    bookId: string,
    reviewData: BookReviewRequest
): Promise<Book> => {
    const { data } = await api.patch(`/book/review/${bookId}`, reviewData);
    return data;
};
