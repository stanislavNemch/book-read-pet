import { useState, useEffect } from "react";
import type { Planning } from "../../types/training";
import css from "./ActiveTraining.module.css";

interface GoalsProps {
    planning: Planning;
}

const calculateDaysBetween = (start: string, end: string): number => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = endDate.getTime() - startDate.getTime();
    return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
};

const Goals: React.FC<GoalsProps> = ({ planning }) => {
    const [daysToEndOfYear, setDaysToEndOfYear] = useState(0);

    useEffect(() => {
        const today = new Date();
        const endOfYear = new Date(today.getFullYear(), 11, 31);
        const todayStr = today.toISOString().split("T")[0];
        const endOfYearStr = endOfYear.toISOString().split("T")[0];
        setDaysToEndOfYear(calculateDaysBetween(todayStr, endOfYearStr));
    }, []);

    // --- ИСПРАВЛЕНО ЗДЕСЬ ---
    const daysUntilGoalEnd = calculateDaysBetween(
        new Date().toISOString().split("T")[0],
        planning.endDate
    );
    const totalBooks = planning.books.length;
    const booksRead = planning.books.filter(
        (book) => book.pagesFinished >= book.pagesTotal
    ).length;

    return (
        <div className={css.goalsContainer}>
            <h3 className={css.goalsTitle}>Моя мета прочитати</h3>
            <div className={css.goalsGrid}>
                <div className={css.goalBox}>
                    <div className={css.goalValue}>{totalBooks}</div>
                    <p className={css.goalLabel}>Кількість книжок</p>
                </div>
                <div className={css.goalBox}>
                    <div className={css.goalValue}>{daysUntilGoalEnd}</div>
                    <p className={css.goalLabel}>Кількість днів</p>
                </div>
                {booksRead > 0 && (
                    <div className={css.goalBox}>
                        <div className={css.goalValue}>
                            {totalBooks - booksRead}
                        </div>
                        <p className={css.goalLabel}>Залишилось книжок</p>
                    </div>
                )}
            </div>

            <div className={css.timersContainer}>
                <div className={css.timerBox}>
                    <h4>До кінця року залишилось</h4>
                    <p className={css.timerValue}>
                        {daysToEndOfYear} <span>дн</span>
                    </p>
                </div>
                <div className={css.timerBox}>
                    <h4>До досягнення мети залишилось</h4>
                    <p className={css.timerValue}>
                        {daysUntilGoalEnd} <span>дн</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Goals;
