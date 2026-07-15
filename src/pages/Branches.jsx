function Branches() {
    return (
        <div
            style={{
                padding: "40px",
                background: "#f8fafc",
                minHeight: "100vh",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "#1e3a8a",
                    marginBottom: "40px",
                    fontSize: "40px",
                }}
            >
                Our Branch
            </h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        width: "450px",
                        background: "white",
                        padding: "30px",
                        borderRadius: "15px",
                        boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                        textAlign: "center",
                    }}
                >
                    <h2
                        style={{
                            color: "#2563eb",
                            marginBottom: "20px",
                        }}
                    >
                        📍 Ranchi Branch
                    </h2>

                    <p
                        style={{
                            fontSize: "18px",
                            marginBottom: "15px",
                        }}
                    >
                        <strong>Address:</strong><br />
                        Ranchi, Jharkhand, India
                    </p>

                    <p
                        style={{
                            fontSize: "18px",
                            marginBottom: "15px",
                        }}
                    >
                        <strong>Phone:</strong><br />
                        +91 9386064051
                    </p>

                    <p
                        style={{
                            fontSize: "18px",
                            marginBottom: "15px",
                        }}
                    >
                        <strong>Email:</strong><br />
                        utkarshenterprises@gmail.com
                    </p>

                    <p
                        style={{
                            fontSize: "18px",
                            marginBottom: "15px",
                        }}
                    >
                        <strong>Working Days:</strong><br />
                        Monday – Saturday
                    </p>

                    <p
                        style={{
                            fontSize: "18px",
                        }}
                    >
                        <strong>Working Hours:</strong><br />
                        9:00 AM – 7:00 PM
                    </p>
                </div>
            </div>
            <div
                style={{
                    marginTop: "40px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <iframe
                    title="Utkarsh Enterprises Location"
                    src="https://www.google.com/maps?q=Ranchi,Jharkhand&output=embed"
                    width="100%"
                    height="400"
                    style={{
                        border: "0",
                        maxWidth: "900px",
                        borderRadius: "15px",
                    }}
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

export default Branches;