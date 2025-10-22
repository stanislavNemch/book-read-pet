import type { GetUserBooksResponse, Book } from "../../types/book";
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

        return (
            <section className={css.section}>
                <h3 className={css.sectionTitle}>{title}</h3>
                <div className={css.bookList}>
                    <div className={css.bookHeader}>
                        <div className={css.headerCell}>Назва книги</div>
                        <div className={css.headerCell}>Автор</div>
                        <div className={css.headerCell}>Рік</div>
                        <div className={css.headerCell}>Стор.</div>
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
