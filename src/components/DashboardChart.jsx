import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function DashboardChart({ products, customers, bookings }) {
    const data = {
        labels: ["Products", "Customers", "Bookings"],
        datasets: [
            {
                label: "Total Count",
                data: [products, customers, bookings],
                backgroundColor: [
                    "#3b82f6",
                    "#22c55e",
                    "#f97316",
                ],
                borderRadius: 8,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Utkarsh Enterprises Overview",
                font: {
                    size: 18,
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
        <div
            style={{
                width: "80%",
                margin: "40px auto",
                background: "#ffffff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
        >
            <Bar data={data} options={options} />
        </div>
    );
}

export default DashboardChart;