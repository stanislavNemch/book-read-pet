import type { Planning } from "../../types/training";
import Goals from "./Goals";
import TrainingBookList from "./TrainingBookList";
import Statistics from "./Statistics";
import AddResultForm from "./AddResultForm";
import css from "./ActiveTraining.module.css";

interface ActiveTrainingProps {
    planning: Planning;
}

const ActiveTraining: React.FC<ActiveTrainingProps> = ({ planning }) => {
    return (
        <div className={css.container}>
            <div className={css.mainContent}>
                <Goals planning={planning} />

                <TrainingBookList books={planning.books} />

                <AddResultForm />

                <div className={css.placeholder}>
                    <p>Тут будет график результатов</p>
                </div>
            </div>
            <div className={css.sideContent}>
                <Statistics stats={planning.stats} />
            </div>
        </div>
    );
};

export default ActiveTraining;
