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
    });

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        try {
            const response = await api.get(`/products/${id}`);
            console.log(response.data);
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
            alert("Product Updated Successfully!");
            navigate("/products");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ width: "400px", margin: "40px auto" }}>
            <h1>Edit Product</h1>

            <input
                type="text"
                name="productName"
                value={product.productName}
                onChange={handleChange}
                placeholder="Product Name"
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="text"
                name="category"
                value={product.category}
                onChange={handleChange}
                placeholder="Category"
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Price"
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                placeholder="Stock"
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Description"
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <button
                onClick={updateProduct}
                style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "orange",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Update Product
            </button>
        </div>
    );
}

export default EditProduct;