function StatCard({ title, count, color }) {
    return (
        <div
            style={{
                backgroundColor: color,
                color: "white",
                width: "260px",
                padding: "30px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
        >
            <h1
                style={{
                    margin: 0,
                    fontSize: "42px",
                }}
            >
                {count}
            </h1>

            <h3
                style={{
                    marginTop: "15px",
                }}
            >
                {title}
            </h3>
        </div>
    );
}

export default StatCard;