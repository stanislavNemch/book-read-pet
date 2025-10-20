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
import { deleteBook } from "../../services/bookService";
import css from "./CreateTrainingForm.module.css";

interface CreateTrainingFormProps {
    books: Book[];
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

    const [trainingBooks, setTrainingBooks] = useState<Book[]>([]);
    const [isBookSelectorOpen, setIsBookSelectorOpen] = useState(false);
    const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

    const startPlanningMutation = useMutation({
        mutationFn: (newPlanning: AddPlanningRequest) =>
            startPlanning(newPlanning),
        onSuccess: () => {
            toast.success("Тренування успішно створено!");
            queryClient.invalidateQueries({ queryKey: ["activeTraining"] });
            queryClient.invalidateQueries({ queryKey: ["userBooks"] });
        },
        onError: (error: any) => {
            toast.error(
                error.response?.data?.message || `Помилка: ${error.message}`
            );
        },
    });

    const deleteBookMutation = useMutation({
        mutationFn: (bookId: string) => deleteBook(bookId),
        onSuccess: (deletedBook) => {
            toast.success(`Книга "${deletedBook.title}" видалена з бібліотеки`);
            queryClient.invalidateQueries({ queryKey: ["userBooks"] });
        },
        onError: (error: any) => {
            toast.error(
                error.response?.data?.message ||
                    `Помилка видалення: ${error.message}`
            );
        },
    });

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
            setSelectedBookId(null);
        }
    };

    const handleRemoveBookFromTraining = (bookId: string) => {
        setTrainingBooks((prev) => prev.filter((b) => b._id !== bookId));
    };

    const handleDeleteBookGlobally = (e: React.MouseEvent, bookId: string) => {
        e.stopPropagation();
        deleteBookMutation.mutate(bookId);
    };

    const toggleBookSelector = () => {
        if (isBookSelectorOpen) {
            setSelectedBookId(null);
        }
        setIsBookSelectorOpen((prev) => !prev);
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
                                    onClick={toggleBookSelector}
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

                            {/* ИСПРАВЛЕНО: Теперь этот блок не показывается, если книг нет */}
                            {trainingBooks.length > 0 && (
                                <div
                                    className={clsx(
                                        css.bookList,
                                        css.trainingList
                                    )}
                                >
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
                                            <div className={css.bookCell}>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleRemoveBookFromTraining(
                                                            book._id
                                                        )
                                                    }
                                                    className={css.deleteButton}
                                                >
                                                    <FiTrash2 />
                                                </button>
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
