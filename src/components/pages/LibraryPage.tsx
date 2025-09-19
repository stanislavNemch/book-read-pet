import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Header from "../Header/Header";
import appCss from "../App/App.module.css";
import css from "./LibraryPage.module.css";
import { addBook, getUserBooks } from "../services/bookService";
import type { AddBookRequest } from "../types/book";
import AddBookForm from "../AddBookForm/AddBookForm";
import Instructions from "../Instructions/Instructions";
// import MyBooks from '../MyBooks/MyBooks'; // Раскомментируем, когда создадим

const LibraryPage = () => {
    const queryClient = useQueryClient();

    // 1. Загрузка данных с помощью React Query
    const { data, isLoading, isError } = useQuery({
        queryKey: ["userBooks"],
        queryFn: getUserBooks,
    });

    // 2. Мутация для добавления книги
    const mutation = useMutation({
        mutationFn: (newBook: AddBookRequest) => addBook(newBook),
        onSuccess: () => {
            toast.success("Книга успішно додана!");
            // При успехе - инвалидируем кеш, чтобы список книг обновился
            queryClient.invalidateQueries({ queryKey: ["userBooks"] });
        },
        onError: (error) => {
            toast.error(`Помилка: ${error.message}`);
        },
    });

    const handleAddBook = async (values: AddBookRequest) => {
        await mutation.mutateAsync(values);
    };

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Помилка завантаження даних</div>;

    return (
        <>
            <Header />
            <main className={appCss.container}>
                <div className={css.pageWrapper}>
                    <div className={css.leftColumn}>
                        <AddBookForm onSubmit={handleAddBook} />
                        <div className={css.mainContent}>
                            {data && (
                                // Здесь будет компонент MyBooks с передачей data
                                <p>
                                    Книги будут тут. У вас их пока{" "}
                                    {data.goingToRead.length +
                                        data.currentlyReading.length +
                                        data.finishedReading.length}
                                    .
                                </p>
                            )}
                        </div>
                    </div>
                    <div className={css.rightColumn}>
                        <div className={css.instructions}>
                            <Instructions />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default LibraryPage;
