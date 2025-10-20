import { useQuery } from "@tanstack/react-query";
import { getPlanning } from "../services/trainingService";
import { getUserBooks } from "../services/bookService";
import Header from "../components/Header/Header";
import appCss from "../styles/container.module.css";
import CreateTrainingForm from "../components/CreateTrainingForm/CreateTrainingForm";

const TrainingPage = () => {
    // Запрос на получение активной тренировки
    const { data: planning, isLoading: isPlanningLoading } = useQuery({
        queryKey: ["activeTraining"],
        queryFn: getPlanning,
    });

    // Запрос на получение всех книг, чтобы отфильтровать те, что можно добавить в тренировку
    const { data: userBooks, isLoading: areBooksLoading } = useQuery({
        queryKey: ["userBooks"],
        queryFn: getUserBooks,
    });

    const isLoading = isPlanningLoading || areBooksLoading;

    if (isLoading) {
        return (
            <>
                <Header />
                <div style={{ padding: "20px" }}>Завантаження даних...</div>
            </>
        );
    }

    // Книги, которые можно добавить в тренировку (из списка "собираюсь прочитать")
    const booksForTraining = userBooks?.goingToRead || [];

    return (
        <>
            <Header />
            <main className={appCss.container}>
                {planning ? (
                    <div>
                        <h1>Активна Тренировка</h1>
                        {/* Здесь будут компоненты для активной тренировки */}
                        <pre>{JSON.stringify(planning, null, 2)}</pre>
                    </div>
                ) : (
                    <CreateTrainingForm books={booksForTraining} />
                )}
            </main>
        </>
    );
};

export default TrainingPage;
