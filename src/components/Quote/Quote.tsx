import css from "./Quote.module.css";

const Quote = () => {
    return (
        <div className={css.quoteWrapper}>
            <p className={css.text}>
                Книги — это корабли мысли, странствующие по волнам времени и
                бережно несущие свой драгоценный груз от поколения к поколению.
            </p>
            <p className={css.author}>Бэкон Ф.</p>
        </div>
    );
};

export default Quote;
