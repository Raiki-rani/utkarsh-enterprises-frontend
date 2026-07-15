import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Products() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = () => {
        api.get("/products/all")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteProduct = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            api.delete(`/products/delete/${id}`)
                .then(() => {
                    alert("Product Deleted Successfully!");
                    loadProducts();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>

            <h1>Products</h1>

            <Link to="/products/add">
                <button
                    style={{
                        background: "green",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        cursor: "pointer",
                        marginBottom: "20px",
                        borderRadius: "5px",
                    }}
                >
                    Add Product
                </button>
            </Link>

            <br />

            <input
                type="text"
                placeholder="Search Product..."
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
                    margin: "auto",
                    width: "90%",
                    borderCollapse: "collapse",
                }}
            >
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {products
                    .filter((item) =>
                        item.productName
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.productName}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>

                            <td>
                                <button
                                    onClick={() =>
                                        navigate(`/products/edit/${item.id}`)
                                    }
                                    style={{
                                        background: "orange",
                                        color: "white",
                                        border: "none",
                                        padding: "6px 12px",
                                        cursor: "pointer",
                                        borderRadius: "5px",
                                        marginRight: "10px",
                                    }}
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => deleteProduct(item.id)}
                                    style={{
                                        background: "red",
                                        color: "white",
                                        border: "none",
                                        padding: "6px 12px",
                                        cursor: "pointer",
                                        borderRadius: "5px",
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

export default Products;