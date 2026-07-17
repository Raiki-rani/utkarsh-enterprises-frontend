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
            .catch((error) => console.log(error));
    };

    const deleteCustomer = (id) => {
        if (window.confirm("Are you sure you want to delete this customer?")) {
            api.delete(`/customers/delete/${id}`)
                .then(() => {
                    alert("Customer Deleted Successfully!");
                    loadCustomers();
                })
                .catch((error) => console.log(error));
        }
    };

    const filteredCustomers = customers.filter((item) =>
        item.customerName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            style={{
                padding: "30px",
                background: "#f8fafc",
                minHeight: "100vh",
            }}
        >
            {/* Header */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "25px",
                    flexWrap: "wrap",
                    gap: "15px",
                }}
            >
                <div>
                    <h1
                        style={{
                            margin: 0,
                            color: "#0f172a",
                        }}
                    >
                        👥 Customers
                    </h1>

                    <p
                        style={{
                            color: "#64748b",
                            marginTop: "8px",
                        }}
                    >
                        Manage all customer records.
                    </p>
                </div>

                <Link to="/customers/add">
                    <button
                        style={{
                            background: "#2563eb",
                            color: "white",
                            border: "none",
                            padding: "12px 24px",
                            borderRadius: "12px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "15px",
                        }}
                    >
                        ➕ Add Customer
                    </button>
                </Link>
            </div>

            {/* Search */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                    flexWrap: "wrap",
                    gap: "15px",
                }}
            >
                <input
                    type="text"
                    placeholder="🔍 Search Customer..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        width: "320px",
                        padding: "12px",
                        borderRadius: "10px",
                        border: "1px solid #cbd5e1",
                        fontSize: "15px",
                    }}
                />

                <span
                    style={{
                        background: "#2563eb",
                        color: "white",
                        padding: "10px 18px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                    }}
                >
                    Total: {filteredCustomers.length}
                </span>
            </div>

            {/* Table */}

            <div
                style={{
                    background: "white",
                    borderRadius: "18px",
                    overflowX: "auto",
                    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                }}
            >
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                background: "#0f172a",
                                color: "white",
                            }}
                        >
                            <th style={{ padding: "15px" }}>ID</th>
                            <th>Customer</th>
                            <th>Company</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>GST</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredCustomers.map((item, index) => (
                            <tr
                                key={item.id}
                                style={{
                                    background:
                                        index % 2 === 0
                                            ? "#f8fafc"
                                            : "#ffffff",
                                }}
                            >
                                <td style={{ padding: "15px" }}>{item.id}</td>
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
                                            background: "#f59e0b",
                                            color: "white",
                                            border: "none",
                                            padding: "8px 15px",
                                            borderRadius: "8px",
                                            marginRight: "8px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        ✏ Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            deleteCustomer(item.id)
                                        }
                                        style={{
                                            background: "#ef4444",
                                            color: "white",
                                            border: "none",
                                            padding: "8px 15px",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        🗑 Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {filteredCustomers.length === 0 && (
                            <tr>
                                <td
                                    colSpan="8"
                                    style={{
                                        padding: "30px",
                                        textAlign: "center",
                                        color: "#64748b",
                                        fontWeight: "bold",
                                    }}
                                >
                                    No Customers Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Customers;