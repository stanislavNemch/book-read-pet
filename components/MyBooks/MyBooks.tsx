import type { GetUserBooksResponse, Book } from "../../types/book";
import clsx from "clsx";
import BookCard from "../BookCard/BookCard";
import css from "./MyBooks.module.css";

interface MyBooksProps {
    data: GetUserBooksResponse;
    onDeleteBook: (id: string) => void;
    onOpenReviewModal: (book: Book) => void;
}

const MyBooks: React.FC<MyBooksProps> = ({
    data,
    onDeleteBook,
    onOpenReviewModal,
}) => {
    const renderSection = (
        title: string,
        books: Book[],
        status: "reading" | "going" | "finished"
    ) => {
        if (books.length === 0) return null;

        const isFinishedSection = status === "finished";

        return (
            <section className={css.section}>
                <h3 className={css.sectionTitle}>{title}</h3>
                <div className={css.bookList}>
                    {/* Застосовуємо різний клас для заголовка залежно від секції */}
                    <div
                        className={clsx(
                            css.bookHeader,
                            isFinishedSection
                                ? css.bookHeaderFinished
                                : css.bookHeaderDefault
                        )}
                    >
                        <div className={css.headerCell}>Назва книги</div>
                        <div className={css.headerCell}>Автор</div>
                        <div className={css.headerCell}>Рік</div>
                        <div className={css.headerCell}>Стор.</div>
                        {isFinishedSection && (
                            <>
                                <div className={css.headerCell}>Рейтинг</div>
                                <div className={css.headerCell}></div>{" "}
                                {/* Пустий для кнопки Резюме */}
                            </>
                        )}
                    </div>
                    {books.map((book) => (
                        <BookCard
                            key={book._id}
                            book={book}
                            status={status}
                            onDelete={onDeleteBook}
                            onOpenReviewModal={onOpenReviewModal}
                        />
                    ))}
                </div>
            </section>
        );
    };

    return (
        <div className={css.container}>
            {renderSection("Прочитано", data.finishedReading, "finished")}
            {renderSection("Читаю", data.currentlyReading, "reading")}
            {renderSection("Маю намір прочитати", data.goingToRead, "going")}
        </div>
    );
};

export default MyBooks;
