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
        imageUrl: "",
    });

    const saveProduct = () => {

        api.post("/products/add", product)

            .then(() => {

                alert("✅ Product Added Successfully!");

                navigate("/products");

            })

            .catch((error) => {

                console.log(error);

                alert("❌ Failed to Add Product!");

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

            <div
                style={{
                    marginBottom: "30px",
                }}
            >

                <h1
                    style={{
                        margin: 0,
                        color: "#0f172a",
                    }}
                >
                    📦 Add Product
                </h1>

                <p
                    style={{
                        marginTop: "8px",
                        color: "#64748b",
                    }}
                >
                    Add a new product to the inventory.
                </p>

            </div>

            {/* Card */}

            <div
                style={{
                    maxWidth: "700px",
                    margin: "auto",
                    background: "white",
                    borderRadius: "20px",
                    padding: "35px",
                    boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                }}
            >

                <label><strong>Product Name</strong></label>

                <input
                    type="text"
                    placeholder="Enter Product Name"
                    value={product.productName}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            productName: e.target.value,
                        })
                    }
                    style={inputStyle}
                />

                <label><strong>Category</strong></label>

                <input
                    type="text"
                    placeholder="Enter Category"
                    value={product.category}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            category: e.target.value,
                        })
                    }
                    style={inputStyle}
                />

                <label><strong>Price</strong></label>

                <input
                    type="number"
                    placeholder="Enter Price"
                    value={product.price}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            price: e.target.value,
                        })
                    }
                    style={inputStyle}
                />

                <label><strong>Stock</strong></label>

                <input
                    type="number"
                    placeholder="Available Stock"
                    value={product.stock}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            stock: e.target.value,
                        })
                    }
                    style={inputStyle}
                />

                <label><strong>Description</strong></label>

                <textarea
                    rows="4"
                    placeholder="Product Description"
                    value={product.description}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            description: e.target.value,
                        })
                    }
                    style={{
                        ...inputStyle,
                        resize: "vertical",
                    }}
                />

                <label><strong>Image URL</strong></label>

                <input
                    type="text"
                    placeholder="Paste Image URL"
                    value={product.imageUrl}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            imageUrl: e.target.value,
                        })
                    }
                    style={inputStyle}
                />
                {/* Image Preview */}

                {product.imageUrl && (
                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "20px",
                            marginBottom: "25px",
                        }}
                    >
                        <p
                            style={{
                                color: "#475569",
                                fontWeight: "600",
                            }}
                        >
                            Image Preview
                        </p>

                        <img
                            src={product.imageUrl}
                            alt="Preview"
                            style={{
                                width: "180px",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "15px",
                                border: "2px solid #e2e8f0",
                                boxShadow: "0 8px 20px rgba(0,0,0,.1)",
                            }}
                            onError={(e) => {
                                e.target.style.display = "none";
                            }}
                        />
                    </div>
                )}

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "15px",
                        marginTop: "20px",
                    }}
                >
                    <button
                        onClick={() => navigate("/products")}
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
                        onClick={saveProduct}
                        style={{
                            flex: 1,
                            padding: "14px",
                            border: "none",
                            borderRadius: "10px",
                            background:
                                "linear-gradient(135deg,#2563eb,#1d4ed8)",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: "16px",
                            boxShadow: "0 8px 20px rgba(37,99,235,.3)",
                        }}
                    >
                        💾 Save Product
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

export default AddProduct;



