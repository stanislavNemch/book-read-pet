import type { StatPoint } from "../../types/training";
import css from "./ActiveTraining.module.css"; // Используем общие стили

interface StatisticsProps {
    stats: StatPoint[];
}

// Вспомогательная функция для форматирования даты
const formatDate = (dateString: string) => {
    try {
        return new Date(dateString).toLocaleDateString("uk-UA", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    } catch (e) {
        return dateString;
    }
};

const Statistics: React.FC<StatisticsProps> = ({ stats }) => {
    const sortedStats = [...stats].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <div className={css.statsContainer}>
            <h3 className={css.statsTitle}>Статистика</h3>
            {sortedStats.length > 0 ? (
                <div className={css.statsTable}>
                    {sortedStats.map((stat) => (
                        <div key={stat.date} className={css.statsRow}>
                            <div className={css.statsDate}>
                                {formatDate(stat.date)}
                            </div>
                            <div className={css.statsPages}>
                                {stat.pagesCount}{" "}
                                <span className={css.statsLabel}>стор.</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className={css.noStats}>Ще немає результатів</p>
            )}
        </div>
    );
};

export default Statistics;
