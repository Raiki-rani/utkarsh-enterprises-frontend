import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "admin123") {

            localStorage.setItem("isLoggedIn", "true");

            alert("Login Successful!");

            navigate("/dashboard");

        } else {

            alert("Invalid Username or Password");

        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "#111827",
            }}
        >
            <form
                onSubmit={handleLogin}
                style={{
                    width: "350px",
                    padding: "30px",
                    background: "#1f2937",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        color: "white",
                        marginBottom: "20px",
                    }}
                >
                    Admin Login
                </h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "15px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "20px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        background: "#22c55e",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;