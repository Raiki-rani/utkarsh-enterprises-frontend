import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    const menu = [
        { name: "Dashboard", path: "/dashboard", icon: "📊" },
        { name: "Products", path: "/products", icon: "📦" },
        { name: "Customers", path: "/customers", icon: "👥" },
        { name: "Bookings", path: "/bookings", icon: "🚚" },
        { name: "Track Parcel", path: "/track", icon: "📍" },
        { name: "Profile", path: "/profile", icon: "👤" },
    ];

    return (
        <div
            style={{
                width: "250px",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                background: "linear-gradient(180deg,#0f172a,#1e3a8a)",
                color: "white",
                padding: "25px 20px",
                boxSizing: "border-box",
                boxShadow: "5px 0 20px rgba(0,0,0,0.2)",
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "35px",
                }}
            >
                <img
                    src="/logo.png"
                    alt="Logo"
                    style={{
                        width: "70px",
                        borderRadius: "50%",
                        marginBottom: "10px",
                    }}
                />

                <h2 style={{ margin: 0 }}>
                    Utkarsh Enterprises
                </h2>

                <p style={{ color: "#cbd5e1" }}>
                    Admin Panel
                </p>
            </div>

            {menu.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <div
                        style={{
                            padding: "14px",
                            marginBottom: "12px",
                            borderRadius: "12px",
                            background:
                                location.pathname === item.path
                                    ? "#2563eb"
                                    : "transparent",
                            color: "white",
                            transition: "0.3s",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        {item.icon} {item.name}
                    </div>
                </Link>
            ))}

            <button
                style={{
                    width: "100%",
                    marginTop: "30px",
                    padding: "12px",
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Sidebar;