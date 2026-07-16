import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {

    const location = useLocation();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

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
                width: "260px",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                background:
                    "linear-gradient(180deg,#020617,#0f172a,#1e3a8a)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                padding: "25px 20px",
                boxSizing: "border-box",
                boxShadow: "6px 0 25px rgba(0,0,0,0.25)",
            }}
        >

            {/* Logo */}

            <div
                style={{
                    textAlign: "center",
                    marginBottom: "35px",
                }}
            >

                <img
                    src={logo}
                    alt="Logo"
                    style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "50%",
                        background: "white",
                        padding: "6px",
                        marginBottom: "15px",
                    }}
                />

                <h2
                    style={{
                        margin: 0,
                        fontSize: "28px",
                    }}
                >
                    Utkarsh
                </h2>

                <h2
                    style={{
                        margin: 0,
                        fontSize: "28px",
                    }}
                >
                    Enterprises
                </h2>

                <p
                    style={{
                        color: "#cbd5e1",
                        marginTop: "8px",
                    }}
                >
                    Courier Admin Panel
                </p>

            </div>

            {/* Menu */}

            <div style={{ flex: 1 }}>

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
                                padding: "15px 18px",
                                marginBottom: "15px",
                                borderRadius: "15px",
                                background:
                                    location.pathname === item.path
                                        ? "linear-gradient(135deg,#2563eb,#60a5fa)"
                                        : "rgba(255,255,255,0.08)",

                                color: "white",

                                fontWeight: "600",

                                fontSize: "17px",

                                transition: "0.3s",

                                boxShadow:
                                    location.pathname === item.path
                                        ? "0 10px 20px rgba(37,99,235,.4)"
                                        : "none",
                            }}
                        >
                            {item.icon} &nbsp; {item.name}
                        </div>

                    </Link>

                ))}

            </div>

            {/* Logout */}

            <button
                onClick={logout}
                style={{
                    padding: "15px",
                    background:
                        "linear-gradient(135deg,#ef4444,#dc2626)",
                    color: "white",
                    border: "none",
                    borderRadius: "15px",
                    cursor: "pointer",
                    fontSize: "17px",
                    fontWeight: "bold",
                    boxShadow: "0 8px 20px rgba(239,68,68,.4)",
                }}
            >
                🚪 Logout
            </button>

        </div>
    );
}

export default Sidebar;