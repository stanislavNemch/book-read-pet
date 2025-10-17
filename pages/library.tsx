import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Header from "../src/components/Header/Header";
import appCss from "../src/components/App/App.module.css";
import css from "./styles/LibraryPage.module.css";
import {
    addBook,
    getUserBooks,
    deleteBook,
} from "../src/components/services/bookService";
import type { AddBookRequest } from "../src/components/types/book";
import AddBookForm from "../src/components/AddBookForm/AddBookForm";
import Instructions from "../src/components/Instructions/Instructions";
import Modal from "../src/components/Modal/Modal";
import MyBooks from "../src/components/MyBooks/MyBooks";

const LibraryPage = () => {
    const queryClient = useQueryClient();
    const [isInstructionsModalOpen, setInstructionsModalOpen] = useState(false);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["userBooks"],
        queryFn: getUserBooks,
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

    if (isLoading)
        return (
            <div style={{ padding: "20px" }}>Завантаження бібліотеки...</div>
        );
    if (isError)
        return (
            <div style={{ padding: "20px" }}>
                Помилка завантаження даних. Спробуйте оновити сторінку.
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
        </>
    );
};

export default LibraryPage;
