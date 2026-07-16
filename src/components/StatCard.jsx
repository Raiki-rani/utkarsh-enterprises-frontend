function StatCard({ title, count, color }) {
    return (
        <div
            style={{
                width: "280px",
                minHeight: "170px",
                background: `linear-gradient(135deg, ${color}, #0f172a)`,
                color: "white",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(0,0,0,0.25)";
            }}
        >
            {/* Decorative Circle */}
            <div
                style={{
                    position: "absolute",
                    top: "-45px",
                    right: "-45px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                }}
            />

            <div
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                }}
            >
                {title}
            </div>

            <div
                style={{
                    fontSize: "58px",
                    fontWeight: "bold",
                    marginTop: "15px",
                }}
            >
                {count}
            </div>

            <div
                style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    opacity: "0.9",
                }}
            >
                Updated Live
            </div>
        </div>
    );
}

export default StatCard;