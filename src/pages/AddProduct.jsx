import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddProduct() {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        productName: "",
        category: "",
        price: "",
        stock: "",
        description: "",
    });

    const saveProduct = () => {
        api
            .post("/products/add", product)
            .then(() => {
                alert("Product Added Successfully!");
                navigate("/products");
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to add product!");
            });
    };

    return (
        <div
            style={{
                width: "400px",
                margin: "40px auto",
                textAlign: "center",
            }}
        >
            <h1>Add Product</h1>

            <input
                type="text"
                placeholder="Product Name"
                value={product.productName}
                onChange={(e) =>
                    setProduct({ ...product, productName: e.target.value })
                }
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                }}
            />

            <input
                type="text"
                placeholder="Category"
                value={product.category}
                onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                }
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                }}
            />

            <input
                type="number"
                placeholder="Price"
                value={product.price}
                onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                }
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                }}
            />

            <input
                type="number"
                placeholder="Stock"
                value={product.stock}
                onChange={(e) =>
                    setProduct({ ...product, stock: e.target.value })
                }
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                }}
            />

            <textarea
                placeholder="Description"
                value={product.description}
                onChange={(e) =>
                    setProduct({ ...product, description: e.target.value })
                }
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                }}
            />

            <button
                onClick={saveProduct}
                style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Save Product
            </button>
        </div>
    );
}

export default AddProduct;