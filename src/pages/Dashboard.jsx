import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/StatCard";
import DashboardChart from "../components/DashboardChart";
import BookingStatusCard from "../components/BookingStatusCard";
import BookingStatusChart from "../components/BookingStatusChart";
import RecentBookings from "../components/RecentBookings";

function Dashboard() {
    const navigate = useNavigate();

    const [productCount, setProductCount] = useState(0);
    const [customerCount, setCustomerCount] = useState(0);
    const [bookingCount, setBookingCount] = useState(0);

    const [recentBookings, setRecentBookings] = useState([]);

    const [booked, setBooked] = useState(0);
    const [inTransit, setInTransit] = useState(0);
    const [outForDelivery, setOutForDelivery] = useState(0);
    const [delivered, setDelivered] = useState(0);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const products = await api.get("/products/all");
            const customers = await api.get("/customers/all");
            const bookings = await api.get("/bookings/all");

            setProductCount(products.data.length);
            setCustomerCount(customers.data.length);
            setBookingCount(bookings.data.length);

            setRecentBookings(bookings.data.slice(-5).reverse());

            const bookingList = bookings.data;

            setBooked(
                bookingList.filter((item) => item.status === "Booked").length
            );

            setInTransit(
                bookingList.filter((item) => item.status === "In Transit").length
            );

            setOutForDelivery(
                bookingList.filter(
                    (item) => item.status === "Out for Delivery"
                ).length
            );

            setDelivered(
                bookingList.filter(
                    (item) => item.status === "Delivered"
                ).length
            );

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DashboardLayout>

            {/* Hero Section */}

            <div
                style={{
                    background:
                        "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
                    color: "white",
                    borderRadius: "20px",
                    padding: "40px",
                    marginBottom: "35px",
                    boxShadow: "0 12px 30px rgba(0,0,0,.25)",
                    textAlign: "center",
                }}
            >
                <h1 style={{ margin: 0, fontSize: "40px" }}>
                    🚚 Utkarsh Enterprises
                </h1>

                <h2
                    style={{
                        marginTop: "12px",
                        fontWeight: "500",
                    }}
                >
                    Courier Management Dashboard
                </h2>

                <p
                    style={{
                        marginTop: "18px",
                        fontSize: "19px",
                        opacity: "0.9",
                    }}
                >
                    Welcome back! Here's today's business overview.
                </p>

            </div>

            {/* Statistics */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "25px",
                    marginBottom: "35px",
                }}
            >
                <StatCard
                    title="Products"
                    count={productCount}
                    color="#2563eb"
                />

                <StatCard
                    title="Customers"
                    count={customerCount}
                    color="#16a34a"
                />

                <StatCard
                    title="Bookings"
                    count={bookingCount}
                    color="#ea580c"
                />

                <StatCard
                    title="Delivered"
                    count={delivered}
                    color="#7c3aed"
                />

            </div>

            {/* Quick Actions */}

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "35px",
                    flexWrap: "wrap",
                }}
            >
                <button
                    onClick={() => navigate("/bookings")}
                    style={buttonStyle}
                >
                    ➕ Add Booking
                </button>

                <button
                    onClick={() => navigate("/customers")}
                    style={buttonStyle}
                >
                    👤 Add Customer
                </button>

                <button
                    onClick={() => navigate("/products")}
                    style={buttonStyle}
                >
                    📦 Add Product
                </button>

            </div>

            {/* Dashboard Chart */}

            <div style={cardStyle}>
                <DashboardChart
                    products={productCount}
                    customers={customerCount}
                    bookings={bookingCount}
                />
            </div>

            {/* Booking Status */}

            <div style={cardStyle}>
                <BookingStatusCard
                    booked={booked}
                    inTransit={inTransit}
                    outForDelivery={outForDelivery}
                    delivered={delivered}
                />
            </div>

            {/* Status Chart */}

            <div style={cardStyle}>
                <BookingStatusChart
                    booked={booked}
                    inTransit={inTransit}
                    outForDelivery={outForDelivery}
                    delivered={delivered}
                />
            </div>

            {/* Recent Bookings */}

            <div style={cardStyle}>
                <RecentBookings bookings={recentBookings} />
            </div>

        </DashboardLayout>
    );
}

const cardStyle = {
    background: "white",
    borderRadius: "18px",
    padding: "25px",
    marginBottom: "30px",
    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
};

const buttonStyle = {
    padding: "14px 28px",
    background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(37,99,235,.3)",
};

export default Dashboard;