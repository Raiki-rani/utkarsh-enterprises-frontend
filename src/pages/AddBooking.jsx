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
        status: "",
        deliveryDate: "",
        deliveryTime: "",
        signatureUrl: "",
        podImageUrl: "",
    });

    const [signaturePreview, setSignaturePreview] = useState("");
    const [podPreview, setPodPreview] = useState("");

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignatureUpload = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {

            setBooking((prev) => ({
                ...prev,
                signatureUrl: reader.result,
            }));

            setSignaturePreview(reader.result);

        };

        reader.readAsDataURL(file);

    };

    const handlePodUpload = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {

            setBooking((prev) => ({
                ...prev,
                podImageUrl: reader.result,
            }));

            setPodPreview(reader.result);

        };

        reader.readAsDataURL(file);

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
            <option value="">Select Status</option>
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
            value={booking.deliveryDate}
            onChange={handleChange}
            style={inputStyle}
        />

        <label><strong>Delivery Time</strong></label>
        <input
            type="time"
            name="deliveryTime"
            value={booking.deliveryTime}
            onChange={handleChange}
            style={inputStyle}
        />

        <label><strong>Recipient Signature</strong></label>

        <input
            type="file"
            accept="image/*"
            onChange={handleSignatureUpload}
            style={inputStyle}
        />

        {signaturePreview && (
            <div
                style={{
                    marginBottom: "20px",
                    textAlign: "center",
                }}
            >
                <img
                    src={signaturePreview}
                    alt="Signature Preview"
                    style={{
                        width: "220px",
                        height: "80px",
                        objectFit: "contain",
                        border: "1px solid #cbd5e1",
                        borderRadius: "10px",
                        padding: "10px",
                        background: "#fff",
                    }}
                />
            </div>
        )}

        <label><strong>Delivery Photo</strong></label>

        <input
            type="file"
            accept="image/*"
            onChange={handlePodUpload}
            style={inputStyle}
        />

        {podPreview && (
            <div
                style={{
                    marginBottom: "20px",
                    textAlign: "center",
                }}
            >
                <img
                    src={podPreview}
                    alt="Delivery Preview"
                    style={{
                        width: "300px",
                        borderRadius: "12px",
                        border: "1px solid #cbd5e1",
                        objectFit: "cover",
                    }}
                />
            </div>
        )}

        {/* Buttons */}

        <div
            style={{
                display: "flex",
                gap: "15px",
                marginTop: "30px",
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
                    background: "linear-gradient(135deg,#16a34a,#15803d)",
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