import logo from "../assets/logo.png";

function Profile() {
    return (
        <div
            style={{
                maxWidth: "700px",
                margin: "40px auto",
                padding: "30px",
                background: "#ffffff",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                textAlign: "center",
            }}
        >
            <img
                src={logo}
                alt="Utkarsh Enterprises"
                style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    marginBottom: "20px",
                }}
            />

            <h1 style={{ color: "#2563eb" }}>
                Utkarsh Enterprises
            </h1>

            <h3>Administrator Profile</h3>

            <hr />

            <p><strong>Company:</strong> Utkarsh Enterprises</p>

            <p><strong>Owner:</strong> Nitu Kumari</p>

            <p><strong>Location:</strong> Ranchi, Jharkhand</p>

            <p><strong>Phone:</strong> +91 7488017902</p>

            <p><strong>Email:</strong> utkarshenterprises@gmail.com</p>

            <p><strong>Business:</strong> Courier & Logistics Services</p>

            <p><strong>Working Hours:</strong> Monday - Saturday (9 AM - 9 PM)</p>
        </div>
    );
}

export default Profile;