import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./AddBookForm.module.css";
import type { AddBookRequest } from "../types/book";

const AddBookSchema = Yup.object().shape({
    title: Yup.string()
        .min(1, "Назва не може бути порожньою")
        .max(254, "Занадто довга назва")
        .required("Обов'язкове поле"),
    author: Yup.string()
        .min(2, "Ім'я автора має містити хоча б 2 символи")
        .max(254, "Занадто довге ім'я")
        .required("Обов'язкове поле"),
    publishYear: Yup.number()
        .typeError("Введіть рік числом")
        .integer("Рік має бути цілим числом")
        .min(1000, "Введіть коректний рік")
        .max(new Date().getFullYear(), "Рік не може бути в майбутньому")
        .required("Обов'язкове поле"),
    pagesTotal: Yup.number()
        .typeError("Введіть кількість сторінок")
        .integer("Кількість сторінок має бути цілою")
        .min(1, "Мінімум 1 сторінка")
        .max(5000, "Максимум 5000 сторінок")
        .required("Обов'язкове поле"),
});

interface AddBookFormProps {
    onSubmit: (values: AddBookRequest) => Promise<void>;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{
                title: "",
                author: "",
                publishYear: "",
                pagesTotal: "",
            }}
            validationSchema={AddBookSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                // Создаем новый объект с правильными типами данных
                const bookData: AddBookRequest = {
                    title: values.title,
                    author: values.author,
                    publishYear: Number(values.publishYear), // Преобразуем строку в число
                    pagesTotal: Number(values.pagesTotal), // Преобразуем строку в число
                };

                // Передаем объект с уже правильными типами
                await onSubmit(bookData);
                setSubmitting(false);
                resetForm();
            }}
        >
            {({ isSubmitting }) => (
                <Form className={css.form}>
                    <div className={css.fieldGroup}>
                        <label htmlFor="title">Назва книги</label>
                        <Field id="title" name="title" placeholder="..." />
                        <ErrorMessage
                            name="title"
                            component="div"
                            className={css.error}
                        />
                    </div>
                    <div className={css.fieldRow}>
                        <div className={css.fieldGroup}>
                            <label htmlFor="author">Автор книги</label>
                            <Field
                                id="author"
                                name="author"
                                placeholder="..."
                            />
                            <ErrorMessage
                                name="author"
                                component="div"
                                className={css.error}
                            />
                        </div>
                        <div className={css.fieldGroup}>
                            <label htmlFor="publishYear">Рік випуску</label>
                            <Field
                                id="publishYear"
                                name="publishYear"
                                placeholder="..."
                                type="number"
                            />
                            <ErrorMessage
                                name="publishYear"
                                component="div"
                                className={css.error}
                            />
                        </div>
                        <div className={css.fieldGroup}>
                            <label htmlFor="pagesTotal">
                                Кількість сторінок
                            </label>
                            <Field
                                id="pagesTotal"
                                name="pagesTotal"
                                placeholder="..."
                                type="number"
                            />
                            <ErrorMessage
                                name="pagesTotal"
                                component="div"
                                className={css.error}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={css.submitButton}
                    >
                        Додати
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default AddBookForm;
