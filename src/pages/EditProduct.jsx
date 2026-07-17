import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditProduct() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        id: "",
        productName: "",
        category: "",
        price: "",
        stock: "",
        description: "",
        imageUrl: "",
    });

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {

        try {

            const response = await api.get(`/products/${id}`);

            setProduct(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });

    };

    const updateProduct = async () => {

        try {

            await api.put(`/products/update/${id}`, product);

            alert("✅ Product Updated Successfully!");

            navigate("/products");

        } catch (error) {

            console.log(error);

            alert("❌ Failed to Update Product!");

        }

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
                    ✏️ Edit Product
                </h1>

                <p
                    style={{
                        color: "#64748b",
                        marginTop: "8px",
                    }}
                >
                    Update your product details.
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

                <label><strong>Product Name</strong></label>

                <input
                    type="text"
                    name="productName"
                    value={product.productName}
                    onChange={handleChange}
                    placeholder="Enter Product Name"
                    style={inputStyle}
                />

                <label><strong>Category</strong></label>

                <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    placeholder="Enter Category"
                    style={inputStyle}
                />

                <label><strong>Price</strong></label>

                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Enter Price"
                    style={inputStyle}
                />

                <label><strong>Stock</strong></label>

                <input
                    type="number"
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                    placeholder="Available Stock"
                    style={inputStyle}
                />

                <label><strong>Description</strong></label>

                <textarea
                    rows="4"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Product Description"
                    style={{
                        ...inputStyle,
                        resize: "vertical",
                    }}
                />

                <label><strong>Image URL</strong></label>

                <input
                    type="text"
                    name="imageUrl"
                    value={product.imageUrl}
                    onChange={handleChange}
                    placeholder="Paste Image URL"
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
                            alt="Product"
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

                {/* Buttons */}

                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        marginTop: "25px",
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
                        onClick={updateProduct}
                        style={{
                            flex: 1,
                            padding: "14px",
                            border: "none",
                            borderRadius: "10px",
                            background:
                                "linear-gradient(135deg,#f59e0b,#d97706)",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: "16px",
                            boxShadow: "0 8px 20px rgba(245,158,11,.3)",
                        }}
                    >
                        ✏️ Update Product
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

export default EditProduct;