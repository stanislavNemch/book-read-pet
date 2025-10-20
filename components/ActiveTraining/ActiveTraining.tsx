import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type { Planning } from "../../types/training";
import Goals from "./Goals";
import TrainingBookList from "./TrainingBookList";
import Statistics from "./Statistics";
import AddResultForm from "./AddResultForm"; // Импортируем форму
import TrainingChart from "./TrainingChart";
import css from "./ActiveTraining.module.css";

interface ActiveTrainingProps {
    planning: Planning;
}

const ActiveTraining: React.FC<ActiveTrainingProps> = ({ planning }) => {
    const queryClient = useQueryClient();

    return (
        <div className={css.container}>
            <div className={css.mainContent}>
                <Goals planning={planning} />

                <TrainingBookList books={planning.books} />
                <AddResultForm />
                <TrainingChart planning={planning} />
            </div>

            <div className={css.sideContent}>
                <Statistics stats={planning.stats} />
            </div>
        </div>
    );
};

export default ActiveTraining;
