import DashboardChart from "../components/DashboardChart";
import BookingStatusChart from "../components/BookingStatusChart";
import StatCard from "../components/StatCard";

function Reports() {

    const revenue = "₹ 2,45,000";
    const bookings = 245;
    const customers = 82;
    const products = 36;

    return (
        <div
            style={{
                padding: "30px",
                background: "#f8fafc",
                minHeight: "100vh",
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
                    }}
                >
                    📊 Reports Dashboard
                </h1>

                <p
                    style={{
                        color: "#64748b",
                        marginTop: "8px",
                    }}
                >
                    View business reports and analytics.
                </p>
            </div>

            {/* Stat Cards */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "20px",
                    marginBottom: "30px",
                }}
            >
                <StatCard title="Revenue" value={revenue} />

                <StatCard title="Bookings" value={bookings} />

                <StatCard title="Customers" value={customers} />

                <StatCard title="Products" value={products} />
            </div>

            {/* Charts */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: "25px",
                    marginBottom: "30px",
                }}
            >
                <DashboardChart />

                <BookingStatusChart />
            </div>

            {/* Summary Card */}

            <div
                style={{
                    background: "white",
                    padding: "25px",
                    borderRadius: "18px",
                    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                }}
            >
                <h2
                    style={{
                        marginTop: 0,
                        color: "#0f172a",
                    }}
                >
                    📈 Business Summary
                </h2>

                <p>
                    Total Revenue Generated:
                    <strong> ₹ 2,45,000</strong>
                </p>

                <p>
                    Total Courier Bookings:
                    <strong> 245</strong>
                </p>

                <p>
                    Registered Customers:
                    <strong> 82</strong>
                </p>

                <p>
                    Available Products:
                    <strong> 36</strong>
                </p>

                <p>
                    Delivery Success Rate:
                    <strong> 97%</strong>
                </p>
                <button
                    style={{
                        marginTop: "20px",
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "15px",
                    }}
                    onClick={() => window.print()}
                >
                    📄 Download Report
                </button>
            </div>

            {/* Footer */}

            <div
                style={{
                    textAlign: "center",
                    marginTop: "30px",
                    color: "#64748b",
                    fontSize: "14px",
                }}
            >
                © {new Date().getFullYear()} Utkarsh Enterprises | Reports Dashboard
            </div>

        </div>
    );
}

export default Reports;