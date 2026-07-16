function RecentBookings({ bookings }) {

    const getStatusStyle = (status) => {

        switch (status) {

            case "Booked":
                return {
                    background: "#2563eb",
                    color: "white",
                };

            case "In Transit":
                return {
                    background: "#f97316",
                    color: "white",
                };

            case "Out for Delivery":
                return {
                    background: "#9333ea",
                    color: "white",
                };

            case "Delivered":
                return {
                    background: "#16a34a",
                    color: "white",
                };

            default:
                return {
                    background: "#64748b",
                    color: "white",
                };
        }
    };

    return (

        <div
            style={{
                width: "96%",
                margin: "40px auto",
                background: "#ffffff",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
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
                🚚 Recent Bookings
            </h2>

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

                    <th style={{ padding: "15px" }}>Tracking No.</th>
                    <th style={{ padding: "15px" }}>Sender</th>
                    <th style={{ padding: "15px" }}>Receiver</th>
                    <th style={{ padding: "15px" }}>From</th>
                    <th style={{ padding: "15px" }}>To</th>
                    <th style={{ padding: "15px" }}>Status</th>

                </tr>

                </thead>

                <tbody>

                {bookings.length === 0 ? (

                    <tr>

                        <td
                            colSpan="6"
                            style={{
                                textAlign: "center",
                                padding: "30px",
                                color: "#64748b",
                                fontWeight: "bold",
                            }}
                        >
                            No Recent Bookings
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
                                transition: "0.3s",
                            }}
                        >

                            <td
                                style={{
                                    padding: "15px",
                                    fontWeight: "bold",
                                    color: "#2563eb",
                                }}
                            >
                                {item.trackingNumber}
                            </td>

                            <td style={{ padding: "15px" }}>
                                {item.senderName}
                            </td>

                            <td style={{ padding: "15px" }}>
                                {item.receiverName}
                            </td>

                            <td style={{ padding: "15px" }}>
                                {item.fromCity}
                            </td>

                            <td style={{ padding: "15px" }}>
                                {item.toCity}
                            </td>

                            <td style={{ padding: "15px" }}>

                                <span
                                    style={{
                                        ...getStatusStyle(item.status),
                                        padding: "8px 16px",
                                        borderRadius: "20px",
                                        fontWeight: "bold",
                                        fontSize: "14px",
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

    );
}

export default RecentBookings;