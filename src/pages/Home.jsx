
import hero from "../assets/hero.png";
import Testimonials from "../components/Testimonials";

function Home() {
    return (
        <div
            style={{
                background: "#f8fafc",
                minHeight: "100vh",
                padding: "40px",
                fontFamily: "Arial",
            }}
        >
            {/* Hero Section */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "30px",
                }}
            >
                <div style={{ flex: 1, minWidth: "300px" }}>
                    <h1
                        style={{
                            fontSize: "50px",
                            color: "#0f172a",
                            marginBottom: "20px",
                        }}
                    >
                        Fast & Secure
                        <br />
                        Courier Services
                    </h1>

                    <p
                        style={{
                            fontSize: "20px",
                            color: "#555",
                            lineHeight: "32px",
                        }}
                    >
                        Welcome to Utkarsh Enterprises.
                        We provide safe, reliable and fast courier
                        services across India with real-time parcel
                        tracking and secure delivery.
                    </p>

                    <button
                        style={{
                            marginTop: "25px",
                            padding: "12px 25px",
                            background: "#2563eb",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "18px",
                        }}
                    >
                        Book Courier
                    </button>
                </div>

                <div style={{ flex: 1, textAlign: "center" }}>
                    <img
                        src={hero}
                        alt="Courier"
                        style={{
                            width: "100%",
                            maxWidth: "600px",
                            borderRadius: "20px",
                        }}
                    />
                </div>
            </div>

            {/* Services */}

            <div style={{ marginTop: "80px" }}>
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "38px",
                        marginBottom: "40px",
                        color: "#1e293b",
                    }}
                >
                    Our Services
                </h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "30px",
                        flexWrap: "wrap",
                    }}
                >
                    <div
                        style={{
                            width: "280px",
                            background: "white",
                            padding: "25px",
                            borderRadius: "15px",
                            boxShadow: "0 0 12px rgba(0,0,0,0.15)",
                            textAlign: "center",
                        }}
                    >
                        <h2>📦</h2>
                        <h3>Parcel Delivery</h3>
                        <p>
                            Fast and secure parcel delivery across India.
                        </p>
                    </div>

                    <div
                        style={{
                            width: "280px",
                            background: "white",
                            padding: "25px",
                            borderRadius: "15px",
                            boxShadow: "0 0 12px rgba(0,0,0,0.15)",
                            textAlign: "center",
                        }}
                    >
                        <h2>🚚</h2>
                        <h3>Express Delivery</h3>
                        <p>
                            Same-day and next-day express delivery services.
                        </p>
                    </div>

                    <div
                        style={{
                            width: "280px",
                            background: "white",
                            padding: "25px",
                            borderRadius: "15px",
                            boxShadow: "0 0 12px rgba(0,0,0,0.15)",
                            textAlign: "center",
                        }}
                    >
                        <h2>🌍</h2>
                        <h3>Nationwide Network</h3>
                        <p>
                            Delivering parcels safely to thousands of locations.
                        </p>
                    </div>
                </div>
            </div>

            {/* Statistics */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "60px",
                    flexWrap: "wrap",
                    marginTop: "80px",
                    textAlign: "center",
                }}
            >
                <div>
                    <h1 style={{ color: "#2563eb" }}>10,000+</h1>
                    <p>Parcels Delivered</p>
                </div>

                <div>
                    <h1 style={{ color: "#2563eb" }}>500+</h1>
                    <p>Happy Customers</p>
                </div>

                <div>
                    <h1 style={{ color: "#2563eb" }}>50+</h1>
                    <p>Cities Covered</p>
                </div>

                <div>
                    <h1 style={{ color: "#2563eb" }}>24×7</h1>
                    <p>Customer Support</p>
                </div>
            </div>
            <Testimonials />
        </div>
    );
}

export default Home;