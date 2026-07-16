import { useEffect, useState } from "react";
import api from "../services/api";

import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/StatCard";
import DashboardChart from "../components/DashboardChart";
import BookingStatusCard from "../components/BookingStatusCard";
import BookingStatusChart from "../components/BookingStatusChart";
import RecentBookings from "../components/RecentBookings";

function Dashboard() {
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

            setRecentBookings(
                bookings.data.slice(-5).reverse()
            );

            const list = bookings.data;

            setBooked(
                list.filter((item) => item.status === "Booked").length
            );

            setInTransit(
                list.filter((item) => item.status === "In Transit").length
            );

            setOutForDelivery(
                list.filter((item) => item.status === "Out for Delivery").length
            );

            setDelivered(
                list.filter((item) => item.status === "Delivered").length
            );

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DashboardLayout>

            <div
                style={{
                    background:
                        "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
                    color: "white",
                    borderRadius: "20px",
                    padding: "35px",
                    marginBottom: "35px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                }}
            >
                <h1
                    style={{
                        margin: 0,
                        fontSize: "38px",
                    }}
                >
                    🚚 Utkarsh Enterprises
                </h1>

                <h2
                    style={{
                        marginTop: "10px",
                        fontWeight: "normal",
                    }}
                >
                    Courier Management Dashboard
                </h2>

                <p
                    style={{
                        opacity: 0.9,
                        marginTop: "10px",
                    }}
                >
                    Welcome back! Here's today's business overview.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "25px",
                    marginBottom: "40px",
                }}
            >
                <StatCard
                    title="Products"
                    count={productCount}
                    color="linear-gradient(135deg,#2563eb,#60a5fa)"
                />

                <StatCard
                    title="Customers"
                    count={customerCount}
                    color="linear-gradient(135deg,#16a34a,#4ade80)"
                />

                <StatCard
                    title="Bookings"
                    count={bookingCount}
                    color="linear-gradient(135deg,#ea580c,#fb923c)"
                />
            </div>

            <DashboardChart
                products={productCount}
                customers={customerCount}
                bookings={bookingCount}
            />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "1fr 1fr",
                    gap: "25px",
                    marginTop: "40px",
                }}
            >
                <BookingStatusCard
                    booked={booked}
                    inTransit={inTransit}
                    outForDelivery={outForDelivery}
                    delivered={delivered}
                />

                <BookingStatusChart
                    booked={booked}
                    inTransit={inTransit}
                    outForDelivery={outForDelivery}
                    delivered={delivered}
                />
            </div>

            <RecentBookings
                bookings={recentBookings}
            />

        </DashboardLayout>
    );
}

export default Dashboard;