import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type { Book } from "../../types/book";
import type { AddPlanningRequest } from "../../types/training";
import { startPlanning } from "../../services/trainingService";
import css from "./CreateTrainingForm.module.css";

interface CreateTrainingFormProps {
    books: Book[]; // Книги из списка "Маю намір прочитати"
}

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
        .min(1, "Виберіть хоча б одну книгу")
        .required("Обов'язково виберіть книги"),
});

const CreateTrainingForm: React.FC<CreateTrainingFormProps> = ({ books }) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (newPlanning: AddPlanningRequest) =>
            startPlanning(newPlanning),
        onSuccess: () => {
            toast.success("Тренування успішно створено!");
            // Обновляем данные о тренировке, чтобы страница переключилась в активный режим
            queryClient.invalidateQueries({ queryKey: ["activeTraining"] });
        },
        onError: (error) => {
            toast.error(`Помилка: ${error.message}`);
        },
    });

    const handleSubmit = async (values: {
        startDate: string;
        endDate: string;
        books: string[];
    }) => {
        const planningData: AddPlanningRequest = {
            startDate: values.startDate,
            endDate: values.endDate,
            books: values.books,
        };
        await mutation.mutateAsync(planningData);
    };

    return (
        <div className={css.container}>
            <h2 className={css.title}>Моє тренування</h2>
            <Formik
                initialValues={{ startDate: "", endDate: "", books: [] }}
                validationSchema={TrainingSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, values }) => (
                    <Form className={css.form}>
                        <div className={css.datePickers}>
                            <Field
                                type="date"
                                name="startDate"
                                className={css.dateInput}
                            />
                            <Field
                                type="date"
                                name="endDate"
                                min={values.startDate}
                                className={css.dateInput}
                            />
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
                            <Field
                                as="select"
                                name="books"
                                multiple
                                className={css.select}
                            >
                                <option value="" disabled>
                                    Виберіть книги...
                                </option>
                                {books.map((book) => (
                                    <option key={book._id} value={book._id}>
                                        {book.title}
                                    </option>
                                ))}
                            </Field>
                            <button type="button" className={css.addButton}>
                                Додати
                            </button>
                        </div>
                        <ErrorMessage
                            name="books"
                            component="div"
                            className={css.error}
                        />

                        <button
                            type="submit"
                            disabled={isSubmitting || books.length === 0}
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
