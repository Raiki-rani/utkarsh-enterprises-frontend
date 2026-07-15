import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

function Sidebar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    return (
        <div
            style={{
                width: "250px",
                minHeight: "100vh",
                background: "#0f172a",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "fixed",
                left: 0,
                top: 0,
            }}
        >
            <div>

                <div
                    style={{
                        textAlign: "center",
                        padding: "25px",
                        borderBottom: "1px solid #334155",
                    }}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            width: "80px",
                            height: "80px",
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

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px",
                        gap: "12px",
                    }}
                >
                    <Link style={linkStyle} to="/dashboard">📊 Dashboard</Link>

                    <Link style={linkStyle} to="/products">📦 Products</Link>

                    <Link style={linkStyle} to="/customers">👥 Customers</Link>

                    <Link style={linkStyle} to="/bookings">📋 Bookings</Link>

                    <Link style={linkStyle} to="/track">🚚 Track Parcel</Link>

                    <Link style={linkStyle} to="/profile">👤 Profile</Link>
                </div>

            </div>

            <div style={{ padding: "20px" }}>
                <button
                    onClick={logout}
                    style={{
                        width: "100%",
                        padding: "12px",
                        background: "#dc2626",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    Logout
                </button>
            </div>

        </div>
    );
}

const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "12px",
    background: "#1e293b",
    borderRadius: "8px",
};

export default Sidebar;