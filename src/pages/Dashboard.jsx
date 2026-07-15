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

            const bookingList = bookings.data;

            setBooked(
                bookingList.filter(item => item.status === "Booked").length
            );

            setInTransit(
                bookingList.filter(item => item.status === "In Transit").length
            );

            setOutForDelivery(
                bookingList.filter(item => item.status === "Out for Delivery").length
            );

            setDelivered(
                bookingList.filter(item => item.status === "Delivered").length
            );

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DashboardLayout>

            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "35px",
                    color: "#1e293b",
                }}
            >
                📊 Utkarsh Enterprises Dashboard
            </h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "25px",
                    flexWrap: "wrap",
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