import { useQuery } from "@tanstack/react-query";
import { getPlanning } from "../services/trainingService";
import { getUserBooks } from "../services/bookService";
import Header from "../components/Header/Header";
import appCss from "../styles/container.module.css";
import CreateTrainingForm from "../components/CreateTrainingForm/CreateTrainingForm";
import ActiveTraining from "../components/ActiveTraining/ActiveTraining";
import Loader from "../components/Loader/Loader";

// 1. Импортируем наши тестовые данные из отдельного файла
import { mockPlanningData } from "../utils/mockData";

// 2. Создаем флаг для легкого переключения между режимами
const USE_MOCK_DATA = true; // Поставьте 'false', чтобы работать с реальным API

const TrainingPage = () => {
    // --- Логика получения данных ---
    const { data: realPlanning, isLoading: isPlanningLoading } = useQuery({
        queryKey: ["activeTraining"],
        queryFn: getPlanning,
        enabled: !USE_MOCK_DATA, // Запрос будет выполняться только если USE_MOCK_DATA = false
    });

    const { data: userBooks, isLoading: areBooksLoading } = useQuery({
        queryKey: ["userBooks"],
        queryFn: getUserBooks,
        enabled: !USE_MOCK_DATA,
    });

    // --- Выбираем, какие данные использовать ---
    const planning = USE_MOCK_DATA ? mockPlanningData : realPlanning;
    const isLoading = USE_MOCK_DATA
        ? false
        : isPlanningLoading || areBooksLoading;

    // --- Конец логики ---

    if (isLoading) {
        return (
            <>
                <Header />
                <Loader type="content" />
            </>
        );
    }

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
