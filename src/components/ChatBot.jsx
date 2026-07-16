import { useState } from "react";

function ChatBot() {
    const [open, setOpen] = useState(false);

    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "👋 Welcome to Utkarsh Enterprises! How can I help you today?"
        }
    ]);

    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() === "") return;

        const userMessage = {
            sender: "user",
            text: input,
        };

        let reply = "Sorry, I didn't understand your question.";

        const text = input.toLowerCase();

        if (text.includes("tracking") || text.includes("track")) {
            reply = "📦 Please go to the Track Parcel page and enter your Tracking Number.";
        } else if (text.includes("booking")) {
            reply = "📋 You can create a booking from the Bookings section.";
        } else if (text.includes("product")) {
            reply = "📦 Products can be viewed and managed from the Products page.";
        } else if (text.includes("customer")) {
            reply = "👤 Customers can be added from the Customers section.";
        } else if (text.includes("contact")) {
            reply = "📞 Call us at +91 9386064051.";
        } else if (text.includes("branch")) {
            reply = "📍 Our office is located in Ranchi, Jharkhand.";
        } else if (text.includes("hello") || text.includes("hi")) {
            reply = "😊 Hello! Welcome to Utkarsh Enterprises.";
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
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    fontSize: "28px",
                    cursor: "pointer",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                    zIndex: 999999,
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
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        zIndex: 999999,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#2563eb",
                            color: "white",
                            padding: "15px",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        🤖 Utkarsh AI Assistant
                    </div>

                    <div
                        style={{
                            flex: 1,
                            padding: "10px",
                            overflowY: "auto",
                            backgroundColor: "#f5f5f5",
                        }}
                    >
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                style={{
                                    textAlign: msg.sender === "user" ? "right" : "left",
                                    marginBottom: "10px",
                                }}
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        padding: "8px 12px",
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
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    sendMessage();
                                }
                            }}
                            placeholder="Type your message..."
                            style={{
                                flex: 1,
                                padding: "10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
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