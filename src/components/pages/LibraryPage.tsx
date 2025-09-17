import Header from "../Header/Header";
import appCss from "../App/App.module.css";

const LibraryPage = () => {
    return (
        <>
            <Header />

            <main>
                <section className={appCss.container}>
                    <h2>Моя библиотека</h2>
                    <p>Здесь будет контент страницы "Library" (ТЗ п. 8-13).</p>
                    <p>Макет:</p>
                </section>
            </main>
        </>
    );
};

export default LibraryPage;
