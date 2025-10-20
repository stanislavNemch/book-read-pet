import type { Book } from "../../types/book";
import { FaBook } from "react-icons/fa";
import css from "./ActiveTraining.module.css"; // Используем общие стили

interface TrainingBookListProps {
    books: Book[];
}

const TrainingBookList: React.FC<TrainingBookListProps> = ({ books }) => {
    // Функция для обработки изменения состояния чекбокса (пока без логики)
    const handleCheckboxChange = (bookId: string, isChecked: boolean) => {
        console.log(`Book ${bookId} is now ${isChecked ? "read" : "unread"}`);
        // TODO: В будущем здесь будет мутация для обновления статуса книги
    };

    return (
        <div className={css.bookListContainer}>
            <div className={css.bookHeader}>
                <div className={css.bookCell}>Назва книги</div>
                <div className={css.bookCell}>Автор</div>
                <div className={css.bookCell}>Рік</div>
                <div className={css.bookCell}>Стор.</div>
            </div>
            {books.map((book) => {
                const isFinished = book.pagesFinished >= book.pagesTotal;
                return (
                    <div key={book._id} className={css.bookRow}>
                        <div className={css.bookCell}>
                            <input
                                type="checkbox"
                                className={css.checkbox}
                                checked={isFinished}
                                onChange={(e) =>
                                    handleCheckboxChange(
                                        book._id,
                                        e.target.checked
                                    )
                                }
                                // Если книга прочитана, чекбокс неактивен, чтобы случайно не снять отметку
                                disabled={isFinished}
                            />
                            <FaBook className={css.bookIcon} />
                            <span
                                className={isFinished ? css.finishedTitle : ""}
                            >
                                {book.title}
                            </span>
                        </div>
                        <div className={isFinished ? css.finishedText : ""}>
                            {book.author}
                        </div>
                        <div className={isFinished ? css.finishedText : ""}>
                            {book.publishYear}
                        </div>
                        <div className={isFinished ? css.finishedText : ""}>
                            {book.pagesTotal}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TrainingBookList;
