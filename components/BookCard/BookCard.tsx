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

    const isFinished = status === "finished";

    return (
        <div
            className={clsx(
                css.bookRow,
                isFinished ? css.bookRowFinished : css.bookRowDefault
            )}
        >
            {/* --- Основні дані книги --- */}
            <div className={css.cellTitle}>
                <FaBook
                    className={clsx(
                        css.bookIcon,
                        status === "reading" && css.orangeIcon
                    )}
                />
                <span className={isFinished ? css.finishedText : ""}>
                    {book.title}
                </span>
            </div>
            <div
                className={clsx(
                    css.cellAuthor,
                    isFinished ? css.finishedText : ""
                )}
            >
                {book.author}
            </div>
            <div
                className={clsx(
                    css.cellYear,
                    isFinished ? css.finishedText : ""
                )}
            >
                {book.publishYear}
            </div>
            <div
                className={clsx(
                    css.cellPages,
                    isFinished ? css.finishedText : ""
                )}
            >
                {book.pagesTotal}
            </div>

            {/* --- Блок для прочитаних книг --- */}
            {isFinished ? (
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
            ) : (
                // Порожня комірка для іконки видалення в "Читаю" та "Маю намір..."
                <div className={css.cellDelete}>
                    {status === "going" && (
                        <button
                            className={css.deleteButton}
                            onClick={() => onDelete(book._id)}
                            aria-label="Delete book"
                        >
                            <FiTrash2 size={18} />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default BookCard;
