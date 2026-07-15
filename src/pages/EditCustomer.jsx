import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditCustomer() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        customerName: "",
        companyName: "",
        phone: "",
        email: "",
        address: "",
        gstNumber: "",
    });

    useEffect(() => {
        api.get(`/customers/${id}`)
            .then((response) => {
                setCustomer(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };

    const updateCustomer = () => {
        api.put(`/customers/update/${id}`, customer)
            .then(() => {
                alert("Customer Updated Successfully!");
                navigate("/customers");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div style={{ width: "450px", margin: "40px auto" }}>

            <h1>Edit Customer</h1>

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
                onClick={updateCustomer}
                style={{
                    width: "100%",
                    padding: "12px",
                    background: "orange",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Update Customer
            </button>

        </div>
    );
}

export default EditCustomer;