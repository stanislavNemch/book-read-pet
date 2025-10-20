import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FaCalendarAlt } from "react-icons/fa"; // Иконка для календаря
import type { Book } from "../../types/book";
import type { AddPlanningRequest } from "../../types/training";
import { startPlanning } from "../../services/trainingService";
import TrainingBookListItem from "./TrainingBookListItem";
import css from "./CreateTrainingForm.module.css";

interface CreateTrainingFormProps {
    books: Book[]; // Книги из списка "Маю намір прочитати"
}

// Получаем сегодняшнюю дату в формате YYYY-MM-DD для атрибута min
const getTodayString = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
};

const TrainingSchema = Yup.object().shape({
    startDate: Yup.date().required("Обов'язкове поле"),
    endDate: Yup.date()
        .required("Обов'язкове поле")
        .min(
            Yup.ref("startDate"),
            "Дата завершення не може бути раніше дати початку"
        ),
    books: Yup.array()
        .of(Yup.string())
        .min(1, "Додайте хоча б одну книгу до тренування")
        .required("Обов'язково виберіть книги"),
});

const CreateTrainingForm: React.FC<CreateTrainingFormProps> = ({
    books: availableBooks,
}) => {
    const queryClient = useQueryClient();

    const [trainingBooks, setTrainingBooks] = useState<Book[]>([]);
    const [selectedBookId, setSelectedBookId] = useState<string>("");

    const mutation = useMutation({
        mutationFn: (newPlanning: AddPlanningRequest) =>
            startPlanning(newPlanning),
        onSuccess: () => {
            toast.success("Тренування успішно створено!");
            queryClient.invalidateQueries({ queryKey: ["activeTraining"] });
        },
        onError: (error) => {
            toast.error(`Помилка: ${error.message}`);
        },
    });

    // Хелпер-компонент для синхронизации локального состояния с Formik
    const SyncBooksWithFormik = () => {
        const { setFieldValue } = useFormikContext();
        useEffect(() => {
            const bookIds = trainingBooks.map((b) => b._id);
            setFieldValue("books", bookIds);
        }, [trainingBooks, setFieldValue]);
        return null;
    };

    const handleAddBook = () => {
        if (!selectedBookId) return;

        const bookToAdd = availableBooks.find((b) => b._id === selectedBookId);
        const isAlreadyAdded = trainingBooks.some(
            (b) => b._id === selectedBookId
        );

        if (bookToAdd && !isAlreadyAdded) {
            setTrainingBooks((prev) => [...prev, bookToAdd]);
        }
        setSelectedBookId("");
    };

    const handleRemoveBook = (bookId: string) => {
        setTrainingBooks((prev) => prev.filter((b) => b._id !== bookId));
    };

    const filteredAvailableBooks = availableBooks.filter(
        (ab) => !trainingBooks.some((tb) => tb._id === ab._id)
    );

    return (
        <div className={css.container}>
            <h2 className={css.title}>Моє тренування</h2>
            <Formik
                initialValues={{ startDate: "", endDate: "", books: [] }}
                validationSchema={TrainingSchema}
                onSubmit={async (values) => {
                    await mutation.mutateAsync(values as AddPlanningRequest);
                }}
            >
                {({ isSubmitting, values }) => (
                    <Form className={css.form}>
                        <SyncBooksWithFormik />
                        <div className={css.datePickers}>
                            <div className={css.dateInputWrapper}>
                                <Field
                                    type="date"
                                    name="startDate"
                                    min={getTodayString()}
                                    className={css.dateInput}
                                />
                                <span className={css.datePlaceholder}>
                                    Початок
                                </span>
                                <FaCalendarAlt className={css.dateIcon} />
                            </div>
                            <div className={css.dateInputWrapper}>
                                <Field
                                    type="date"
                                    name="endDate"
                                    min={values.startDate || getTodayString()}
                                    className={css.dateInput}
                                />
                                <span className={css.datePlaceholder}>
                                    Завершення
                                </span>
                                <FaCalendarAlt className={css.dateIcon} />
                            </div>
                        </div>
                        <ErrorMessage
                            name="startDate"
                            component="div"
                            className={css.error}
                        />
                        <ErrorMessage
                            name="endDate"
                            component="div"
                            className={css.error}
                        />

                        <div className={css.bookSelector}>
                            <div className={css.selectWrapper}>
                                <select
                                    value={selectedBookId}
                                    onChange={(e) =>
                                        setSelectedBookId(e.target.value)
                                    }
                                    className={css.select}
                                >
                                    <option value="" disabled>
                                        Обрати книги з бібліотеки
                                    </option>
                                    {filteredAvailableBooks.map((book) => (
                                        <option key={book._id} value={book._id}>
                                            {book.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="button"
                                onClick={handleAddBook}
                                className={css.addButton}
                            >
                                Додати
                            </button>
                        </div>
                        <ErrorMessage
                            name="books"
                            component="div"
                            className={css.error}
                        />

                        {trainingBooks.length > 0 && (
                            <div className={css.bookList}>
                                <div className={css.bookHeader}>
                                    <div className={css.bookCell}>
                                        Назва книги
                                    </div>
                                    <div className={css.bookCell}>Автор</div>
                                    <div className={css.bookCell}>Рік</div>
                                    <div className={css.bookCell}>Стор.</div>
                                    <div className={css.bookCell}></div>
                                </div>
                                {trainingBooks.map((book) => (
                                    <TrainingBookListItem
                                        key={book._id}
                                        book={book}
                                        onRemove={handleRemoveBook}
                                    />
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
                )}
            </Formik>
        </div>
    );
};

export default CreateTrainingForm;
