import type { GetUserBooksResponse, Book } from "../../types/book"; // Добавляем Book
import BookCard from "../BookCard/BookCard";
import css from "./MyBooks.module.css";

interface MyBooksProps {
    data: GetUserBooksResponse;
    onDeleteBook: (id: string) => void;
    onOpenReviewModal: (book: Book) => void; // Добавляем пропс
}

const MyBooks: React.FC<MyBooksProps> = ({
    data,
    onDeleteBook,
    onOpenReviewModal,
}) => {
    return (
        <div className={css.container}>
            {/* ... секции "Читаю" и "Маю намір прочитати" ... */}
            {data.currentlyReading.length > 0 && (
                <section className={css.section}>
                    <h3 className={css.sectionTitle}>Читаю</h3>
                    <ul className={css.bookList}>
                        {data.currentlyReading.map((book) => (
                            <BookCard
                                key={book._id}
                                book={book}
                                onDelete={onDeleteBook}
                                isFinished={false} // Не прочитана
                                onOpenReviewModal={onOpenReviewModal}
                            />
                        ))}
                    </ul>
                </section>
            )}

            {data.goingToRead.length > 0 && (
                <section className={css.section}>
                    <h3 className={css.sectionTitle}>Маю намір прочитати</h3>
                    <ul className={css.bookList}>
                        {data.goingToRead.map((book) => (
                            <BookCard
                                key={book._id}
                                book={book}
                                onDelete={onDeleteBook}
                                isFinished={false} // Не прочитана
                                onOpenReviewModal={onOpenReviewModal}
                            />
                        ))}
                    </ul>
                </section>
            )}

            {/* Секция "Прочитано" */}
            {data.finishedReading.length > 0 && (
                <section className={css.section}>
                    <h3 className={css.sectionTitle}>Прочитано</h3>
                    <ul className={css.bookList}>
                        {data.finishedReading.map((book) => (
                            <BookCard
                                key={book._id}
                                book={book}
                                onDelete={onDeleteBook}
                                isFinished={true} // Прочитана!
                                onOpenReviewModal={onOpenReviewModal}
                            />
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
};

export default MyBooks;
