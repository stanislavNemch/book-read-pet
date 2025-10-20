import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FaCalendarAlt, FaBook } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import clsx from "clsx";

import type { Book } from "../../types/book";
import type { AddPlanningRequest } from "../../types/training";
import { startPlanning } from "../../services/trainingService";
import { deleteBook } from "../../services/bookService"; // Импортируем функцию глобального удаления
import css from "./CreateTrainingForm.module.css";

interface CreateTrainingFormProps {
    books: Book[]; // Все книги из "Маю намір прочитати"
}

const getTodayString = () => new Date().toISOString().split("T")[0];

const TrainingSchema = Yup.object().shape({
    startDate: Yup.date().required("Обов'язкове поле"),
    endDate: Yup.date()
        .required("Обов'язкове поле")
        .min(
            Yup.ref("startDate"),
            "Дата завершення не може бути раніше дати початку"
        ),
    books: Yup.array().min(1, "Додайте хоча б одну книгу до тренування"),
});

const CreateTrainingForm: React.FC<CreateTrainingFormProps> = ({
    books: allAvailableBooks,
}) => {
    const queryClient = useQueryClient();

    // Состояния компонента
    const [trainingBooks, setTrainingBooks] = useState<Book[]>([]); // Книги в текущей тренировке
    const [isBookSelectorOpen, setIsBookSelectorOpen] = useState(false); // Видимость выпадающей таблицы
    const [selectedBookId, setSelectedBookId] = useState<string | null>(null); // ID книги, выбранной в таблице для добавления

    // Мутация для старта тренировки
    const startPlanningMutation = useMutation({
        mutationFn: (newPlanning: AddPlanningRequest) =>
            startPlanning(newPlanning),
        onSuccess: () => {
            toast.success("Тренування успішно створено!");
            queryClient.invalidateQueries({ queryKey: ["activeTraining"] });
        },
        onError: (error: any) => {
            toast.error(
                error.response?.data?.message || `Помилка: ${error.message}`
            );
        },
    });

    // Мутация для ГЛОБАЛЬНОГО удаления книги из библиотеки
    const deleteBookMutation = useMutation({
        mutationFn: (bookId: string) => deleteBook(bookId),
        onSuccess: (deletedBook) => {
            toast.success(`Книга "${deletedBook.title}" видалена з бібліотеки`);
            // Обновляем общий список книг, что автоматически обновит и наш компонент
            queryClient.invalidateQueries({ queryKey: ["userBooks"] });
        },
        onError: (error: any) => {
            toast.error(
                error.response?.data?.message ||
                    `Помилка видалення: ${error.message}`
            );
        },
    });

    // Книги, доступные для выбора (еще не в списке тренировки)
    const availableBooksForSelection = allAvailableBooks.filter(
        (ab) => !trainingBooks.some((tb) => tb._id === ab._id)
    );

    const handleAddBook = () => {
        if (!selectedBookId) return;
        const bookToAdd = availableBooksForSelection.find(
            (b) => b._id === selectedBookId
        );
        if (bookToAdd) {
            setTrainingBooks((prev) => [...prev, bookToAdd]);
            setSelectedBookId(null); // Сбрасываем выбор
        }
    };

    const handleRemoveBookFromTraining = (bookId: string) => {
        setTrainingBooks((prev) => prev.filter((b) => b._id !== bookId));
    };

    const handleDeleteBookGlobally = (e: React.MouseEvent, bookId: string) => {
        e.stopPropagation(); // Предотвращаем выбор строки при клике на иконку удаления
        deleteBookMutation.mutate(bookId);
    };

    const toggleBookSelector = () => {
        // Если мы собираемся закрыть список (т.е. он сейчас открыт)
        if (isBookSelectorOpen) {
            setSelectedBookId(null); // Сбрасываем выбранную книгу
        }
        setIsBookSelectorOpen((prev) => !prev); // Переключаем видимость
    };

    return (
        <div className={css.container}>
            <h2 className={css.title}>Моє тренування</h2>
            <Formik
                initialValues={{
                    startDate: "",
                    endDate: "",
                    books: [] as string[],
                }}
                validationSchema={TrainingSchema}
                onSubmit={async (values) => {
                    await startPlanningMutation.mutateAsync(
                        values as AddPlanningRequest
                    );
                }}
            >
                {({ isSubmitting, values, setFieldValue }) => {
                    useEffect(() => {
                        const bookIds = trainingBooks.map((b) => b._id);
                        setFieldValue("books", bookIds);
                    }, [trainingBooks, setFieldValue]);

                    return (
                        <Form className={css.form}>
                            <div className={css.datePickers}>
                                {/* Поля для выбора дат */}
                                <div className={css.dateInputWrapper}>
                                    <Field
                                        name="startDate"
                                        type="text"
                                        onFocus={(
                                            e: React.FocusEvent<HTMLInputElement>
                                        ) => (e.target.type = "date")}
                                        onBlur={(
                                            e: React.FocusEvent<HTMLInputElement>
                                        ) => {
                                            if (!e.target.value)
                                                e.target.type = "text";
                                        }}
                                        placeholder="Початок"
                                        min={getTodayString()}
                                        className={css.dateInput}
                                    />
                                    <FaCalendarAlt className={css.dateIcon} />
                                </div>
                                <div className={css.dateInputWrapper}>
                                    <Field
                                        name="endDate"
                                        type="text"
                                        onFocus={(
                                            e: React.FocusEvent<HTMLInputElement>
                                        ) => (e.target.type = "date")}
                                        onBlur={(
                                            e: React.FocusEvent<HTMLInputElement>
                                        ) => {
                                            if (!e.target.value)
                                                e.target.type = "text";
                                        }}
                                        placeholder="Завершення"
                                        min={
                                            values.startDate || getTodayString()
                                        }
                                        className={css.dateInput}
                                        disabled={!values.startDate}
                                    />
                                    <FaCalendarAlt className={css.dateIcon} />
                                </div>
                            </div>
                            <ErrorMessage
                                name="endDate"
                                component="div"
                                className={css.error}
                            />

                            <div className={css.bookSelector}>
                                <div
                                    className={css.bookSelectorTrigger}
                                    onClick={toggleBookSelector} // Используем новую функцию
                                >
                                    <span>Обрати книги з бібліотеки</span>
                                    <span
                                        className={clsx(
                                            css.arrow,
                                            isBookSelectorOpen && css.arrowUp
                                        )}
                                    >
                                        ▼
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleAddBook}
                                    className={css.addButton}
                                    disabled={!selectedBookId}
                                >
                                    Додати
                                </button>
                            </div>

                            {isBookSelectorOpen && (
                                <div className={css.bookList}>
                                    <div className={css.bookHeader}>
                                        <div className={css.bookCell}>
                                            Назва книги
                                        </div>
                                        <div className={css.bookCell}>
                                            Автор
                                        </div>
                                        <div className={css.bookCell}>Рік</div>
                                        <div className={css.bookCell}>
                                            Стор.
                                        </div>
                                        <div className={css.bookCell}></div>
                                    </div>
                                    {availableBooksForSelection.length > 0 ? (
                                        availableBooksForSelection.map(
                                            (book) => (
                                                <div
                                                    key={book._id}
                                                    className={clsx(
                                                        css.bookRow,
                                                        selectedBookId ===
                                                            book._id &&
                                                            css.selectedRow
                                                    )}
                                                    onClick={() =>
                                                        setSelectedBookId(
                                                            book._id
                                                        )
                                                    }
                                                    tabIndex={0}
                                                    onKeyPress={(e) =>
                                                        e.key === "Enter" &&
                                                        setSelectedBookId(
                                                            book._id
                                                        )
                                                    }
                                                >
                                                    <div
                                                        className={css.bookCell}
                                                    >
                                                        <FaBook
                                                            className={
                                                                css.bookIcon
                                                            }
                                                        />{" "}
                                                        {book.title}
                                                    </div>
                                                    <div
                                                        className={css.bookCell}
                                                    >
                                                        {book.author}
                                                    </div>
                                                    <div
                                                        className={css.bookCell}
                                                    >
                                                        {book.publishYear}
                                                    </div>
                                                    <div
                                                        className={css.bookCell}
                                                    >
                                                        {book.pagesTotal}
                                                    </div>
                                                    <div
                                                        className={css.bookCell}
                                                    >
                                                        <button
                                                            type="button"
                                                            onClick={(e) =>
                                                                handleDeleteBookGlobally(
                                                                    e,
                                                                    book._id
                                                                )
                                                            }
                                                            className={
                                                                css.deleteButton
                                                            }
                                                        >
                                                            <FiTrash2 />
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        )
                                    ) : (
                                        <p className={css.noBooks}>
                                            Всі книги з вашого списку вже додано
                                            до тренування
                                        </p>
                                    )}
                                </div>
                            )}
                            <ErrorMessage
                                name="books"
                                component="div"
                                className={css.error}
                            />

                            {/* Список уже добавленных книг */}
                            {trainingBooks.length > 0 && (
                                <div
                                    className={clsx(
                                        css.bookList,
                                        css.trainingList
                                    )}
                                >
                                    {trainingBooks.map((book) => (
                                        <div
                                            key={book._id}
                                            className={css.bookRow}
                                        >
                                            <div className={css.bookCell}>
                                                <FaBook
                                                    className={css.bookIcon}
                                                />{" "}
                                                {book.title}
                                            </div>
                                            <div className={css.bookCell}>
                                                {book.author}
                                            </div>
                                            <div className={css.bookCell}>
                                                {book.publishYear}
                                            </div>
                                            <div className={css.bookCell}>
                                                {book.pagesTotal}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={
                                    isSubmitting || trainingBooks.length === 0
                                }
                                className={css.submitButton}
                            >
                                Почати тренування
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default CreateTrainingForm;
