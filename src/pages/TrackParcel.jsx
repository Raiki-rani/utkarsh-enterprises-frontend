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
            console.log("Error:", error);
            console.log("Response:", error.response);

            alert("Tracking Number Not Found");
            setBooking(null);
        }
    };

    return (
        <div style={{ padding: "30px", textAlign: "center" }}>

            <h1>Track Parcel</h1>

            <input
                type="text"
                placeholder="Enter Tracking Number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                style={{
                    padding: "10px",
                    width: "300px",
                    marginRight: "10px",
                }}
            />

            <button onClick={searchParcel}>
                Search
            </button>

            {booking && (
                <div
                    style={{
                        marginTop: "30px",
                        border: "1px solid #ccc",
                        padding: "20px",
                        borderRadius: "10px",
                        width: "400px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <h3>Tracking Details</h3>

                    <p><b>Tracking No:</b> {booking.trackingNumber}</p>
                    <p><b>Sender:</b> {booking.senderName}</p>
                    <p><b>Receiver:</b> {booking.receiverName}</p>
                    <p><b>From:</b> {booking.fromCity}</p>
                    <p><b>To:</b> {booking.toCity}</p>
                    <div style={{ marginTop: "20px" }}>
                        <h3>Shipment Progress</h3>

                        <div style={{ textAlign: "left", marginTop: "15px" }}>

                            <p>
                                {booking.status === "Booked" ||
                                booking.status === "In Transit" ||
                                booking.status === "Out for Delivery" ||
                                booking.status === "Delivered"
                                    ? "✅"
                                    : "⬜"} Booked
                            </p>

                            <p>
                                {booking.status === "In Transit" ||
                                booking.status === "Out for Delivery" ||
                                booking.status === "Delivered"
                                    ? "✅"
                                    : "⬜"} In Transit
                            </p>

                            <p>
                                {booking.status === "Out for Delivery" ||
                                booking.status === "Delivered"
                                    ? "✅"
                                    : "⬜"} Out for Delivery
                            </p>

                            <p>
                                {booking.status === "Delivered"
                                    ? "✅"
                                    : "⬜"} Delivered
                            </p>

                        </div>
                    </div>

                </div>
            )}

        </div>
    );
}

export default TrackParcel;