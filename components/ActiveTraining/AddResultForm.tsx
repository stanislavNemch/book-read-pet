import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addReadPages } from "../../services/trainingService";
import type { ReadPagesRequest } from "../../types/training";
import css from "./ActiveTraining.module.css";

const ResultSchema = Yup.object().shape({
    pages: Yup.number()
        .typeError("Введіть число")
        .min(1, "Мінімум 1 сторінка")
        .required("Обов'язкове поле"),
});

const AddResultForm: React.FC = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data: ReadPagesRequest) => addReadPages(data),
        onSuccess: () => {
            toast.success("Результат додано!");
            // Обновляем данные тренировки, чтобы увидеть изменения в статистике и книгах
            queryClient.invalidateQueries({ queryKey: ["activeTraining"] });
        },
        onError: (error: any) => {
            toast.error(
                error.response?.data?.message || "Не вдалося додати результат"
            );
        },
    });

    return (
        <div className={css.resultFormContainer}>
            <h3 className={css.resultFormTitle}>Результати</h3>
            <Formik
                initialValues={{ pages: "" }}
                validationSchema={ResultSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    await mutation.mutateAsync({ pages: Number(values.pages) });
                    setSubmitting(false);
                    resetForm();
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={css.resultForm}>
                        <div className={css.inputGroup}>
                            <label htmlFor="pages" className={css.inputLabel}>
                                Кількість сторінок
                            </label>
                            <Field
                                type="number"
                                name="pages"
                                id="pages"
                                className={css.pagesInput}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={css.addButton}
                        >
                            Додати результат
                        </button>
                        <ErrorMessage
                            name="pages"
                            component="div"
                            className={css.error}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddResultForm;
