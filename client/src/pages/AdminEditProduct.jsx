import { useEffect, useState } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  getProductById,
  updateProduct,
} from "../services/api";

function AdminEditProduct() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      image: "",
    });

    useEffect(() => {

  const fetchProduct =
    async () => {

      try {

        const data =
          await getProductById(id);

        setFormData({
          name: data.name,
          description:
            data.description,
          price: data.price,
          category:
            data.category,
          stock: data.stock,
          image: data.image,
        });

      } catch (error) {

        console.log(error);
      }
    };

  fetchProduct();

}, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      await updateProduct(
        id,
        formData
      );

      alert(
        "Product updated successfully"
      );

      navigate(
        "/admin/products"
      );

    } catch (error) {

      alert(
        error.response?.data
          ?.message ||
          "Failed to update product"
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        Edit Product
      </h1>

      {/* <p className="mb-6">
        Product ID: {id}
      </p> */}

      <form
  onSubmit={handleSubmit}
  className="space-y-4"
>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button className="bg-black text-white px-6 py-3 rounded">
          Update Product
        </button>

      </form>

    </div>
  );
}

export default AdminEditProduct;