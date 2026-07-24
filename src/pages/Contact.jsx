import { useState } from "react";

function Contact() {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Thank you! Your message has been sent.");

        setContact({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div
            style={{
                maxWidth: "900px",
                margin: "40px auto",
                padding: "30px",
            }}
        >
            <h1 style={{ textAlign: "center", color: "#1e3a8a" }}>
                Contact Us
            </h1>

            <p
                style={{
                    textAlign: "center",
                    marginBottom: "40px",
                    color: "#555",
                }}
            >
                We'd love to hear from you. Contact Utkarsh Enterprises anytime.
            </p>

            <div
                style={{
                    display: "flex",
                    gap: "40px",
                    flexWrap: "wrap",
                }}
            >
                {/* Contact Information */}

                <div style={{ flex: 1, minWidth: "280px" }}>
                    <h2>Our Office</h2>

                    <p>📍 Ranchi, Jharkhand, India</p>

                    <p>📞 +91 7488017902</p>

                    <p>✉️ info@utkarshenterprises.com</p>

                    <p>🕒 Monday - Saturday</p>

                    <p>9:00 AM - 9:00 PM</p>
                </div>

                {/* Contact Form */}

                <form
                    onSubmit={handleSubmit}
                    style={{
                        flex: 1,
                        minWidth: "320px",
                    }}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={contact.name}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginBottom: "15px",
                        }}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginBottom: "15px",
                        }}
                    />

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        value={contact.message}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginBottom: "20px",
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            background: "#2563eb",
                            color: "white",
                            border: "none",
                            padding: "12px 25px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;