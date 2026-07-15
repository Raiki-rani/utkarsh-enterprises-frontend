function RecentBookings({ bookings }) {

    const getStatusColor = (status) => {
        switch (status) {
            case "Delivered":
                return "green";
            case "In Transit":
                return "orange";
            case "Booked":
                return "blue";
            case "Pending":
                return "red";
            default:
                return "gray";
        }
    };

    return (
        <div
            style={{
                marginTop: "50px",
                width: "95%",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                }}
            >
                Recent Bookings
            </h2>

            <table
                border="1"
                cellPadding="12"
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    backgroundColor: "white",
                }}
            >
                <thead
                    style={{
                        backgroundColor: "#1f2937",
                        color: "white",
                    }}
                >
                <tr>
                    <th>Tracking No.</th>
                    <th>Sender</th>
                    <th>Receiver</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>
                {bookings.length === 0 ? (
                    <tr>
                        <td
                            colSpan="6"
                            style={{
                                textAlign: "center",
                                padding: "20px",
                            }}
                        >
                            No Bookings Available
                        </td>
                    </tr>
                ) : (
                    bookings.map((item) => (
                        <tr key={item.id}>
                            <td>{item.trackingNumber}</td>
                            <td>{item.senderName}</td>
                            <td>{item.receiverName}</td>
                            <td>{item.fromCity}</td>
                            <td>{item.toCity}</td>

                            <td>
                                    <span
                                        style={{
                                            backgroundColor: getStatusColor(item.status),
                                            color: "white",
                                            padding: "6px 12px",
                                            borderRadius: "20px",
                                            fontWeight: "bold",
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