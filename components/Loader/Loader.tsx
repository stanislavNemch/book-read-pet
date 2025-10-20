import css from "./Loader.module.css";

interface LoaderProps {
    // Тип 'full-page' для центрирования на весь экран
    // Тип 'content' для центрирования в области контента
    type?: "full-page" | "content";
}

const Loader: React.FC<LoaderProps> = ({ type = "content" }) => {
    const wrapperClass =
        type === "full-page" ? css.fullPageWrapper : css.contentWrapper;

    return (
        <div className={wrapperClass}>
            <div className={css.spinner}></div>
        </div>
    );
};

export default Loader;
