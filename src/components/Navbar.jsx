import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "600",
        transition: "0.3s",
    };

    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                background: "linear-gradient(90deg,#0f172a,#1e3a8a)",
                backdropFilter: "blur(12px)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 40px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
            }}
        >

            {/* Logo */}

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                }}
            >
                <img
                    src={logo}
                    alt="Logo"
                    style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "12px",
                        background: "white",
                        padding: "5px",
                    }}
                />

                <div>

                    <h2
                        style={{
                            color: "white",
                            margin: 0,
                            fontSize: "28px",
                        }}
                    >
                        Utkarsh Enterprises
                    </h2>

                    <p
                        style={{
                            margin: 0,
                            color: "#cbd5e1",
                            fontSize: "13px",
                        }}
                    >
                        Courier & Logistics Solutions
                    </p>

                </div>

            </div>

            {/* Navigation */}

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                }}
            >

                <Link style={linkStyle} to="/">Home</Link>

                <Link style={linkStyle} to="/about">About</Link>

                <Link style={linkStyle} to="/dashboard">Dashboard</Link>

                <Link style={linkStyle} to="/products">Products</Link>

                <Link style={linkStyle} to="/customers">Customers</Link>

                <Link style={linkStyle} to="/bookings">Bookings</Link>

                <Link style={linkStyle} to="/track">
                    Track Parcel
                </Link>

                <Link style={linkStyle} to="/contact">
                    Contact
                </Link>

                <Link style={linkStyle} to="/profile">
                    Profile
                </Link>

                <button
                    onClick={logout}
                    style={{
                        background: "linear-gradient(135deg,#ef4444,#dc2626)",
                        color: "white",
                        border: "none",
                        padding: "10px 22px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        boxShadow: "0 5px 15px rgba(239,68,68,.4)",
                    }}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;