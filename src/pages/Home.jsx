import hero from "../assets/hero.png";
import Testimonials from "../components/Testimonials";

function Home() {
    return (
        <div
            style={{
                background: "#f4f7fc",
                minHeight: "100vh",
                padding: "40px",
                fontFamily: "Arial, sans-serif",
            }}
        >

            {/* Hero Section */}

            <div
                style={{
                    background:
                        "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
                    borderRadius: "25px",
                    padding: "60px",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "40px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                }}
            >

                <div
                    style={{
                        flex: 1,
                        minWidth: "320px",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "58px",
                            lineHeight: "1.2",
                            marginBottom: "20px",
                        }}
                    >
                        🚚 Fast, Secure &
                        <br />
                        Reliable Courier
                        <br />
                        Services
                    </h1>

                    <p
                        style={{
                            fontSize: "20px",
                            color: "#e2e8f0",
                            lineHeight: "34px",
                        }}
                    >
                        Deliver your parcels safely across India with
                        real-time tracking, affordable pricing and
                        guaranteed on-time delivery.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            marginTop: "35px",
                            flexWrap: "wrap",
                        }}
                    >
                        <button
                            style={{
                                padding: "15px 35px",
                                background: "#f97316",
                                color: "white",
                                border: "none",
                                borderRadius: "10px",
                                fontSize: "18px",
                                fontWeight: "bold",
                                cursor: "pointer",
                            }}
                        >
                            📦 Book Courier
                        </button>

                        <button
                            style={{
                                padding: "15px 35px",
                                background: "transparent",
                                color: "white",
                                border: "2px solid white",
                                borderRadius: "10px",
                                fontSize: "18px",
                                cursor: "pointer",
                            }}
                        >
                            📍 Track Parcel
                        </button>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: "40px",
                            marginTop: "45px",
                            flexWrap: "wrap",
                        }}
                    >
                        <div>
                            <h2>10K+</h2>
                            <p>Deliveries</p>
                        </div>

                        <div>
                            <h2>500+</h2>
                            <p>Customers</p>
                        </div>

                        <div>
                            <h2>50+</h2>
                            <p>Cities</p>
                        </div>
                    </div>

                </div>

                <div
                    style={{
                        flex: 1,
                        textAlign: "center",
                    }}
                >
                    <img
                        src={hero}
                        alt="Courier"
                        style={{
                            width: "100%",
                            maxWidth: "550px",
                            borderRadius: "20px",
                        }}
                    />
                </div>

            </div>

            {/* Services */}

            <div
                style={{
                    marginTop: "80px",
                }}
            >

                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "40px",
                        color: "#0f172a",
                    }}
                >
                    Our Services
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit,minmax(260px,1fr))",
                        gap: "30px",
                        marginTop: "40px",
                    }}
                >

                    <div
                        style={{
                            background: "white",
                            padding: "30px",
                            borderRadius: "18px",
                            textAlign: "center",
                            boxShadow:
                                "0 10px 25px rgba(0,0,0,0.12)",
                        }}
                    >
                        <h1>📦</h1>
                        <h3>Parcel Delivery</h3>
                        <p>
                            Secure parcel delivery across India.
                        </p>
                    </div>

                    <div
                        style={{
                            background: "white",
                            padding: "30px",
                            borderRadius: "18px",
                            textAlign: "center",
                            boxShadow:
                                "0 10px 25px rgba(0,0,0,0.12)",
                        }}
                    >
                        <h1>🚚</h1>
                        <h3>Express Delivery</h3>
                        <p>
                            Same day and next day delivery services.
                        </p>
                    </div>

                    <div
                        style={{
                            background: "white",
                            padding: "30px",
                            borderRadius: "18px",
                            textAlign: "center",
                            boxShadow:
                                "0 10px 25px rgba(0,0,0,0.12)",
                        }}
                    >
                        <h1>📍</h1>
                        <h3>Live Tracking</h3>
                        <p>
                            Track your parcel in real-time.
                        </p>
                    </div>

                    <div
                        style={{
                            background: "white",
                            padding: "30px",
                            borderRadius: "18px",
                            textAlign: "center",
                            boxShadow:
                                "0 10px 25px rgba(0,0,0,0.12)",
                        }}
                    >
                        <h1>🌍</h1>
                        <h3>Nationwide Network</h3>
                        <p>
                            Delivery services in more than 50 cities.
                        </p>
                    </div>

                </div>

            </div>

            {/* Statistics */}

            <div
                style={{
                    marginTop: "90px",
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "25px",
                }}
            >

                {[
                    ["10,000+", "Parcels Delivered"],
                    ["500+", "Happy Customers"],
                    ["50+", "Cities Covered"],
                    ["24×7", "Customer Support"],
                ].map((item, index) => (

                    <div
                        key={index}
                        style={{
                            background: "#2563eb",
                            color: "white",
                            padding: "35px",
                            borderRadius: "20px",
                            textAlign: "center",
                            boxShadow:
                                "0 10px 20px rgba(37,99,235,.3)",
                        }}
                    >
                        <h1>{item[0]}</h1>
                        <h3>{item[1]}</h3>
                    </div>

                ))}

            </div>

            {/* Why Choose Us */}

            <div
                style={{
                    marginTop: "90px",
                    background: "white",
                    padding: "50px",
                    borderRadius: "20px",
                    boxShadow: "0 10px 25px rgba(0,0,0,.1)",
                }}
            >

                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "40px",
                        color: "#0f172a",
                    }}
                >
                    Why Choose Us?
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit,minmax(250px,1fr))",
                        gap: "30px",
                        marginTop: "40px",
                    }}
                >

                    <div>✅ Fast Delivery</div>

                    <div>🔒 Secure Packaging</div>

                    <div>📍 Real-Time Tracking</div>

                    <div>💰 Affordable Pricing</div>

                    <div>🤝 Trusted Service</div>

                    <div>☎ 24×7 Customer Support</div>

                </div>

            </div>

            {/* Testimonials */}

            <div style={{ marginTop: "90px" }}>
                <Testimonials />
            </div>

        </div>
    );
}

export default Home;