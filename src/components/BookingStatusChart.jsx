import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function BookingStatusChart({
    booked,
    inTransit,
    outForDelivery,
    delivered,
}) {

    const data = {
        labels: [
            "Booked",
            "In Transit",
            "Out for Delivery",
            "Delivered",
        ],
        datasets: [
            {
                data: [
                    booked,
                    inTransit,
                    outForDelivery,
                    delivered,
                ],
                backgroundColor: [
                    "#3b82f6",
                    "#f59e0b",
                    "#8b5cf6",
                    "#22c55e",
                ],
                borderColor: "#ffffff",
                borderWidth: 4,
                hoverOffset: 18,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,

        cutout: "65%",

        plugins: {

            legend: {
                position: "bottom",
                labels: {
                    padding: 20,
                    color: "#334155",
                    font: {
                        size: 14,
                        weight: "bold",
                    },
                },
            },

            title: {
                display: true,
                text: "Booking Status Distribution",
                color: "#0f172a",
                font: {
                    size: 22,
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
                padding: 12,
            },

        },

        animation: {
            animateRotate: true,
            duration: 1800,
        },

    };

    return (

        <div
            style={{
                background: "#fff",
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
                    🚚 Booking Status
                </h2>

                <p
                    style={{
                        marginTop: "8px",
                        color: "#64748b",
                    }}
                >
                    Live distribution of parcel delivery status.
                </p>
            </div>

            <div
                style={{
                    height: "420px",
                }}
            >
                <Doughnut
                    data={data}
                    options={options}
                />
            </div>

        </div>

    );
}

export default BookingStatusChart;