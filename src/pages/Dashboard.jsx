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
                bookingList.filter((item) => item.status === "Delivered").length
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
                    textAlign: "center",
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
                        marginTop: "20px",
                        fontSize: "20px",
                        opacity: "0.9",
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
            </div>

            <DashboardChart
                products={productCount}
                customers={customerCount}
                bookings={bookingCount}
            />

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

            <RecentBookings bookings={recentBookings} />
        </DashboardLayout>
    );
}

export default Dashboard;