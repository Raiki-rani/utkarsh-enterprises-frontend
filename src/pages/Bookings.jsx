import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import QRCode from "react-qr-code";

function Bookings() {

    const [bookings, setBookings] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = () => {
        api.get("/bookings/all")
            .then((response) => {
                setBookings(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteBooking = (id) => {
        if (window.confirm("Are you sure you want to delete this booking?")) {
            api.delete(`/bookings/delete/${id}`)
                .then(() => {
                    alert("Booking Deleted Successfully!");
                    loadBookings();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const generatePDF = (booking) => {

        const doc = new jsPDF();

        doc.setFontSize(22);
        doc.setTextColor(30, 64, 175);
        doc.text("Utkarsh Enterprises", 60, 20);

        doc.setFontSize(15);
        doc.setTextColor(0, 0, 0);
        doc.text("Courier Booking Receipt", 65, 30);

        autoTable(doc, {
            startY: 40,
            theme: "grid",
            headStyles: {
                fillColor: [37, 99, 235],
            },
            body: [
                ["Tracking Number", booking.trackingNumber],
                ["Sender Name", booking.senderName],
                ["Sender Phone", booking.senderPhone],
                ["Receiver Name", booking.receiverName],
                ["Receiver Phone", booking.receiverPhone],
                ["From City", booking.fromCity],
                ["To City", booking.toCity],
                ["Parcel Type", booking.parcelType],
                ["Weight", booking.weight + " Kg"],
                ["Amount", "₹ " + booking.amount],
                ["Status", booking.status],
            ],
        });

        doc.save(`Booking_${booking.trackingNumber}.pdf`);
    };

    const filteredBookings = bookings.filter((item) =>
        item.trackingNumber.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            style={{
                padding: "30px",
                background: "#f8fafc",
                minHeight: "100vh",
            }}
        >

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginBottom: "30px",
                    gap: "20px",
                }}
            >
                <div>
                    <h1
                        style={{
                            margin: 0,
                            color: "#0f172a",
                        }}
                    >
                        🚚 Booking Management
                    </h1>

                    <p
                        style={{
                            color: "#64748b",
                            marginTop: "8px",
                        }}
                    >
                        Manage courier bookings and generate receipts.
                    </p>
                </div>

                <Link to="/bookings/add">
                    <button
                        style={{
                            background: "#2563eb",
                            color: "white",
                            border: "none",
                            padding: "12px 24px",
                            borderRadius: "12px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "15px",
                        }}
                    >
                        ➕ Add Booking
                    </button>
                </Link>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginBottom: "25px",
                    gap: "15px",
                }}
            >
                <input
                    type="text"
                    placeholder="🔍 Search Tracking Number..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        width: "340px",
                        padding: "12px",
                        borderRadius: "10px",
                        border: "1px solid #cbd5e1",
                        fontSize: "15px",
                    }}
                />

                <span
                    style={{
                        background: "#2563eb",
                        color: "white",
                        padding: "10px 18px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                    }}
                >
                    Total Bookings: {filteredBookings.length}
                </span>
            </div>

            <div
                style={{
                    background: "white",
                    borderRadius: "18px",
                    overflowX: "auto",
                    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                }}
            >
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                background: "#0f172a",
                                color: "white",
                            }}
                        >
                            <th style={{ padding: "15px" }}>ID</th>
                            <th>Tracking No.</th>
                            <th>Sender</th>
                            <th>Receiver</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredBookings.length === 0 ? (

                            <tr>
                                <td
                                    colSpan="9"
                                    style={{
                                        padding: "30px",
                                        textAlign: "center",
                                        color: "#64748b",
                                        fontWeight: "bold",
                                    }}
                                >
                                    No Bookings Found
                                </td>
                            </tr>

                        ) : (

                            filteredBookings.map((item, index) => (

                                <tr
                                    key={item.id}
                                    style={{
                                        background:
                                            index % 2 === 0
                                                ? "#f8fafc"
                                                : "#ffffff",
                                        borderBottom:
                                            "1px solid #e5e7eb",
                                    }}
                                >
                                    <td style={{ padding: "15px" }}>
                                        {item.id}
                                    </td>

                                    <td
                                        style={{
                                            color: "#2563eb",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item.trackingNumber}
                                    </td>

                                    <td>{item.senderName}</td>
                                    <td>{item.receiverName}</td>
                                    <td>{item.fromCity}</td>
                                    <td>{item.toCity}</td>

                                    <td
                                        style={{
                                            fontWeight: "bold",
                                        }}
                                    >
                                        ₹ {item.amount}
                                    </td>

                                    <td>
                                        <span
                                            style={{
                                                background:
                                                    item.status === "Delivered"
                                                        ? "#22c55e"
                                                        : item.status === "In Transit"
                                                        ? "#f59e0b"
                                                        : item.status === "Out for Delivery"
                                                        ? "#8b5cf6"
                                                        : "#2563eb",

                                                color: "white",
                                                padding: "8px 16px",
                                                borderRadius: "20px",
                                                fontWeight: "bold",
                                                display: "inline-block",
                                            }}
                                        >
                                            {item.status}
                                        </span>
                                    </td>

                                    <td>
                                        <button
                                            onClick={() =>
                                                navigate(`/bookings/edit/${item.id}`)
                                            }
                                            style={{
                                                background: "#f59e0b",
                                                color: "white",
                                                border: "none",
                                                padding: "8px 15px",
                                                borderRadius: "8px",
                                                cursor: "pointer",
                                                marginRight: "8px",
                                            }}
                                        >
                                            ✏ Edit
                                        </button>

                                        <button
                                            onClick={() => deleteBooking(item.id)}
                                            style={{
                                                background: "#ef4444",
                                                color: "white",
                                                border: "none",
                                                padding: "8px 15px",
                                                borderRadius: "8px",
                                                cursor: "pointer",
                                                marginRight: "8px",
                                            }}
                                        >
                                            🗑 Delete
                                        </button>

                                        <button
                                            onClick={() => generatePDF(item)}
                                            style={{
                                                background: "#2563eb",
                                                color: "white",
                                                border: "none",
                                                padding: "8px 15px",
                                                borderRadius: "8px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            📄 PDF
                                        </button>
                                        <div
                                            style={{
                                                marginTop: "10px",
                                                background: "white",
                                                padding: "8px",
                                                borderRadius: "10px",
                                                display: "inline-block",
                                            }}
                                        >
                                            <QRCode
                                            value={`https://utkarsh-enterprises-frontend-production.up.railway.app/track?tracking=${item.trackingNumber}`}
                                            size={70}
                                            />
                                    </div>
                                    </td>
                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Bookings;