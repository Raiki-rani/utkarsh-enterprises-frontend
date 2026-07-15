import logo from "../assets/logo.png";


import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    return (
        <nav
            style={{
                background: "#1e293b",
                padding: "15px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                    src={logo}
                    alt="Logo"
                    style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "8px"
                    }}
                />

                <h2 style={{ color: "white", margin: 0 }}>
                    Utkarsh Enterprises
                </h2>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                }}
            >
                <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/about">About</Link>

                <Link style={{ color: "white", textDecoration: "none" }} to="/dashboard">Dashboard</Link>

                <Link style={{ color: "white", textDecoration: "none" }} to="/products">Products</Link>

                <Link style={{ color: "white", textDecoration: "none" }} to="/customers">Customers</Link>

                <Link style={{ color: "white", textDecoration: "none" }} to="/bookings">Bookings</Link>

                <Link style={{ color: "white", textDecoration: "none" }} to="/track">Track Parcel</Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/contact">Contact</Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/profile">Profile</Link>

                <button
                    onClick={logout}
                    style={{
                        background: "crimson",
                        color: "white",
                        border: "none",
                        padding: "8px 15px",
                        cursor: "pointer",
                        borderRadius: "5px",
                    }}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;