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
                background: "#f8fafc",
                minHeight: "100vh",
                padding: "35px",
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
                        fontSize: "34px",
                    }}
                >
                    📍 Track Consignment
                </h1>

                <p
                    style={{
                        marginTop: "8px",
                        color: "#64748b",
                        fontSize: "16px",
                    }}
                >
                    Enter your consignment number to view shipment details and Proof of Delivery.
                </p>

            </div>

            {/* Search Card */}

            <div
                style={{
                    background: "white",
                    borderRadius: "18px",
                    padding: "30px",
                    boxShadow: "0 12px 25px rgba(0,0,0,.08)",
                    marginBottom: "30px",
                }}
            >

                <h2
                    style={{
                        marginTop: 0,
                        color: "#0f172a",
                    }}
                >
                    🔎 Search Consignment
                </h2>

                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        flexWrap: "wrap",
                        marginTop: "20px",
                    }}
                >

                    <input
                        type="text"
                        placeholder="Enter Consignment Number"
                        value={trackingNumber}
                        onChange={(e) =>
                            setTrackingNumber(e.target.value)
                        }
                        style={{
                            flex: 1,
                            minWidth: "280px",
                            padding: "14px",
                            borderRadius: "10px",
                            border: "1px solid #cbd5e1",
                            fontSize: "15px",
                        }}
                    />

                    <button
                        onClick={searchParcel}
                        style={{
                            background:
                                "linear-gradient(135deg,#2563eb,#1d4ed8)",
                            color: "white",
                            border: "none",
                            padding: "14px 28px",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "15px",
                        }}
                    >
                        🔍 Track Now
                    </button>

                </div>

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
        padding: "30px",
        boxShadow: "0 12px 25px rgba(0,0,0,.08)",
    }}
>

    <h2
        style={{
            marginTop: 0,
            color: "#0f172a",
            marginBottom: "25px",
        }}
    >
        📦 Parcel Details
    </h2>

    <div style={{ marginBottom: "18px" }}>
        <strong style={{ color: "#475569" }}>Tracking Number</strong>
        <div style={{ marginTop: "6px", fontSize: "17px" }}>
            {booking.trackingNumber}
        </div>
    </div>

    <div style={{ marginBottom: "18px" }}>
        <strong style={{ color: "#475569" }}>Sender</strong>
        <div style={{ marginTop: "6px" }}>
            {booking.senderName}
        </div>
    </div>

    <div style={{ marginBottom: "18px" }}>
        <strong style={{ color: "#475569" }}>Receiver</strong>
        <div style={{ marginTop: "6px" }}>
            {booking.receiverName}
        </div>
    </div>

    <div style={{ marginBottom: "18px" }}>
        <strong style={{ color: "#475569" }}>Route</strong>
        <div style={{ marginTop: "6px" }}>
            📍 {booking.fromCity} ➜ {booking.toCity}
        </div>
    </div>

    <div style={{ marginBottom: "25px" }}>
        <strong style={{ color: "#475569" }}>Current Status</strong>

        <div style={{ marginTop: "12px" }}>

            <span
                style={{
                    background:
                        booking.status === "Delivered"
                            ? "#16a34a"
                            : booking.status === "Out for Delivery"
                            ? "#7c3aed"
                            : booking.status === "In Transit"
                            ? "#f59e0b"
                            : "#2563eb",

                    color: "white",

                    padding: "10px 20px",

                    borderRadius: "25px",

                    fontWeight: "bold",

                    display: "inline-block",
                }}
            >
                {booking.status}
            </span>

        </div>

    </div>

    <hr
        style={{
            border: "none",
            borderTop: "1px solid #e2e8f0",
            margin: "25px 0",
        }}
    />

    <div
        style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
        }}
    >

        <div
            style={{
                background: "#eff6ff",
                padding: "15px",
                borderRadius: "12px",
            }}
        >
            <strong>Total Stops</strong>

            <div
                style={{
                    fontSize: "22px",
                    marginTop: "8px",
                    color: "#2563eb",
                    fontWeight: "bold",
                }}
            >
                4
            </div>

        </div>

        <div
            style={{
                background: "#f0fdf4",
                padding: "15px",
                borderRadius: "12px",
            }}
        >
            <strong>Delivery Status</strong>

            <div
                style={{
                    fontSize: "18px",
                    marginTop: "8px",
                    color: "#16a34a",
                    fontWeight: "bold",
                }}
            >
                {booking.status}
            </div>

        </div>

    </div>

</div>
{/* Shipment Progress */}

<div
    style={{
        background: "white",
        borderRadius: "18px",
        padding: "30px",
        boxShadow: "0 12px 25px rgba(0,0,0,.08)",
    }}
>

    <h2
        style={{
            marginTop: 0,
            color: "#0f172a",
            marginBottom: "25px",
        }}
    >
        🚚 Shipment Progress
    </h2>

    <div
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
        }}
    >

        {/* Booked */}

        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
            }}
        >
            <div
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background:
                        booking.status === "Booked" ||
                        booking.status === "In Transit" ||
                        booking.status === "Out for Delivery" ||
                        booking.status === "Delivered"
                            ? "#22c55e"
                            : "#cbd5e1",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                }}
            >
                ✓
            </div>

            <div>
                <strong>Shipment Booked</strong>
                <br />
                <span style={{ color: "#64748b" }}>
                    Parcel has been booked.
                </span>
            </div>
        </div>

        <div style={{ marginLeft: "20px", color: "#cbd5e1" }}>
            │
        </div>

        {/* Transit */}

        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
            }}
        >
            <div
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background:
                        booking.status === "In Transit" ||
                        booking.status === "Out for Delivery" ||
                        booking.status === "Delivered"
                            ? "#22c55e"
                            : "#cbd5e1",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                }}
            >
                ✓
            </div>

            <div>
                <strong>In Transit</strong>
                <br />
                <span style={{ color: "#64748b" }}>
                    Shipment is moving to destination.
                </span>
            </div>
        </div>

        <div style={{ marginLeft: "20px", color: "#cbd5e1" }}>
            │
        </div>

        {/* Out for Delivery */}

        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
            }}
        >
            <div
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background:
                        booking.status === "Out for Delivery" ||
                        booking.status === "Delivered"
                            ? "#22c55e"
                            : "#cbd5e1",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                }}
            >
                🚚
            </div>

            <div>
                <strong>Out for Delivery</strong>
                <br />
                <span style={{ color: "#64748b" }}>
                    Courier is on the way.
                </span>
            </div>
        </div>

        <div style={{ marginLeft: "20px", color: "#cbd5e1" }}>
            │
        </div>

        {/* Delivered */}

        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
            }}
        >
            <div
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background:
                        booking.status === "Delivered"
                            ? "#22c55e"
                            : "#cbd5e1",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                }}
            >
                📦
            </div>

            <div>
                <strong>Delivered</strong>
                <br />
                <span style={{ color: "#64748b" }}>
                    Shipment delivered successfully.
                </span>
            </div>
        </div>

    </div>

    <div
        style={{
            marginTop: "30px",
            padding: "18px",
            background: "#eff6ff",
            borderRadius: "12px",
            border: "1px solid #bfdbfe",
        }}
    >

        <strong>Current Status</strong>

        <div
            style={{
                marginTop: "10px",
                fontSize: "22px",
                color: "#2563eb",
                fontWeight: "bold",
            }}
        >
            {booking.status}
        </div>

    </div>

</div>
{/* Proof of Delivery (POD) */}

{booking.status === "Delivered" ? (

<div
    style={{
        gridColumn: "1 / -1",
        background: "white",
        borderRadius: "18px",
        padding: "30px",
        boxShadow: "0 12px 25px rgba(0,0,0,.08)",
        marginTop: "10px",
    }}
>

    <h2
        style={{
            marginTop: 0,
            color: "#0f172a",
            marginBottom: "25px",
        }}
    >
        ✅ Proof of Delivery (POD)
    </h2>

    <div
        style={{
            display: "grid",
            gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
        }}
    >

        {/* Delivery Details */}

        <div
            style={{
                background: "#ecfdf5",
                border: "2px solid #22c55e",
                borderRadius: "15px",
                padding: "25px",
            }}
        >

            <h3 style={{ marginTop: 0 }}>
                🎉 Delivered Successfully
            </h3>

            <p>
                <strong>Receiver</strong>
                <br />
                {booking.receiverName}
            </p>

            <p>
                <strong>Delivery Date</strong>
                <br />
                {booking.deliveryDate || "21 Jul 2026"}
            </p>

            <p>
                <strong>Delivery Time</strong>
                <br />
                {booking.deliveryTime || "04:35 PM"}
            </p>

        </div>

        {/* Signature */}

        <div
            style={{
                background: "#f8fafc",
                borderRadius: "15px",
                padding: "20px",
                textAlign: "center",
            }}
        >

            <h3>✍ Recipient Signature</h3>

            <img
                src={
                    booking.signatureUrl ||
                    "https://via.placeholder.com/220x90?text=Signature"
                }
                alt="Signature"
                style={{
                    width: "220px",
                    height: "90px",
                    objectFit: "contain",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                }}
            />

            <br />

            <button
                style={{
                    marginTop: "15px",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                }}
            >
                Download Signature
            </button>

        </div>

        {/* Delivery Photo */}

        <div
            style={{
                background: "#f8fafc",
                borderRadius: "15px",
                padding: "20px",
                textAlign: "center",
            }}
        >

            <h3>📷 Delivery Photo</h3>

            <img
                src={
                    booking.podImageUrl ||
                    "https://via.placeholder.com/300x200?text=Delivery+Photo"
                }
                alt="Delivery"
                style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                }}
            />

            <button
                style={{
                    marginTop: "15px",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                }}
            >
                Download Photo
            </button>

        </div>

    </div>

</div>

) : (

<div
    style={{
        gridColumn: "1 / -1",
        background: "#fff7ed",
        border: "2px dashed #fb923c",
        borderRadius: "15px",
        padding: "25px",
        textAlign: "center",
        marginTop: "10px",
    }}
>

    <h3>📦 Proof of Delivery</h3>

    <p style={{ color: "#64748b" }}>
        Proof of Delivery (POD) will be available once the shipment has been delivered.
    </p>

</div>

)}

                </div>

            )}

        </div>

    );

}

export default TrackParcel;