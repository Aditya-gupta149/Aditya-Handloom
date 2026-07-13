import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="border rounded-lg p-4 shadow hover:shadow-lg w-full">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />

        <h2 className="text-xl font-semibold mt-3">
          {product.name}
        </h2>

        <p className="text-gray-600">
          {product.category}
        </p>

        <p className="font-bold text-lg mt-2">
          ₹{product.price}
        </p>

      </div>
    </Link>
  );
}

export default ProductCard;