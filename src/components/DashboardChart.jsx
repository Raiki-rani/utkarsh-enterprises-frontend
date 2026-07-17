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
                label: "Total Records",
                data: [products, customers, bookings],
                backgroundColor: [
                    "#2563eb",
                    "#22c55e",
                    "#f97316",
                ],
                borderRadius: 14,
                borderSkipped: false,
                maxBarThickness: 70,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false,
            },

            title: {
                display: true,
                text: "Business Analytics Overview",
                color: "#0f172a",
                font: {
                    size: 24,
                    weight: "bold",
                },
                padding: {
                    bottom: 25,
                },
            },

            tooltip: {
                backgroundColor: "#0f172a",
                titleColor: "#fff",
                bodyColor: "#fff",
                padding: 14,
                cornerRadius: 8,
            },
        },

        scales: {

            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#475569",
                    font: {
                        size: 15,
                        weight: "bold",
                    },
                },
            },

            y: {
                beginAtZero: true,

                ticks: {
                    stepSize: 1,
                    color: "#475569",
                },

                grid: {
                    color: "#e5e7eb",
                },
            },
        },

        animation: {
            duration: 1500,
        },
    };

    return (

        <div
            style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 12px 30px rgba(0,0,0,.08)",
            }}
        >

            <div
                style={{
                    marginBottom: "20px",
                }}
            >
                <h2
                    style={{
                        margin: 0,
                        color: "#0f172a",
                    }}
                >
                    📊 Analytics Dashboard
                </h2>

                <p
                    style={{
                        color: "#64748b",
                        marginTop: "8px",
                    }}
                >
                    Overview of products, customers and bookings.
                </p>
            </div>

            <div
                style={{
                    height: "420px",
                }}
            >
                <Bar
                    data={data}
                    options={options}
                />
            </div>

        </div>
    );
}

export default DashboardChart;