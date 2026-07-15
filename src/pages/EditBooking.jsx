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
    });

    useEffect(() => {
        api.get(`/bookings/${id}`)
            .then((response) => {
                setBooking(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value,
        });
    };

    const updateBooking = (e) => {
        e.preventDefault();

        api.put(`/bookings/update/${id}`, booking)
            .then(() => {
                alert("Booking Updated Successfully!");
                navigate("/bookings");
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to Update Booking");
            });
    };

    return (
        <div style={{ maxWidth: "600px", margin: "40px auto" }}>

            <h1>Edit Booking</h1>

            <form onSubmit={updateBooking}>

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
                    placeholder="Weight (Kg)"
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

                <select
                    name="status"
                    value={booking.status}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "20px",
                    }}
                >
                    <option value="Booked">Booked</option>
                    <option value="In Transit">In Transit</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                </select>

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "12px",
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Update Booking
                </button>

            </form>

        </div>
    );
}

export default EditBooking;