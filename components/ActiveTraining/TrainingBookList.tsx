import type { Book } from "../../types/book";
import { FaBook } from "react-icons/fa";
import clsx from "clsx";
import css from "./ActiveTraining.module.css";

interface TrainingBookListProps {
    books: Book[];
}

const TrainingBookList: React.FC<TrainingBookListProps> = ({ books }) => {
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
                            {/* ИСПРАВЛЕНО: Чекбокс теперь просто индикатор.
                                Он неактивен (disabled) и его состояние (checked)
                                полностью зависит от данных с сервера.
                            */}
                            <input
                                type="checkbox"
                                className={css.checkbox}
                                checked={isFinished}
                                readOnly // Говорим React, что мы не будем менять его вручную
                                disabled
                            />
                            <FaBook className={css.bookIcon} />
                            <span
                                className={clsx(
                                    isFinished && css.finishedTitle
                                )}
                            >
                                {book.title}
                            </span>
                        </div>
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
