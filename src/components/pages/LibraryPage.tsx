import Header from "../Header/Header";
// Импортируем App.module.css для использования .container
import appCss from "../App/App.module.css";
// Импортируем макет пустой библиотеки
//

const LibraryPage = () => {
    return (
        <>
            {/* Header здесь, а не в App.tsx, 
                т.к. он не нужен на страницах логина */}
            <Header />

            <main>
                {/* Применяем .container, как вы и хотели в ТЗ,
                  для ограничения ширины контента 
                  
                */}
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
