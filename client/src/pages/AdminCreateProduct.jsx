import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createProduct, uploadImage, } from "../services/api";

function AdminCreateProduct() {
  const navigate = useNavigate();

  const [uploading, setUploading] =
  useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      image: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleImageUpload =
  async (e) => {

    const file =
      e.target.files[0];

    if (!file) {
      return;
    }

    try {

      setUploading(true);

      const data =
        await uploadImage(
          file
        );

      setFormData(
        {
          ...formData,
          image:
            data.image,
        }
      );

    } catch (error) {

      alert(
        "Image upload failed"
      );

    } finally {

      setUploading(
        false
      );
    }
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
     const data = await createProduct(formData);

console.log(data);

      alert(
        "Product created successfully"
      );

      navigate(
        "/admin/products"
      );

    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Failed to create product"
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        Create Product
      </h1>

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
          value={
            formData.description
          }
          onChange={
            handleChange
          }
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
          value={
            formData.category
          }
          onChange={
            handleChange
          }
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
  type="file"
  accept="image/*"
  onChange={
    handleImageUpload
  }
  className="w-full border p-2 rounded"
/>

{
  uploading && (
    <p>
      Uploading...
    </p>
  )
}

{
  formData.image && (
    <img
      src={formData.image}
      alt="Preview"
      className="w-40 h-40 object-cover rounded"
    />
  )
}

        <button className="bg-black text-white px-6 py-3 rounded">
          Create Product
        </button>

      </form>

    </div>
  );
}

export default AdminCreateProduct;