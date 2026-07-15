function BookingStatusCard({
                               booked,
                               inTransit,
                               outForDelivery,
                               delivered,
                           }) {
    return (
        <div
            style={{
                width: "90%",
                margin: "30px auto",
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                }}
            >
                Booking Status Overview
            </h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                }}
            >
                <tbody>

                <tr>
                    <td style={{ padding: "12px" }}>
                        🔵 Booked
                    </td>
                    <td
                        style={{
                            padding: "12px",
                            textAlign: "right",
                            fontWeight: "bold",
                        }}
                    >
                        {booked}
                    </td>
                </tr>

                <tr>
                    <td style={{ padding: "12px" }}>
                        🟠 In Transit
                    </td>
                    <td
                        style={{
                            padding: "12px",
                            textAlign: "right",
                            fontWeight: "bold",
                        }}
                    >
                        {inTransit}
                    </td>
                </tr>

                <tr>
                    <td style={{ padding: "12px" }}>
                        🟣 Out for Delivery
                    </td>
                    <td
                        style={{
                            padding: "12px",
                            textAlign: "right",
                            fontWeight: "bold",
                        }}
                    >
                        {outForDelivery}
                    </td>
                </tr>

                <tr>
                    <td style={{ padding: "12px" }}>
                        🟢 Delivered
                    </td>
                    <td
                        style={{
                            padding: "12px",
                            textAlign: "right",
                            fontWeight: "bold",
                        }}
                    >
                        {delivered}
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    );
}

export default BookingStatusCard;