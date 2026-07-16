function StatusBox({ title, value, color, icon }) {
    return (
        <div
            style={{
                flex: "1",
                minWidth: "220px",
                background: `linear-gradient(135deg, ${color}, #0f172a)`,
                color: "white",
                padding: "25px",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                transition: "0.3s",
                cursor: "pointer",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
            }}
        >
            <div
                style={{
                    fontSize: "42px",
                    marginBottom: "15px",
                }}
            >
                {icon}
            </div>

            <h3
                style={{
                    margin: 0,
                    fontWeight: "500",
                }}
            >
                {title}
            </h3>

            <h1
                style={{
                    marginTop: "15px",
                    fontSize: "42px",
                }}
            >
                {value}
            </h1>
        </div>
    );
}

function BookingStatusCard({
                               booked,
                               inTransit,
                               outForDelivery,
                               delivered,
                           }) {
    return (
        <div
            style={{
                width: "95%",
                margin: "35px auto",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    color: "#0f172a",
                    marginBottom: "25px",
                    fontSize: "28px",
                }}
            >
                📦 Booking Status Overview
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                <StatusBox
                    title="Booked"
                    value={booked}
                    color="#2563eb"
                    icon="📋"
                />

                <StatusBox
                    title="In Transit"
                    value={inTransit}
                    color="#f97316"
                    icon="🚚"
                />

                <StatusBox
                    title="Out For Delivery"
                    value={outForDelivery}
                    color="#9333ea"
                    icon="📦"
                />

                <StatusBox
                    title="Delivered"
                    value={delivered}
                    color="#16a34a"
                    icon="✅"
                />
            </div>
        </div>
    );
}

export default BookingStatusCard;