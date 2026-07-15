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

    const saveBooking = () => {
        api.post("/bookings/add", booking)
            .then(() => {
                alert("Booking Added Successfully!");
                navigate("/bookings");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div style={{ width: "450px", margin: "40px auto" }}>

            <h1>Add Booking</h1>

            <input
                type="text"
                name="trackingNumber"
                placeholder="Tracking Number"
                value={booking.trackingNumber}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="text"
                name="senderName"
                placeholder="Sender Name"
                value={booking.senderName}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="text"
                name="senderPhone"
                placeholder="Sender Phone"
                value={booking.senderPhone}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="text"
                name="receiverName"
                placeholder="Receiver Name"
                value={booking.receiverName}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="text"
                name="receiverPhone"
                placeholder="Receiver Phone"
                value={booking.receiverPhone}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="text"
                name="fromCity"
                placeholder="From City"
                value={booking.fromCity}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="text"
                name="toCity"
                placeholder="To City"
                value={booking.toCity}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="text"
                name="parcelType"
                placeholder="Parcel Type"
                value={booking.parcelType}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="number"
                name="weight"
                placeholder="Weight"
                value={booking.weight}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={booking.amount}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="text"
                name="status"
                placeholder="Status"
                value={booking.status}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <button
                onClick={saveBooking}
                style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px",
                }}
            >
                Save Booking
            </button>

        </div>
    );
}

export default AddBooking;