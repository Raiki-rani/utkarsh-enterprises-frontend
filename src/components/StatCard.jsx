function StatCard({ title, count, color }) {

    const getIcon = () => {
        switch (title) {
            case "Products":
                return "📦";
            case "Customers":
                return "👥";
            case "Bookings":
                return "🚚";
            case "Delivered":
                return "✅";
            default:
                return "📊";
        }
    };

    return (
        <div
            style={{
                background: `linear-gradient(135deg, ${color}, #0f172a)`,
                color: "white",
                borderRadius: "22px",
                padding: "28px",
                minHeight: "190px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                    "0 25px 45px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(0,0,0,0.25)";
            }}
        >
            {/* Decorative Circles */}

            <div
                style={{
                    position: "absolute",
                    top: "-50px",
                    right: "-40px",
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.10)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    bottom: "-30px",
                    left: "-30px",
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                }}
            />

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <h3
                        style={{
                            margin: 0,
                            fontSize: "18px",
                            fontWeight: "600",
                        }}
                    >
                        {title}
                    </h3>

                    <p
                        style={{
                            margin: "6px 0 0",
                            opacity: 0.8,
                            fontSize: "14px",
                        }}
                    >
                        Total Records
                    </p>
                </div>

                <div
                    style={{
                        fontSize: "42px",
                    }}
                >
                    {getIcon()}
                </div>
            </div>

            <div
                style={{
                    fontSize: "56px",
                    fontWeight: "bold",
                    marginTop: "20px",
                }}
            >
                {count}
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "15px",
                    fontSize: "14px",
                }}
            >
                <span>📈 Live Data</span>

                <span
                    style={{
                        background: "rgba(255,255,255,0.15)",
                        padding: "6px 12px",
                        borderRadius: "20px",
                    }}
                >
                    Updated
                </span>
            </div>

        </div>
    );
}

export default StatCard;