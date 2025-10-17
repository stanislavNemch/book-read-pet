import type { GetUserBooksResponse } from "../../types/book";
import BookCard from "../BookCard/BookCard";
import css from "./MyBooks.module.css";

interface MyBooksProps {
    data: GetUserBooksResponse;
    onDeleteBook: (id: string) => void;
}

const MyBooks: React.FC<MyBooksProps> = ({ data, onDeleteBook }) => {
    return (
        <div className={css.container}>
            {/* Секция "Читаю" */}
            {data.currentlyReading.length > 0 && (
                <section className={css.section}>
                    <h3 className={css.sectionTitle}>Читаю</h3>
                    <ul className={css.bookList}>
                        {data.currentlyReading.map((book) => (
                            <BookCard
                                key={book._id}
                                book={book}
                                onDelete={onDeleteBook}
                            />
                        ))}
                    </ul>
                </section>
            )}

            {/* Секция "Маю намір прочитати" */}
            {data.goingToRead.length > 0 && (
                <section className={css.section}>
                    <h3 className={css.sectionTitle}>Маю намір прочитати</h3>
                    <ul className={css.bookList}>
                        {data.goingToRead.map((book) => (
                            <BookCard
                                key={book._id}
                                book={book}
                                onDelete={onDeleteBook}
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
                            />
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
};

export default MyBooks;
