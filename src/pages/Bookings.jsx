import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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

        doc.setFontSize(20);
        doc.text("Utkarsh Enterprises", 60, 20);

        doc.setFontSize(14);
        doc.text("Booking Receipt", 72, 30);

        autoTable(doc, {
            startY: 40,
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
        <div style={{ textAlign: "center", marginTop: "40px" }}>

            <h1>Bookings</h1>

            <input
                type="text"
                placeholder="Search by Tracking Number"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: "300px",
                    padding: "10px",
                    marginBottom: "20px",
                }}
            />

            <br />

            <Link to="/bookings/add">
                <button
                    style={{
                        background: "green",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginBottom: "20px",
                    }}
                >
                    Add Booking
                </button>
            </Link>

            <table
                border="1"
                cellPadding="10"
                style={{
                    width: "98%",
                    margin: "auto",
                    borderCollapse: "collapse",
                }}
            >
                <thead>
                <tr>
                    <th>ID</th>
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

                {filteredBookings.map((item) => (

                    <tr key={item.id}>

                        <td>{item.id}</td>
                        <td>{item.trackingNumber}</td>
                        <td>{item.senderName}</td>
                        <td>{item.receiverName}</td>
                        <td>{item.fromCity}</td>
                        <td>{item.toCity}</td>
                        <td>₹ {item.amount}</td>
                        <td>{item.status}</td>

                        <td>

                            <button
                                onClick={() =>
                                    navigate(`/bookings/edit/${item.id}`)
                                }
                                style={{
                                    background: "orange",
                                    color: "white",
                                    border: "none",
                                    padding: "6px 12px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => deleteBooking(item.id)}
                                style={{
                                    background: "red",
                                    color: "white",
                                    border: "none",
                                    padding: "6px 12px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Delete
                            </button>

                            <button
                                onClick={() => generatePDF(item)}
                                style={{
                                    background: "blue",
                                    color: "white",
                                    border: "none",
                                    padding: "6px 12px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                PDF
                            </button>

                        </td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>
    );
}

export default Bookings;