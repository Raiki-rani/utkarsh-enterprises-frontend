function Testimonials() {
    return (
        <div
            style={{
                padding: "60px 20px",
                background: "#f8fafc",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "#1e3a8a",
                    marginBottom: "40px",
                }}
            >
                What Our Customers Say
            </h1>

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
                        width: "300px",
                        background: "white",
                        padding: "25px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    }}
                >
                    <h3>⭐⭐⭐⭐⭐</h3>
                    <p>
                        "Excellent courier service. My parcel reached safely
                        before the expected date."
                    </p>
                    <h4>- Rahul Sharma</h4>
                </div>

                <div
                    style={{
                        width: "300px",
                        background: "white",
                        padding: "25px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    }}
                >
                    <h3>⭐⭐⭐⭐⭐</h3>
                    <p>
                        "Real-time tracking and fast delivery. Highly
                        recommended for business shipments."
                    </p>
                    <h4>- Priya Singh</h4>
                </div>

                <div
                    style={{
                        width: "300px",
                        background: "white",
                        padding: "25px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    }}
                >
                    <h3>⭐⭐⭐⭐⭐</h3>
                    <p>
                        "Professional staff and affordable pricing. Great
                        experience with Utkarsh Enterprises."
                    </p>
                    <h4>- Amit Kumar</h4>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;