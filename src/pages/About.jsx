function About() {
    return (
        <div
            style={{
                maxWidth: "1000px",
                margin: "40px auto",
                padding: "30px",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "#1e3a8a",
                    marginBottom: "30px",
                }}
            >
                About Utkarsh Enterprises
            </h1>

            <p
                style={{
                    fontSize: "18px",
                    lineHeight: "32px",
                    color: "#444",
                    textAlign: "justify",
                }}
            >
                Utkarsh Enterprises is committed to providing reliable,
                secure, and fast courier and logistics services across India.
                We specialize in parcel delivery, express shipping, business
                logistics, and real-time parcel tracking. Our mission is to
                ensure every shipment reaches its destination safely and on
                time while maintaining complete transparency and customer
                satisfaction.
            </p>

            <div
                style={{
                    display: "flex",
                    gap: "30px",
                    marginTop: "40px",
                    flexWrap: "wrap",
                }}
            >
                <div
                    style={{
                        flex: 1,
                        minWidth: "250px",
                        background: "#f8fafc",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                >
                    <h2>🎯 Our Mission</h2>
                    <p>
                        To deliver every parcel safely, quickly, and
                        efficiently while building long-term trust with
                        our customers.
                    </p>
                </div>

                <div
                    style={{
                        flex: 1,
                        minWidth: "250px",
                        background: "#f8fafc",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                >
                    <h2>👁️ Our Vision</h2>
                    <p>
                        To become one of India's most trusted logistics
                        companies through innovation, technology, and
                        exceptional customer service.
                    </p>
                </div>

                <div
                    style={{
                        flex: 1,
                        minWidth: "250px",
                        background: "#f8fafc",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                >
                    <h2>⭐ Why Choose Us?</h2>
                    <ul>
                        <li>Fast Delivery</li>
                        <li>Secure Parcel Handling</li>
                        <li>Live Parcel Tracking</li>
                        <li>Affordable Pricing</li>
                        <li>24×7 Customer Support</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;