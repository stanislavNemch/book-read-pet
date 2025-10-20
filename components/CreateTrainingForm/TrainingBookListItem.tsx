import { FiTrash2 } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import type { Book } from "../../types/book";
import css from "./CreateTrainingForm.module.css"; // Мы будем использовать тот же файл стилей

interface TrainingBookListItemProps {
    book: Book;
    onRemove: (bookId: string) => void;
}

const TrainingBookListItem: React.FC<TrainingBookListItemProps> = ({
    book,
    onRemove,
}) => {
    return (
        <div className={css.bookRow}>
            <div className={`${css.bookCell} ${css.titleCell}`}>
                <FaBook className={css.bookIcon} />
                <span>{book.title}</span>
            </div>
            <div className={css.bookCell}>{book.author}</div>
            <div className={css.bookCell}>{book.publishYear}</div>
            <div className={css.bookCell}>{book.pagesTotal}</div>
            <div className={css.bookCell}>
                <button
                    type="button"
                    onClick={() => onRemove(book._id)}
                    className={css.deleteButton}
                    aria-label="Remove book from training"
                >
                    <FiTrash2 />
                </button>
            </div>
        </div>
    );
};

export default TrainingBookListItem;
