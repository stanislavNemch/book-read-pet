import css from "./AuthInfo.module.css";

const AuthInfo = () => {
    return (
        <div className={css.infoWrapper}>
            <h1 className={css.title}>Books Reading</h1>

            <div className={css.section}>
                <h2 className={css.sectionTitle}>Допоможе вам</h2>
                <ul className={css.list}>
                    <li className={css.listItem}>
                        Швидше сформулювати свою ціль і розпочати читати
                    </li>
                    <li className={css.listItem}>
                        Пропорційно розподілити навантаження на кожний день
                    </li>
                    <li className={css.listItem}>
                        Відстежувати особистий успіх
                    </li>
                </ul>
            </div>

            <div className={css.section}>
                <h2 className={css.sectionTitle}>Також ви зможете</h2>
                <ul className={css.list}>
                    <li className={css.listItem}>
                        Формувати особисту думку незалежну від інших
                    </li>
                    <li className={css.listItem}>
                        Підвищити свої професійні якості, опираючись на нові
                        знання
                    </li>
                    <li className={css.listItem}>
                        Стати цікавим співрозмовником
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AuthInfo;
