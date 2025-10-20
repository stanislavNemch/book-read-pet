import type { Planning } from "../../types/training";
import css from "./ActiveTraining.module.css";
import Goals from "./Goals";
import TrainingBookList from "./TrainingBookList";

interface ActiveTrainingProps {
    planning: Planning;
}

const ActiveTraining: React.FC<ActiveTrainingProps> = ({ planning }) => {
    // В будущем здесь будет логика для добавления результатов, графика и т.д.

    return (
        <div className={css.container}>
            <div className={css.mainContent}>
                <Goals planning={planning} />

                {/* TODO: Здесь будут другие компоненты */}
                <div className={css.placeholder}>
                    <TrainingBookList books={planning.books} />
                </div>
                <div className={css.placeholder}>
                    <p>Тут будет график результатов</p>
                </div>
            </div>
            <div className={css.sideContent}>
                {/* TODO: Здесь будет компонент статистики */}
                <div className={css.placeholder}>
                    <p>Тут будет статистика</p>
                </div>
            </div>
        </div>
    );
};

export default ActiveTraining;
