import css from "./Instructions.module.css";

const Instructions = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.step}>
                <h3 className={css.stepTitle}>Крок 1.</h3>
                <p className={css.stepText}>
                    <span className={css.icon}>📚</span>
                    Створіть особисту бібліотеку
                </p>
                <p className={css.stepSubText}>
                    Додайте до неї книжки, які маєте намір прочитати.
                </p>
            </div>
            <div className={css.step}>
                <h3 className={css.stepTitle}>Крок 2.</h3>
                <p className={css.stepText}>
                    <span className={css.icon}>✍️</span>
                    Сформуйте своє перше тренування
                </p>
                <p className={css.stepSubText}>
                    Визначте ціль, оберіть період, розпочинайте тренування.
                </p>
            </div>
        </div>
    );
};

export default Instructions;
