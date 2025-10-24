import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Header from "../components/Header/Header";
import appCss from "../styles/container.module.css";
import css from "./styles/LibraryPage.module.css";
import { addBook, getUserBooks, deleteBook } from "../services/bookService";
import type { AddBookRequest, Book } from "../types/book";
import AddBookForm from "../components/AddBookForm/AddBookForm";
import Instructions from "../components/Instructions/Instructions";
import Modal from "../components/Modal/Modal";
import MyBooks from "../components/MyBooks/MyBooks";

const LibraryPage = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const [isInstructionsModalOpen, setInstructionsModalOpen] = useState(false);
    const [selectedBookForReview, setSelectedBookForReview] =
        useState<Book | null>(null);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["userBooks"],
        queryFn: getUserBooks,
        retry: 1,
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

    const deleteMutation = useMutation({
        mutationFn: (bookId: string) => deleteBook(bookId),
        onSuccess: (deletedBook) => {
            toast.success(`Книга "${deletedBook.title}" видалена`);
            queryClient.invalidateQueries({ queryKey: ["userBooks"] });
        },
        onError: (error: any) => {
            toast.error(`Помилка видалення: ${error.message}`);
        },
    });

    const handleDeleteBook = (bookId: string) => {
        deleteMutation.mutate(bookId);
    };

    const handleOpenReviewModal = (book: Book) => {
        setSelectedBookForReview(book);
    };

    const handleCloseReviewModal = () => {
        setSelectedBookForReview(null);
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
        onError: (error: any) => {
            toast.error(`Помилка: ${error.message}`);
        },
    });

    const handleAddBook = async (values: AddBookRequest) => {
        await mutation.mutateAsync(values);
    };

    if (isLoading)
        return (
            <div style={{ padding: "20px" }}>Завантаження бібліотеки...</div>
        );

    if (isError)
        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                <p>Помилка завантаження даних.</p>
                <button
                    onClick={() => router.push("/login")}
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        backgroundColor: "#ff6b08",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Перейти до входу
                </button>
            </div>
        );

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

                        <div className={css.mobileFormWrapper}>
                            <button
                                onClick={() => setInstructionsModalOpen(true)}
                                className={css.addBookButton}
                            >
                                + Додати книгу
                            </button>
                        </div>
                    </div>

                    <div className={css.rightColumn}>
                        <MyBooks
                            data={data}
                            onDeleteBook={handleDeleteBook}
                            onOpenReviewModal={handleOpenReviewModal}
                        />
                    </div>
                </div>

                {isInstructionsModalOpen && (
                    <Modal
                        isOpen={isInstructionsModalOpen}
                        onClose={handleCloseInstructions}
                    >
                        {isLibraryEmpty ? (
                            <Instructions />
                        ) : (
                            <AddBookForm onSubmit={handleAddBook} />
                        )}
                    </Modal>
                )}

                {selectedBookForReview && (
                    <Modal
                        isOpen={!!selectedBookForReview}
                        onClose={handleCloseReviewModal}
                    >
                        <div style={{ padding: "20px" }}>
                            <h2>Додати відгук</h2>
                            <p>Книга: {selectedBookForReview.title}</p>
                            <p>Автор: {selectedBookForReview.author}</p>
                            {/* TODO: Добавить компонент BookReviewForm */}
                        </div>
                    </Modal>
                )}
            </main>
        </>
    );
};

export default LibraryPage;
