function Footer() {
    return (
        <footer
            style={{
                background: "#0f172a",
                color: "white",
                padding: "40px",
                marginTop: "80px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    gap: "30px",
                }}
            >
                <div>
                    <h2>Utkarsh Enterprises</h2>
                    <p>Fast • Secure • Reliable Courier Services</p>
                </div>

                <div>
                    <h3>Contact</h3>
                    <p>📞 +91 9386064051</p>
                    <p>📍 Ranchi, Jharkhand</p>
                </div>

                <div>
                    <h3>Services</h3>
                    <p>Parcel Delivery</p>
                    <p>Express Courier</p>
                    <p>Live Parcel Tracking</p>
                </div>
            </div>

            <hr style={{ margin: "30px 0", borderColor: "#334155" }} />

            <p style={{ textAlign: "center" }}>
                © 2026 Utkarsh Enterprises. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;