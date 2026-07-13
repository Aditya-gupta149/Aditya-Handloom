import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../services/api";
import { addToCart } from "../services/api";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);

        setProduct(data);

      } catch (error) {
        console.log(error);

      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <h1 className="text-center mt-10">
        Loading...
      </h1>
    );
  }

  const handleAddToCart = async () => {
  try {
    await addToCart(
      product._id,
      quantity
    );

    alert(
      "Product added to cart"
    );

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Failed to add to cart"
    );
  }
};

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg"
        />

        <div>

          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.category}
          </p>

          <p className="text-2xl font-bold mb-4">
            ₹{product.price}
          </p>

          <p className="mb-6">
            {product.description}
          </p>

          <p className="mb-4">
            Stock: {product.stock}
          </p>

          <select
            value={quantity}
            onChange={(e) =>
              setQuantity(
                Number(e.target.value)
              )
            }
            className="border p-2 rounded mb-4"
          >
            {[...Array(
              Math.min(product.stock, 10)
            ).keys()].map((x) => (
              <option
                key={x + 1}
                value={x + 1}
              >
                {x + 1}
              </option>
            ))}
          </select>

          <br />

 <button
  onClick={handleAddToCart}
  className="bg-black text-white px-6 py-3 rounded"
>
  Add to Cart
</button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;