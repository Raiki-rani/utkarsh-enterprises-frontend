import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Customers() {

    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = () => {
        api.get("/customers/all")
            .then((response) => {
                setCustomers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteCustomer = (id) => {
        if (window.confirm("Are you sure you want to delete this customer?")) {
            api.delete(`/customers/delete/${id}`)
                .then(() => {
                    alert("Customer Deleted Successfully!");
                    loadCustomers();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>

            <h1>Customers</h1>

            <Link to="/customers/add">
                <button
                    style={{
                        background: "green",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginBottom: "20px",
                    }}
                >
                    Add Customer
                </button>
            </Link>

            <br />

            <input
                type="text"
                placeholder="Search Customer..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: "300px",
                    padding: "10px",
                    marginBottom: "20px",
                    borderRadius: "5px",
                }}
            />

            <table
                border="1"
                cellPadding="10"
                style={{
                    width: "95%",
                    margin: "auto",
                    borderCollapse: "collapse",
                }}
            >
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Customer Name</th>
                    <th>Company</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>GST Number</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {customers
                    .filter((item) =>
                        item.customerName
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.customerName}</td>
                            <td>{item.companyName}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.gstNumber}</td>

                            <td>
                                <button
                                    onClick={() =>
                                        navigate(`/customers/edit/${item.id}`)
                                    }
                                    style={{
                                        background: "orange",
                                        color: "white",
                                        border: "none",
                                        padding: "6px 12px",
                                        marginRight: "10px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => deleteCustomer(item.id)}
                                    style={{
                                        background: "red",
                                        color: "white",
                                        border: "none",
                                        padding: "6px 12px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Customers;