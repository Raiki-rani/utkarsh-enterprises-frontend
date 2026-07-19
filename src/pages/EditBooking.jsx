import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditBooking() {

    const { id } = useParams();
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
        status: "Booked",
        deliveryDate: "",
        deliveryTime: "",
        signatureUrl: "",
        podImageUrl: "",
    });

    useEffect(() => {
        loadBooking();
    }, []);

    const loadBooking = async () => {

        try {

            const response = await api.get(`/bookings/${id}`);

            setBooking(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setBooking({
            ...booking,
            [e.target.name]: e.target.value,
        });

    };

    const updateBooking = async (e) => {

        e.preventDefault();

        try {

            await api.put(`/bookings/update/${id}`, booking);

            alert("✅ Booking Updated Successfully!");

            navigate("/bookings");

        } catch (error) {

            console.log(error);

            alert("❌ Failed to Update Booking!");

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

            <div style={{ marginBottom: "30px" }}>

                <h1
                    style={{
                        margin: 0,
                        color: "#0f172a",
                    }}
                >
                    ✏️ Edit Booking
                </h1>

                <p
                    style={{
                        color: "#64748b",
                        marginTop: "8px",
                    }}
                >
                    Update courier booking details.
                </p>

            </div>

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

                <form onSubmit={updateBooking}>

                    <label><strong>Tracking Number</strong></label>
                    <input
                        type="text"
                        name="trackingNumber"
                        value={booking.trackingNumber}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label><strong>Sender Name</strong></label>
                    <input
                        type="text"
                        name="senderName"
                        value={booking.senderName}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label><strong>Sender Phone</strong></label>
                    <input
                        type="text"
                        name="senderPhone"
                        value={booking.senderPhone}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label><strong>Receiver Name</strong></label>
                    <input
                        type="text"
                        name="receiverName"
                        value={booking.receiverName}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label><strong>Receiver Phone</strong></label>
                    <input
                        type="text"
                        name="receiverPhone"
                        value={booking.receiverPhone}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label><strong>From City</strong></label>
                    <input
                        type="text"
                        name="fromCity"
                        value={booking.fromCity}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label><strong>To City</strong></label>
                    <input
                        type="text"
                        name="toCity"
                        value={booking.toCity}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label><strong>Parcel Type</strong></label>
                    <input
                        type="text"
                        name="parcelType"
                        value={booking.parcelType}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label><strong>Weight (Kg)</strong></label>
                    <input
                        type="number"
                        name="weight"
                        value={booking.weight}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label><strong>Amount (₹)</strong></label>
                    <input
                        type="number"
                        name="amount"
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
                        <option value="Booked">Booked</option>
                        <option value="In Transit">In Transit</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>

                    <label><strong>Delivery Date</strong></label>
                    <input
                        type="date"
                        name="deliveryDate"
                        value={booking.deliveryDate || ""}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label><strong>Delivery Time</strong></label>
                    <input
                        type="time"
                        name="deliveryTime"
                        value={booking.deliveryTime || ""}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label><strong>Signature Image URL</strong></label>
                    <input
                        type="text"
                        name="signatureUrl"
                        value={booking.signatureUrl || ""}
                        onChange={handleChange}
                        placeholder="https://example.com/signature.png"
                        style={inputStyle}
                    />

                    <label><strong>Delivery Photo URL</strong></label>
                    <input
                        type="text"
                        name="podImageUrl"
                        value={booking.podImageUrl || ""}
                        onChange={handleChange}
                        placeholder="https://example.com/photo.jpg"
                        style={inputStyle}
                    />
                    {/* Buttons */}

                    <div
                        style={{
                            display: "flex",
                            gap: "15px",
                            marginTop: "25px",
                        }}
                    >
                        <button
                            type="button"
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
                            type="submit"
                            style={{
                                flex: 1,
                                padding: "14px",
                                border: "none",
                                borderRadius: "10px",
                                background:
                                    "linear-gradient(135deg,#2563eb,#1d4ed8)",
                                color: "white",
                                fontWeight: "bold",
                                cursor: "pointer",
                                fontSize: "16px",
                                boxShadow:
                                    "0 8px 20px rgba(37,99,235,.3)",
                            }}
                        >
                            ✏️ Update Booking
                        </button>
                    </div>

                </form>

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

export default EditBooking;