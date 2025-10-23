import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Header from "../components/Header/Header";
import appCss from "../styles/container.module.css";
import css from "./styles/LibraryPage.module.css";
import {
    addBook,
    getUserBooks,
    deleteBook,
    addBookReview,
} from "../services/bookService";
import type { AddBookRequest, Book, BookReviewRequest } from "../types/book";
import AddBookForm from "../components/AddBookForm/AddBookForm";
import Instructions from "../components/Instructions/Instructions";
import Modal from "../components/Modal/Modal";
import MyBooks from "../components/MyBooks/MyBooks";
import BookReviewForm from "../components/BookReviewForm/BookReviewForm";
import Loader from "../components/Loader/Loader";

const LibraryPage = () => {
    const queryClient = useQueryClient();
    const [isInstructionsModalOpen, setInstructionsModalOpen] = useState(false);

    // --- Состояние для модального окна отзыва ---
    const [isReviewModalOpen, setReviewModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["userBooks"],
        queryFn: getUserBooks,
        refetchOnMount: false,
    });

    useEffect(() => {
        if (isLoading) return;

        const hasSeenInstructions = localStorage.getItem("hasSeenInstructions");
        const isLibraryEmpty =
            !data ||
            (data.goingToRead.length === 0 &&
                data.currentlyReading.length === 0 &&
                data.finishedReading.length === 0);

        if (!hasSeenInstructions && isLibraryEmpty) {
            setInstructionsModalOpen(true);
        }
    }, [data, isLoading]);

    // --- Обработчики для модального окна отзыва ---
    const handleOpenReviewModal = (book: Book) => {
        setSelectedBook(book);
        setReviewModalOpen(true);
    };

    const handleCloseReviewModal = () => {
        setReviewModalOpen(false);
        setSelectedBook(null);
    };

    const deleteMutation = useMutation({
        mutationFn: (bookId: string) => deleteBook(bookId),
        onSuccess: (deletedBook) => {
            toast.success(`Книга "${deletedBook.title}" видалена`);
            queryClient.invalidateQueries({ queryKey: ["userBooks"] });
        },
        onError: (error) => {
            toast.error(`Помилка видалення: ${error.message}`);
        },
    });

    const handleDeleteBook = (bookId: string) => {
        deleteMutation.mutate(bookId);
    };

    const handleCloseInstructions = () => {
        localStorage.setItem("hasSeenInstructions", "true");
        setInstructionsModalOpen(false);
    };

    const mutation = useMutation({
        mutationFn: (newBook: AddBookRequest) => addBook(newBook),
        onSuccess: () => {
            toast.success("Книга успішно додана!");
            queryClient.invalidateQueries({ queryKey: ["userBooks"] });
            handleCloseInstructions();
        },
        onError: (error) => {
            toast.error(`Помилка: ${error.message}`);
        },
    });

    const handleAddBook = async (values: AddBookRequest) => {
        await mutation.mutateAsync(values);
    };

    // --- Мутация для добавления/обновления отзыва ---
    const reviewMutation = useMutation({
        mutationFn: ({
            bookId,
            reviewData,
        }: {
            bookId: string;
            reviewData: BookReviewRequest;
        }) => addBookReview(bookId, reviewData),
        onSuccess: () => {
            toast.success("Відгук збережено!");
            queryClient.invalidateQueries({ queryKey: ["userBooks"] });
            handleCloseReviewModal();
        },
        onError: (error) => {
            toast.error(`Помилка: ${error.message}`);
        },
    });

    const handleAddReview = async (values: BookReviewRequest) => {
        if (!selectedBook) return;
        await reviewMutation.mutateAsync({
            bookId: selectedBook._id,
            reviewData: values,
        });
    };

    if (isLoading) {
        return (
            <>
                <Header />
                <Loader type="content" />
            </>
        );
    }

    if (isError) {
        return (
            <>
                <Header />
                <div style={{ padding: "20px" }}>
                    Помилка завантаження даних. Спробуйте оновити сторінку.
                </div>
            </>
        );
    }

    const isLibraryEmpty =
        !data ||
        (data.goingToRead.length === 0 &&
            data.currentlyReading.length === 0 &&
            data.finishedReading.length === 0);

    return (
        <>
            <Header />
            <main className={appCss.container}>
                <div className={css.pageWrapper}>
                    <div className={css.leftColumn}>
                        <div className={css.desktopFormWrapper}>
                            <AddBookForm onSubmit={handleAddBook} />
                        </div>

                        <div className={css.mainContent}>
                            {isLibraryEmpty ? (
                                <div className={css.mobileFormWrapper}>
                                    <AddBookForm onSubmit={handleAddBook} />
                                </div>
                            ) : (
                                data && (
                                    <MyBooks
                                        data={data}
                                        onDeleteBook={handleDeleteBook}
                                        onOpenReviewModal={
                                            handleOpenReviewModal
                                        } // Передаем обработчик
                                    />
                                )
                            )}
                        </div>
                    </div>
                    {isLibraryEmpty && (
                        <div className={css.rightColumn}>
                            <div className={css.instructions}>
                                <Instructions />
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Modal
                isOpen={isInstructionsModalOpen}
                onClose={handleCloseInstructions}
            >
                <Instructions />
            </Modal>

            {/* Наше новое модальное окно для отзывов */}
            {selectedBook && (
                <Modal
                    isOpen={isReviewModalOpen}
                    onClose={handleCloseReviewModal}
                >
                    <BookReviewForm
                        book={selectedBook}
                        onSubmit={handleAddReview}
                        onClose={handleCloseReviewModal}
                    />
                </Modal>
            )}
        </>
    );
};

export default LibraryPage;
