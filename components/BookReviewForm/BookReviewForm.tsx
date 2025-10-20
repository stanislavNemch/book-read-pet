import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaStar } from "react-icons/fa";
import type { BookReviewRequest, Book } from "../../types/book";
import css from "./BookReviewForm.module.css";

// Схема валидации
const ReviewSchema = Yup.object().shape({
    rating: Yup.number()
        .min(1, "Рейтинг не може бути менше 1")
        .max(5, "Рейтинг не може бути більше 5")
        .required("Оцінка є обов'язковою"),
    feedback: Yup.string()
        .max(500, "Резюме занадто довге (максимум 500 символів)")
        .required("Резюме є обов'язковим"),
});

// Пропсы компонента
interface BookReviewFormProps {
    book: Book;
    onSubmit: (values: BookReviewRequest) => Promise<void>;
    onClose: () => void;
}

// Компонент для выбора рейтинга (звезды)
const StarRating = ({ field, form }: any) => {
    const [hover, setHover] = useState(0);
    return (
        <div className={css.starContainer}>
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={ratingValue}>
                        <input
                            type="radio"
                            name={field.name}
                            value={ratingValue}
                            onClick={() =>
                                form.setFieldValue(field.name, ratingValue)
                            }
                            className={css.radioInput}
                        />
                        <FaStar
                            className={css.star}
                            color={
                                ratingValue <= (hover || field.value)
                                    ? "#ffc107"
                                    : "#e4e5e9"
                            }
                            size={24}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

const BookReviewForm: React.FC<BookReviewFormProps> = ({
    book,
    onSubmit,
    onClose,
}) => {
    return (
        <div className={css.formWrapper}>
            <h3 className={css.title}>Обрати рейтинг книги</h3>
            <Formik
                initialValues={{
                    rating: book.rating || 0,
                    feedback: book.feedback || "",
                }}
                validationSchema={ReviewSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    await onSubmit(values);
                    setSubmitting(false);
                    onClose();
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className={css.fieldGroup}>
                            <label>Рейтинг</label>
                            <Field name="rating" component={StarRating} />
                            <ErrorMessage
                                name="rating"
                                component="div"
                                className={css.error}
                            />
                        </div>

                        <div className={css.fieldGroup}>
                            <label htmlFor="feedback">Резюме</label>
                            <Field
                                as="textarea"
                                id="feedback"
                                name="feedback"
                                rows="5"
                                placeholder="Напишіть своє резюме..."
                                className={css.textarea}
                            />
                            <ErrorMessage
                                name="feedback"
                                component="div"
                                className={css.error}
                            />
                        </div>

                        <div className={css.buttonGroup}>
                            <button
                                type="button"
                                onClick={onClose}
                                className={css.backButton}
                            >
                                Назад
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={css.saveButton}
                            >
                                {isSubmitting ? "Збереження..." : "Зберегти"}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default BookReviewForm;
