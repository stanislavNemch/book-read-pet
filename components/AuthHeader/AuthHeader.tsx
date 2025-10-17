import css from "./AuthHeader.module.css";

const AuthHeader = () => {
    return (
        <header className={css.header}>
            <p className={css.logo}>BR</p>
        </header>
    );
};

export default AuthHeader;
