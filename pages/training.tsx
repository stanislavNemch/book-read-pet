import { useQuery } from "@tanstack/react-query";
import { getPlanning } from "../services/trainingService";
import { getUserBooks } from "../services/bookService";
import Header from "../components/Header/Header";
import appCss from "../styles/container.module.css";
import CreateTrainingForm from "../components/CreateTrainingForm/CreateTrainingForm";
import ActiveTraining from "../components/ActiveTraining/ActiveTraining";
import Loader from "../components/Loader/Loader";

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
                <Loader type="content" />
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
                    <ActiveTraining planning={planning} />
                ) : (
                    <CreateTrainingForm books={booksForTraining} />
                )}
            </main>
        </>
    );
};

export default TrainingPage;
