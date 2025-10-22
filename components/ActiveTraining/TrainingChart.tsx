import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import type { Planning } from "../../types/training";
import css from "./ActiveTraining.module.css";

// Регистрируем все необходимые компоненты Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface TrainingChartProps {
    planning: Planning;
}

const TrainingChart: React.FC<TrainingChartProps> = ({ planning }) => {
    // 1. Подготовка данных для графика
    const labels: string[] = [];
    const planData: (number | null)[] = [];
    const factData: (number | null)[] = [];

    const startDate = new Date(planning.startDate);
    const endDate = new Date(planning.endDate);

    // Создаем массив дат для оси X
    for (
        let d = new Date(startDate);
        d <= endDate;
        d.setDate(d.getDate() + 1)
    ) {
        const dateString = d.toISOString().split("T")[0];
        labels.push(dateString);

        // Заполняем плановые данные
        planData.push(planning.pagesPerDay);

        // Ищем фактические данные за этот день
        const statForDay = planning.stats.find(
            (stat) => stat.time.split(" ")[0] === dateString
        );
        factData.push(statForDay ? statForDay.pagesCount : null);
    }

    // 2. Конфигурация графика
    const data = {
        labels,
        datasets: [
            {
                label: "План",
                data: planData,
                borderColor: "#091E3F",
                backgroundColor: "#091E3F",
                tension: 0.4, // Сглаживание линии
            },
            {
                label: "Факт",
                data: factData,
                borderColor: "#FF6B08",
                backgroundColor: "#FF6B08",
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: `Кількість сторінок / день`,
                align: "start" as const,
                font: {
                    size: 14,
                },
                padding: {
                    bottom: 20,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className={css.chartContainer}>
            <Line options={options} data={data} />
        </div>
    );
};

export default TrainingChart;
