import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddCustomer() {

    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        customerName: "",
        companyName: "",
        phone: "",
        email: "",
        address: "",
        gstNumber: "",
    });

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };

    const saveCustomer = () => {

        api.post("/customers/add", customer)

            .then(() => {

                alert("✅ Customer Added Successfully!");

                navigate("/customers");

            })

            .catch((error) => {

                console.log(error);

                alert("❌ Failed to Add Customer!");

            });

    };

    return (

        <div
            style={{
                background: "#f8fafc",
                minHeight: "100vh",
                padding: "40px",
            }}
        >

            {/* Header */}

            <div style={{ marginBottom: "30px" }}>

                <h1
                    style={{
                        margin: 0,
                        color: "#0f172a",
                    }}
                >
                    👤 Add Customer
                </h1>

                <p
                    style={{
                        color: "#64748b",
                        marginTop: "8px",
                    }}
                >
                    Register a new customer for courier services.
                </p>

            </div>

            {/* Card */}

            <div
                style={{
                    maxWidth: "700px",
                    margin: "auto",
                    background: "white",
                    padding: "35px",
                    borderRadius: "20px",
                    boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                }}
            >

                <label><strong>Customer Name</strong></label>

                <input
                    type="text"
                    name="customerName"
                    placeholder="Enter Customer Name"
                    value={customer.customerName}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>Company Name</strong></label>

                <input
                    type="text"
                    name="companyName"
                    placeholder="Enter Company Name"
                    value={customer.companyName}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>Phone Number</strong></label>

                <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={customer.phone}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>Email Address</strong></label>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    value={customer.email}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <label><strong>Address</strong></label>

                <textarea
                    rows="4"
                    name="address"
                    placeholder="Enter Customer Address"
                    value={customer.address}
                    onChange={handleChange}
                    style={{
                        ...inputStyle,
                        resize: "vertical",
                    }}
                />

                <label><strong>GST Number</strong></label>

                <input
                    type="text"
                    name="gstNumber"
                    placeholder="Enter GST Number"
                    value={customer.gstNumber}
                    onChange={handleChange}
                    style={inputStyle}
                />
                {/* Buttons */}

                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        marginTop: "25px",
                    }}
                >
                    <button
                        onClick={() => navigate("/customers")}
                        style={{
                            flex: 1,
                            padding: "14px",
                            border: "none",
                            borderRadius: "10px",
                            background: "#64748b",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        onClick={saveCustomer}
                        style={{
                            flex: 1,
                            padding: "14px",
                            border: "none",
                            borderRadius: "10px",
                            background:
                                "linear-gradient(135deg,#16a34a,#15803d)",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: "16px",
                            boxShadow: "0 8px 20px rgba(22,163,74,.3)",
                        }}
                    >
                        💾 Save Customer
                    </button>
                </div>

            </div>

        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "14px",
    marginTop: "8px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    outline: "none",
    fontSize: "15px",
    boxSizing: "border-box",
    transition: "0.3s",
};

export default AddCustomer;