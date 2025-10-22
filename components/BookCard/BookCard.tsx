import { FiTrash2 } from "react-icons/fi";
import { FaBook, FaStar } from "react-icons/fa";
import clsx from "clsx";
import css from "./BookCard.module.css";
import type { Book } from "../../types/book";

interface BookCardProps {
    book: Book;
    status: "reading" | "going" | "finished";
    onDelete: (id: string) => void;
    onOpenReviewModal: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({
    book,
    status,
    onDelete,
    onOpenReviewModal,
}) => {
    const renderRating = () => {
        if (!book.rating) return <div className={css.ratingPlaceholder}></div>;
        const stars = Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} color={i < book.rating! ? "#FF6B08" : "#A6ABB9"} />
        ));
        return <div className={css.ratingWrapper}>{stars}</div>;
    };

    return (
        <div className={clsx(css.bookRow, css[status])}>
            {/* --- Основні дані книги (завжди присутні) --- */}
            <div className={css.cellTitle}>
                <FaBook
                    className={clsx(
                        css.bookIcon,
                        status === "reading" && css.orangeIcon
                    )}
                />
                <span className={status === "finished" ? css.finishedText : ""}>
                    {book.title}
                </span>
            </div>
            <div
                className={clsx(
                    css.cellAuthor,
                    status === "finished" && css.finishedText
                )}
            >
                {book.author}
            </div>
            <div
                className={clsx(
                    css.cellYear,
                    status === "finished" && css.finishedText
                )}
            >
                {book.publishYear}
            </div>
            <div
                className={clsx(
                    css.cellPages,
                    status === "finished" && css.finishedText
                )}
            >
                {book.pagesTotal}
            </div>

            {/* --- Додаткові комірки залежно від статусу --- */}
            {status === "finished" && (
                <>
                    <div className={css.cellRating}>{renderRating()}</div>
                    <div className={css.cellReview}>
                        <button
                            className={css.reviewButton}
                            onClick={() => onOpenReviewModal(book)}
                        >
                            Резюме
                        </button>
                    </div>
                </>
            )}

            {status === "going" && (
                <div className={css.cellDelete}>
                    <button
                        className={css.deleteButton}
                        onClick={() => onDelete(book._id)}
                        aria-label="Delete book"
                    >
                        <FiTrash2 size={18} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default BookCard;
