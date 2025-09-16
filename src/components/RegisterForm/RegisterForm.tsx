import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type { RegistrationRequest } from "../types/auth";
import css from "./RegisterForm.module.css";

// --- Схема валидации Yup (ТЗ п.5) ---
const RegistrationSchema = Yup.object().shape({
    // В макете 2-registration.pdf есть поле 'Ім'я'
    // В вашем RegistrationRequest его нет.
    // Давайте добавим его в схему, но в запросе (пока) отправлять не будем.
    // Если бэкенд ожидает `name`, нужно будет обновить RegistrationRequest.
    name: Yup.string()
        .min(2, "Имя должно быть не короче 3 символов")
        .max(254, "Слишком длинное имя")
        .required("Обязательное поле"),

    email: Yup.string()
        .email("Некорректный email")
        .max(254, "Слишком длинный email")
        .required("Обязательное поле"),

    // --- Анализ безопасности (по вашему запросу) ---
    // Мы добавляем сложные правила для пароля,
    // чтобы повысить безопасность аккаунтов.
    password: Yup.string()
        .min(8, "Пароль должен быть не короче 8 символов")
        .max(100, "Слишком длинный пароль")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "Пароль должен содержать одну заглавную, одну строчную букву и одну цифру"
        )
        .required("Обязательное поле"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Пароли должны совпадать")
        .required("Обязательное поле"),
});

// --- Типы для пропсов ---
interface RegisterFormProps {
    onSubmit: (
        values: RegistrationRequest,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const initialValues: RegistrationRequest & {
        name: string;
        confirmPassword: string;
    } = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    // Внутренний обработчик, который убирает лишние поля
    const handleSubmit = (
        values: typeof initialValues,
        formikHelpers: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        // Отправляем только те данные, что ожидает API (из auth.ts)
        //
        const apiValues: RegistrationRequest = {
            name: values.name,
            email: values.email,
            password: values.password,
        };
        onSubmit(apiValues, formikHelpers);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={RegistrationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className={css.form}>
                    {/* Поле "Ім'я" */}
                    <div className={css.fieldGroup}>
                        <label htmlFor="name" className={css.label}>
                            Ім'я *
                        </label>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="..."
                            className={css.input}
                        />
                        <ErrorMessage
                            name="name"
                            component="div"
                            className={css.error}
                        />
                    </div>

                    {/* Поле "Електронна адреса" */}
                    <div className={css.fieldGroup}>
                        <label htmlFor="email" className={css.label}>
                            Електронна адреса *
                        </label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            className={css.input}
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className={css.error}
                        />
                    </div>

                    {/* Поле "Пароль" */}
                    <div className={css.fieldGroup}>
                        <label htmlFor="password" className={css.label}>
                            Пароль *
                        </label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="..."
                            className={css.input}
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className={css.error}
                        />
                    </div>

                    {/* Поле "Підтвердити пароль" */}
                    <div className={css.fieldGroup}>
                        <label htmlFor="confirmPassword" className={css.label}>
                            Підтвердити пароль *
                        </label>
                        <Field
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="..."
                            className={css.input}
                        />
                        <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className={css.error}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={css.submitButton}
                    >
                        {isSubmitting ? "Регистрация..." : "Зареєструватися"}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;
