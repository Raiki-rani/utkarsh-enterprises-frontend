import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddBooking() {

    const navigate = useNavigate();

    const [booking, setBooking] = useState({
        trackingNumber: "",
        senderName: "",
        senderPhone: "",
        receiverName: "",
        receiverPhone: "",
        fromCity: "",
        toCity: "",
        parcelType: "",
        weight: "",
        amount: "",
        status: ""
    });

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value,
        });
    };

    const saveBooking = async () => {

        try {

            await api.post("/bookings/add", booking);

            alert("✅ Booking Added Successfully!");

            navigate("/bookings");

        } catch (error) {

            console.log(error);

            alert("❌ Failed to Add Booking!");

        }

    };

    return (

        <div
            style={{
                background: "#f8fafc",
                minHeight: "100vh",
                padding: "40px",
            }}
        >

            {/* Header */}

            <div style={{ marginBottom: "30px" }}>

                <h1
                    style={{
                        margin: 0,
                        color: "#0f172a",
                    }}
                >
                    🚚 Add Booking
                </h1>

                <p
                    style={{
                        color: "#64748b",
                        marginTop: "8px",
                    }}
                >
                    Create a new courier booking.
                </p>

            </div>

            {/* Card */}

            <div
                style={{
                    maxWidth: "700px",
                    margin: "auto",
                    background: "white",
                    padding: "35px",
                    borderRadius: "20px",
                    boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                }}
            >

                <label><strong>Tracking Number</strong></label>

                <input
                    type="text"
                    name="trackingNumber"
                    placeholder="Enter Tracking Number"
                    value={booking.trackingNumber}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>Sender Name</strong></label>

                <input
                    type="text"
                    name="senderName"
                    placeholder="Enter Sender Name"
                    value={booking.senderName}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>Sender Phone</strong></label>

                <input
                    type="text"
                    name="senderPhone"
                    placeholder="Enter Sender Phone"
                    value={booking.senderPhone}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>Receiver Name</strong></label>

                <input
                    type="text"
                    name="receiverName"
                    placeholder="Enter Receiver Name"
                    value={booking.receiverName}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>Receiver Phone</strong></label>

                <input
                    type="text"
                    name="receiverPhone"
                    placeholder="Enter Receiver Phone"
                    value={booking.receiverPhone}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>From City</strong></label>

                <input
                    type="text"
                    name="fromCity"
                    placeholder="Enter Source City"
                    value={booking.fromCity}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>To City</strong></label>

                <input
                    type="text"
                    name="toCity"
                    placeholder="Enter Destination City"
                    value={booking.toCity}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>Parcel Type</strong></label>

                <input
                    type="text"
                    name="parcelType"
                    placeholder="Enter Parcel Type"
                    value={booking.parcelType}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>Weight (kg)</strong></label>

                <input
                    type="number"
                    name="weight"
                    placeholder="Enter Weight"
                    value={booking.weight}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>Amount (₹)</strong></label>

                <input
                    type="number"
                    name="amount"
                    placeholder="Enter Booking Amount"
                    value={booking.amount}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <label><strong>Booking Status</strong></label>

                <select
                    name="status"
                    value={booking.status}
                    onChange={handleChange}
                    style={inputStyle}
                >
                    <option value="">Select Status</option>
                    <option value="Booked">Booked</option>
                    <option value="In Transit">In Transit</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                </select>

                {/* Buttons */}

                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        marginTop: "25px",
                    }}
                >
                    <button
                        onClick={() => navigate("/bookings")}
                        style={{
                            flex: 1,
                            padding: "14px",
                            border: "none",
                            borderRadius: "10px",
                            background: "#64748b",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        onClick={saveBooking}
                        style={{
                            flex: 1,
                            padding: "14px",
                            border: "none",
                            borderRadius: "10px",
                            background:
                                "linear-gradient(135deg,#16a34a,#15803d)",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: "16px",
                            boxShadow: "0 8px 20px rgba(22,163,74,.3)",
                        }}
                    >
                        🚚 Save Booking
                    </button>
                </div>

            </div>

        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "14px",
    marginTop: "8px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    outline: "none",
    fontSize: "15px",
    boxSizing: "border-box",
    background: "white",
};

export default AddBooking;