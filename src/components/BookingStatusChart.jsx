import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

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
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Booking Status Distribution",
            },
        },
    };

    return (
        <div
            style={{
                width: "450px",
                margin: "30px auto",
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
        >
            <Pie data={data} options={options} />
        </div>
    );
}

export default BookingStatusChart;