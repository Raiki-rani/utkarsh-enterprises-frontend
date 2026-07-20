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

    const [signaturePreview, setSignaturePreview] = useState("");
    const [podPreview, setPodPreview] = useState("");

    useEffect(() => {
        loadBooking();
    }, []);

    const loadBooking = async () => {

        try {

            const response = await api.get(`/bookings/${id}`);

            setBooking({
                trackingNumber: response.data.trackingNumber || "",
                senderName: response.data.senderName || "",
                senderPhone: response.data.senderPhone || "",
                receiverName: response.data.receiverName || "",
                receiverPhone: response.data.receiverPhone || "",
                fromCity: response.data.fromCity || "",
                toCity: response.data.toCity || "",
                parcelType: response.data.parcelType || "",
                weight: response.data.weight || "",
                amount: response.data.amount || "",
                status: response.data.status || "Booked",
                deliveryDate: response.data.deliveryDate || "",
                deliveryTime: response.data.deliveryTime || "",
                signatureUrl: response.data.signatureUrl || "",
                podImageUrl: response.data.podImageUrl || "",
            });

            setSignaturePreview(response.data.signatureUrl || "");
            setPodPreview(response.data.podImageUrl || "");

        } catch (error) {

            console.log(error);

            alert("Failed to load booking.");

        }

    };

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

            setBooking(prev => ({
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

            setBooking(prev => ({
                ...prev,
                podImageUrl: reader.result,
            }));

            setPodPreview(reader.result);

        };

        reader.readAsDataURL(file);

    };

    const updateBooking = async (e) => {

        e.preventDefault();

        try {

            await api.put(`/bookings/update/${id}`, booking);

            alert("✅ Booking Updated Successfully!");

            navigate("/bookings");

        } catch (error) {

            console.log("Full Error:", error);

            if (error.response) {
                console.log("Status:", error.response.status);
                console.log("Data:", error.response.data);
            }

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

            <label><strong>Status</strong></label>

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
                        textAlign: "center",
                        marginBottom: "20px",
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
                            background: "white",
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
                        textAlign: "center",
                        marginBottom: "25px",
                    }}
                >

                    <img
                        src={podPreview}
                        alt="Delivery Preview"
                        style={{
                            width: "300px",
                            maxWidth: "100%",
                            borderRadius: "12px",
                            border: "1px solid #cbd5e1",
                        }}
                    />

                </div>

            )}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "15px",
                    marginTop: "30px",
                }}
            >
            <button
                    type="submit"
                    style={{
                        flex: 1,
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        padding: "14px",
                        borderRadius: "10px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    ✅ Update Booking
                </button>

                <button
                    type="button"
                    onClick={() => navigate("/bookings")}
                    style={{
                        flex: 1,
                        background: "#ef4444",
                        color: "white",
                        border: "none",
                        padding: "14px",
                        borderRadius: "10px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    ❌ Cancel
                </button>

            </div>

        </form>

    </div>

</div>

    );

}

const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "8px",
    marginBottom: "18px",
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    fontSize: "15px",
    boxSizing: "border-box",
};

export default EditBooking;