import { FiTrash2 } from "react-icons/fi";
import css from "./BookCard.module.css";
import type { Book } from "../types/book";

interface BookCardProps {
    book: Book;
    onDelete: (id: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onDelete }) => {
    return (
        <li className={css.card}>
            <div className={css.info}>
                <h4 className={css.title}>{book.title}</h4>
                <p className={css.meta}>
                    <span className={css.label}>Автор:</span> {book.author}
                </p>
                <p className={css.meta}>
                    <span className={css.label}>Рік:</span> {book.publishYear}
                </p>
                <p className={css.meta}>
                    <span className={css.label}>Стор.:</span> {book.pagesTotal}
                </p>
            </div>
            <button
                className={css.deleteButton}
                onClick={() => onDelete(book._id)}
                aria-label="Delete book"
            >
                <FiTrash2 size={16} />
            </button>
        </li>
    );
};

export default BookCard;
