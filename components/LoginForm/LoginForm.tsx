import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type { LoginRequest } from "../../types/auth";
import css from "../RegisterForm/RegisterForm.module.css";

// --- Схема валидации Yup (ТЗ п.5) ---
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Некорректный email")
        .required("Обязательное поле"),
    password: Yup.string().required("Обязательное поле"),
});

// --- Типы для пропсов ---
interface LoginFormProps {
    onSubmit: (
        values: LoginRequest,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const initialValues: LoginRequest = {
        email: "",
        password: "",
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form className={css.form}>
                    {/* Поле "Електронна адреса" */}
                    <div className={css.fieldGroup}>
                        <label htmlFor="email" className={css.label}>
                            Електронна адреса{" "}
                            <span className={css.starlet}>*</span>
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
                            Пароль <span className={css.starlet}>*</span>
                        </label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Пароль"
                            className={css.input}
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className={css.error}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={css.submitButton}
                    >
                        {isSubmitting ? "Вход..." : "Увійти"}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
