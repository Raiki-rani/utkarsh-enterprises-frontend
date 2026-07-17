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
                background: "linear-gradient(90deg,#020617,#1e3a8a)",
                boxShadow: "0 8px 25px rgba(0,0,0,.25)",
                padding: "15px 40px",
            }}
        >

            {/* Top Section */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                    }}
                >

                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            width: "65px",
                            height: "65px",
                            borderRadius: "12px",
                            background: "white",
                            padding: "5px",
                        }}
                    />

                    <div>

                        <h2
                            style={{
                                margin: 0,
                                color: "white",
                                fontSize: "30px",
                            }}
                        >
                            Utkarsh Enterprises
                        </h2>

                        <p
                            style={{
                                margin: 0,
                                color: "#cbd5e1",
                                fontSize: "14px",
                            }}
                        >
                            Total Courier & Logistics Solutions
                        </p>

                    </div>

                </div>

                <button
                    onClick={logout}
                    style={{
                        background: "linear-gradient(135deg,#ef4444,#dc2626)",
                        color: "white",
                        border: "none",
                        padding: "10px 24px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "15px",
                    }}
                >
                    Logout
                </button>

            </div>

            {/* Navigation */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "35px",
                    marginTop: "18px",
                    flexWrap: "wrap",
                }}
            >

                <Link style={linkStyle} to="/">
                    Home
                </Link>

                <Link style={linkStyle} to="/about">
                    About
                </Link>

                <Link style={linkStyle} to="/dashboard">
                    Dashboard
                </Link>

                <Link style={linkStyle} to="/products">
                    Products
                </Link>

                <Link style={linkStyle} to="/customers">
                    Customers
                </Link>

                <Link style={linkStyle} to="/bookings">
                    Bookings
                </Link>

                <Link style={linkStyle} to="/reports">
                    Reports
                </Link>

                <Link style={linkStyle} to="/track">
                    Track Consignment
                </Link>

                <Link style={linkStyle} to="/contact">
                    Contact
                </Link>

                <Link style={linkStyle} to="/profile">
                    Profile
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;