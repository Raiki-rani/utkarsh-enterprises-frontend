import { useState } from "react";
import api from "../services/api";

function TrackParcel() {

    const [trackingNumber, setTrackingNumber] = useState("");
    const [booking, setBooking] = useState(null);

    const searchParcel = async () => {
        try {

            const response = await api.get(
                `/bookings/tracking/${trackingNumber.trim()}`
            );

            setBooking(response.data);

        } catch (error) {

            console.log(error);

            alert("Tracking Number Not Found");

            setBooking(null);
        }
    };

    return (

        <div
            style={{
                padding: "30px",
                background: "#f8fafc",
                minHeight: "100vh",
            }}
        >

            {/* Header */}

            <div
                style={{
                    marginBottom: "30px",
                }}
            >

                <h1
                    style={{
                        margin: 0,
                        color: "#0f172a",
                    }}
                >
                    📍 Track Parcel
                </h1>

                <p
                    style={{
                        color: "#64748b",
                        marginTop: "8px",
                    }}
                >
                    Enter your tracking number to view shipment details.
                </p>

            </div>

            {/* Search Card */}

            <div
                style={{
                    background: "white",
                    padding: "25px",
                    borderRadius: "18px",
                    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                    marginBottom: "30px",
                }}
            >

                <input
                    type="text"
                    placeholder="Enter Tracking Number"
                    value={trackingNumber}
                    onChange={(e) =>
                        setTrackingNumber(e.target.value)
                    }
                    style={{
                        width: "320px",
                        padding: "12px",
                        borderRadius: "10px",
                        border: "1px solid #cbd5e1",
                        marginRight: "10px",
                        fontSize: "15px",
                    }}
                />

                <button
                    onClick={searchParcel}
                    style={{
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    🔍 Track
                </button>

            </div>

            {booking && (

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit,minmax(350px,1fr))",
                        gap: "25px",
                    }}
                >

                    {/* Parcel Details */}

                    <div
                        style={{
                            background: "white",
                            borderRadius: "18px",
                            padding: "25px",
                            boxShadow:
                                "0 10px 25px rgba(0,0,0,.08)",
                        }}
                    >

                        <h2
                            style={{
                                marginTop: 0,
                                color: "#0f172a",
                            }}
                        >
                            📦 Parcel Details
                        </h2>

                        <p>
                            <strong>Tracking No:</strong><br />
                            {booking.trackingNumber}
                        </p>

                        <p>
                            <strong>Sender:</strong><br />
                            {booking.senderName}
                        </p>

                        <p>
                            <strong>Receiver:</strong><br />
                            {booking.receiverName}
                        </p>

                        <p>
                            <strong>Route:</strong><br />
                            {booking.fromCity} ➜ {booking.toCity}
                        </p>

                        <p>
                            <strong>Status:</strong>
                        </p>

                        <span
                            style={{
                                background:
                                    booking.status === "Delivered"
                                        ? "#22c55e"
                                        : booking.status === "In Transit"
                                        ? "#f59e0b"
                                        : booking.status === "Out for Delivery"
                                        ? "#8b5cf6"
                                        : "#2563eb",

                                color: "white",

                                padding: "10px 18px",

                                borderRadius: "20px",

                                fontWeight: "bold",
                            }}
                        >
                            {booking.status}
                        </span>

                    </div>

                    {/* Shipment Timeline */}
                    <div
                        style={{
                            background: "white",
                            borderRadius: "18px",
                            padding: "25px",
                            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                        }}
                    >
                        <h2
                            style={{
                                marginTop: 0,
                                color: "#0f172a",
                            }}
                        >
                            🚚 Shipment Progress
                        </h2>

                        <div
                            style={{
                                marginTop: "25px",
                                lineHeight: "2.4",
                                fontSize: "16px",
                            }}
                        >
                            <p>
                                {booking.status === "Booked" ||
                                booking.status === "In Transit" ||
                                booking.status === "Out for Delivery" ||
                                booking.status === "Delivered"
                                    ? "🟢"
                                    : "⚪"}{" "}
                                <strong>Booked</strong>
                            </p>

                            <div
                                style={{
                                    marginLeft: "12px",
                                    color: "#94a3b8",
                                }}
                            >
                                │
                            </div>

                            <p>
                                {booking.status === "In Transit" ||
                                booking.status === "Out for Delivery" ||
                                booking.status === "Delivered"
                                    ? "🟢"
                                    : "⚪"}{" "}
                                <strong>In Transit</strong>
                            </p>

                            <div
                                style={{
                                    marginLeft: "12px",
                                    color: "#94a3b8",
                                }}
                            >
                                │
                            </div>

                            <p>
                                {booking.status === "Out for Delivery" ||
                                booking.status === "Delivered"
                                    ? "🟢"
                                    : "⚪"}{" "}
                                <strong>Out for Delivery</strong>
                            </p>

                            <div
                                style={{
                                    marginLeft: "12px",
                                    color: "#94a3b8",
                                }}
                            >
                                │
                            </div>

                            <p>
                                {booking.status === "Delivered"
                                    ? "🟢"
                                    : "⚪"}{" "}
                                <strong>Delivered</strong>
                            </p>
                        </div>

                        <div
                            style={{
                                marginTop: "30px",
                                padding: "15px",
                                background: "#eff6ff",
                                borderRadius: "12px",
                                border: "1px solid #bfdbfe",
                            }}
                        >
                            <strong>Current Status:</strong>

                            <div
                                style={{
                                    marginTop: "10px",
                                    color: "#2563eb",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                {booking.status}
                            </div>
                        </div>
                    </div>

                </div>

            )}

        </div>
    );
}

export default TrackParcel;