function RecentBookings({ bookings }) {

    const getStatusStyle = (status) => {
        switch (status) {
            case "Booked":
                return { background: "#2563eb", color: "white" };

            case "In Transit":
                return { background: "#f59e0b", color: "white" };

            case "Out for Delivery":
                return { background: "#8b5cf6", color: "white" };

            case "Delivered":
                return { background: "#22c55e", color: "white" };

            default:
                return { background: "#64748b", color: "white" };
        }
    };

    return (
        <div
            style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 12px 30px rgba(0,0,0,.08)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "25px",
                }}
            >
                <div>
                    <h2
                        style={{
                            margin: 0,
                            color: "#0f172a",
                        }}
                    >
                        🚚 Recent Bookings
                    </h2>

                    <p
                        style={{
                            color: "#64748b",
                            marginTop: "8px",
                        }}
                    >
                        Latest parcel bookings in your system.
                    </p>
                </div>

                <span
                    style={{
                        background: "#2563eb",
                        color: "white",
                        padding: "8px 18px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                    }}
                >
                    {bookings.length} Records
                </span>
            </div>

            <div style={{ overflowX: "auto" }}>
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                background: "#0f172a",
                                color: "white",
                            }}
                        >
                            <th style={{ padding: "16px" }}>Tracking No.</th>
                            <th style={{ padding: "16px" }}>Sender</th>
                            <th style={{ padding: "16px" }}>Receiver</th>
                            <th style={{ padding: "16px" }}>From</th>
                            <th style={{ padding: "16px" }}>To</th>
                            <th style={{ padding: "16px" }}>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookings.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="6"
                                    style={{
                                        textAlign: "center",
                                        padding: "35px",
                                        color: "#64748b",
                                        fontWeight: "bold",
                                    }}
                                >
                                    No Recent Bookings Found
                                </td>
                            </tr>
                        ) : (
                            bookings.map((item, index) => (
                                <tr
                                    key={item.id}
                                    style={{
                                        background:
                                            index % 2 === 0
                                                ? "#f8fafc"
                                                : "#ffffff",
                                        borderBottom:
                                            "1px solid #e5e7eb",
                                    }}
                                >
                                    <td
                                        style={{
                                            padding: "16px",
                                            color: "#2563eb",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item.trackingNumber}
                                    </td>

                                    <td style={{ padding: "16px" }}>
                                        {item.senderName}
                                    </td>

                                    <td style={{ padding: "16px" }}>
                                        {item.receiverName}
                                    </td>

                                    <td style={{ padding: "16px" }}>
                                        {item.fromCity}
                                    </td>

                                    <td style={{ padding: "16px" }}>
                                        {item.toCity}
                                    </td>

                                    <td style={{ padding: "16px" }}>
                                        <span
                                            style={{
                                                ...getStatusStyle(item.status),
                                                padding: "8px 18px",
                                                borderRadius: "25px",
                                                fontWeight: "bold",
                                                display: "inline-block",
                                                minWidth: "130px",
                                                textAlign: "center",
                                            }}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RecentBookings;  