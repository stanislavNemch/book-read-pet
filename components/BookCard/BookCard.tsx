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
    const isFinished = status === "finished";

    const renderRating = () => {
        if (!book.rating) return <span>-</span>;
        const stars = Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} color={i < book.rating! ? "#FF6B08" : "#A6ABB9"} />
        ));
        return <div className={css.ratingWrapper}>{stars}</div>;
    };

    return (
        <div className={css.bookRow}>
            <div className={css.bookCell}>
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
            <div className={clsx(css.bookCell, isFinished && css.finishedText)}>
                {book.author}
            </div>
            <div className={clsx(css.bookCell, isFinished && css.finishedText)}>
                {book.publishYear}
            </div>
            <div className={clsx(css.bookCell, isFinished && css.finishedText)}>
                {book.pagesTotal}
            </div>

            {isFinished && (
                <>
                    <div className={css.bookCell}>{renderRating()}</div>
                    <div className={css.bookCell}>
                        <button
                            className={css.reviewButton}
                            onClick={() => onOpenReviewModal(book)}
                        >
                            Резюме
                        </button>
                    </div>
                </>
            )}

            <div
                className={clsx(
                    css.bookCell,
                    css.deleteCell,
                    isFinished && css.hiddenOnMobile
                )}
            >
                <button
                    className={css.deleteButton}
                    onClick={() => onDelete(book._id)}
                    aria-label="Delete book"
                    disabled={status === "reading"}
                    title={
                        status === "reading"
                            ? "Неможливо видалити книгу, яка бере участь у тренуванні"
                            : "Видалити книгу"
                    }
                >
                    <FiTrash2 size={18} />
                </button>
            </div>
        </div>
    );
};

export default BookCard;
