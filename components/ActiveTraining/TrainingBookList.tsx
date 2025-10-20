import type { Book } from "../../types/book";
import { FaBook } from "react-icons/fa";
import clsx from "clsx"; // Импортируем утилиту clsx для удобного объединения классов
import css from "./ActiveTraining.module.css";

interface TrainingBookListProps {
    books: Book[];
}

const TrainingBookList: React.FC<TrainingBookListProps> = ({ books }) => {
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
                        {/* 1. Исправлено здесь: класс bookCell применяется всегда */}
                        <div className={css.bookCell}>
                            <input
                                type="checkbox"
                                className={css.checkbox}
                                defaultChecked={isFinished}
                                onChange={(e) =>
                                    handleCheckboxChange(
                                        book._id,
                                        e.target.checked
                                    )
                                }
                                // Если книга уже отмечена как прочитанная, чекбокс неактивен
                                disabled={isFinished}
                            />
                            <FaBook className={css.bookIcon} />
                            {/* 2. Условный класс применяется к span, а не ко всей ячейке */}
                            <span
                                className={clsx(
                                    isFinished && css.finishedTitle
                                )}
                            >
                                {book.title}
                            </span>
                        </div>
                        {/* 3. И здесь: clsx объединяет классы, а не заменяет их */}
                        <div
                            className={clsx(
                                css.bookCell,
                                isFinished && css.finishedText
                            )}
                        >
                            {book.author}
                        </div>
                        <div
                            className={clsx(
                                css.bookCell,
                                isFinished && css.finishedText
                            )}
                        >
                            {book.publishYear}
                        </div>
                        <div
                            className={clsx(
                                css.bookCell,
                                isFinished && css.finishedText
                            )}
                        >
                            {book.pagesTotal}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TrainingBookList;
