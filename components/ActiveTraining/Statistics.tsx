import type { StatPoint } from "../../types/training";
import css from "./ActiveTraining.module.css";

interface StatisticsProps {
    stats: StatPoint[];
}

// Функція тепер бере тільки дату (частину до пробілу) з рядка "YYYY-MM-DD HH:mm"
const formatDate = (dateTimeString: string) => {
    try {
        const datePart = dateTimeString.split(" ")[0];
        const parts = datePart.split("-");
        if (parts.length === 3) {
            const [year, month, day] = parts;
            return `${day}.${month}.${year}`;
        }
        return dateTimeString;
    } catch (e) {
        return dateTimeString;
    }
};

const Statistics: React.FC<StatisticsProps> = ({ stats }) => {
    // Сортуємо від нової дати до старої
    const sortedStats = [...stats].sort(
        (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
    );

    return (
        <div className={css.statsContainer}>
            <h3 className={css.statsTitle}>Статистика</h3>
            {sortedStats.length > 0 ? (
                <div className={css.statsTable}>
                    {sortedStats.map((stat, index) => (
                        // Використовуємо комбінацію часу та індексу для унікального ключа
                        <div
                            key={`${stat.time}-${index}`}
                            className={css.statsRow}
                        >
                            <div className={css.statsDate}>
                                {formatDate(stat.time)}
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
