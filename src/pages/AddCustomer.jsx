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
                alert("Customer Added Successfully!");
                navigate("/customers");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div style={{ width: "450px", margin: "40px auto" }}>
            <h1>Add Customer</h1>

            <input
                type="text"
                name="customerName"
                placeholder="Customer Name"
                value={customer.customerName}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={customer.companyName}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={customer.phone}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={customer.email}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <textarea
                name="address"
                placeholder="Address"
                value={customer.address}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="text"
                name="gstNumber"
                placeholder="GST Number"
                value={customer.gstNumber}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
            />

            <button
                onClick={saveCustomer}
                style={{
                    width: "100%",
                    padding: "12px",
                    background: "green",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px",
                }}
            >
                Save Customer
            </button>
        </div>
    );
}

export default AddCustomer;