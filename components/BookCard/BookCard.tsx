import { FiTrash2 } from "react-icons/fi";
import { FaStar } from "react-icons/fa"; // Импортируем иконку звезды
import css from "./BookCard.module.css";
import type { Book } from "../../types/book";

interface BookCardProps {
    book: Book;
    onDelete: (id: string) => void;
    isFinished: boolean;
    onOpenReviewModal: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({
    book,
    onDelete,
    isFinished,
    onOpenReviewModal,
}) => {
    // Функция для рендера звезд рейтинга
    const renderRating = () => {
        if (!book.rating) return null;
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    color={i <= book.rating ? "#FF6B08" : "#A6ABB9"}
                />
            );
        }
        return <div className={css.ratingWrapper}>{stars}</div>;
    };

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

                {/* Если книга прочитана, показываем рейтинг и кнопку */}
                {isFinished && (
                    <>
                        <div className={css.meta}>
                            <span className={css.label}>Рейтинг:</span>
                            {renderRating()}
                        </div>
                        <button
                            className={css.reviewButton}
                            onClick={() => onOpenReviewModal(book)}
                        >
                            Резюме
                        </button>
                    </>
                )}
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
