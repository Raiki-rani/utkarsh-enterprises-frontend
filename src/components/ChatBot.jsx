import { useState } from "react";

function ChatBot() {
    const [open, setOpen] = useState(false);

    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "👋 Welcome to Utkarsh Enterprises! How can I help you today?",
        },
    ]);

    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() === "") return;

        const userMessage = {
            sender: "user",
            text: input,
        };

        const text = input.toLowerCase();

        let reply =
            "❓ Sorry, I didn't understand that. Please ask about tracking, booking, products, customers, contact, office timings, delivery, or courier charges.";

        if (
            text.includes("hi") ||
            text.includes("hello") ||
            text.includes("hey")
        ) {
            reply =
                "👋 Hello! Welcome to Utkarsh Enterprises. How can I help you today?";
        } else if (text.includes("how are you")) {
            reply =
                "😊 I'm doing great! Thank you for asking. How can I help you today?";
        } else if (
            text.includes("tracking") ||
            text.includes("track")
        ) {
            reply =
                "📦 Please open the Track Parcel page and enter your Tracking Number.";
        } else if (text.includes("booking")) {
            reply =
                "🚚 You can create a new booking from the Bookings section.";
        } else if (text.includes("product")) {
            reply =
                "📦 You can view all courier services from the Products page.";
        } else if (text.includes("customer")) {
            reply =
                "👤 Customer information can be managed from the Customers section.";
        } else if (
            text.includes("contact") ||
            text.includes("phone") ||
            text.includes("mobile")
        ) {
            reply = "📞 Contact us at +91 9386064051.";
        } else if (
            text.includes("address") ||
            text.includes("location") ||
            text.includes("branch") ||
            text.includes("office")
        ) {
            reply = "📍 Our office is located in Ranchi, Jharkhand.";
        } else if (
            text.includes("time") ||
            text.includes("timing") ||
            text.includes("hours")
        ) {
            reply =
                "🕘 Our office is open Monday to Saturday, 9:00 AM to 7:00 PM.";
        } else if (text.includes("delivery")) {
            reply =
                "🚚 Delivery usually takes 2–5 business days depending on the destination.";
        } else if (
            text.includes("price") ||
            text.includes("charge") ||
            text.includes("cost")
        ) {
            reply =
                "💰 Courier charges depend on parcel weight and destination. Please contact our office for the exact quotation.";
        } else if (
            text.includes("thank") ||
            text.includes("thanks")
        ) {
            reply =
                "🙏 You're welcome! Thank you for choosing Utkarsh Enterprises.";
        }

        const botMessage = {
            sender: "bot",
            text: reply,
        };

        setMessages([...messages, userMessage, botMessage]);
        setInput("");
    };

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    width: "65px",
                    height: "65px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "#2563eb",
                    color: "white",
                    fontSize: "28px",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    zIndex: 9999,
                }}
            >
                💬
            </button>

            {open && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "95px",
                        right: "20px",
                        width: "340px",
                        height: "430px",
                        background: "#fff",
                        borderRadius: "12px",
                        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        zIndex: 9999,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#2563eb",
                            color: "white",
                            padding: "15px",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        🤖 Utkarsh AI Assistant
                    </div>

                    <div
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "10px",
                            background: "#f5f5f5",
                        }}
                    >
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                style={{
                                    textAlign:
                                        msg.sender === "user"
                                            ? "right"
                                            : "left",
                                    marginBottom: "10px",
                                }}
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        padding: "10px",
                                        borderRadius: "10px",
                                        backgroundColor:
                                            msg.sender === "user"
                                                ? "#2563eb"
                                                : "#e5e7eb",
                                        color:
                                            msg.sender === "user"
                                                ? "white"
                                                : "black",
                                    }}
                                >
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            display: "flex",
                            padding: "10px",
                            borderTop: "1px solid #ddd",
                        }}
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) =>
                                setInput(e.target.value)
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    sendMessage();
                                }
                            }}
                            placeholder="Type your message..."
                            style={{
                                flex: 1,
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />

                        <button
                            onClick={sendMessage}
                            style={{
                                marginLeft: "8px",
                                padding: "10px 15px",
                                backgroundColor: "#2563eb",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ChatBot;