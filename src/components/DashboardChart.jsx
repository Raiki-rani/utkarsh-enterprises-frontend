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
        labels: [
            "Products",
            "Customers",
            "Bookings",
        ],
        datasets: [
            {
                label: "Total Records",
                data: [
                    products,
                    customers,
                    bookings,
                ],
                backgroundColor: [
                    "#2563eb",
                    "#16a34a",
                    "#f97316",
                ],
                borderRadius: 12,
                borderSkipped: false,
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
                text: "📊 Business Analytics Overview",
                color: "#0f172a",
                font: {
                    size: 24,
                    weight: "bold",
                },
            },

            tooltip: {
                backgroundColor: "#0f172a",
                titleColor: "#ffffff",
                bodyColor: "#ffffff",
                padding: 12,
            },

        },

        scales: {

            x: {
                ticks: {
                    color: "#334155",
                    font: {
                        size: 15,
                        weight: "bold",
                    },
                },

                grid: {
                    display: false,
                },
            },

            y: {
                beginAtZero: true,

                ticks: {
                    color: "#334155",
                    stepSize: 1,
                },

                grid: {
                    color: "#e2e8f0",
                },
            },

        },

    };

    return (

        <div
            style={{
                width: "92%",
                margin: "35px auto",
                background: "#ffffff",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
            }}
        >

            <Bar
                data={data}
                options={options}
            />

        </div>

    );
}

export default DashboardChart;