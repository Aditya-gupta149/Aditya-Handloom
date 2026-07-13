import {
  useEffect,
  useState,
} from "react";

import {
  getAllProducts,
  deleteProduct,
} from "../services/api";

import { Link } from "react-router-dom";

function AdminProducts() {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchProducts =
    async () => {

      try {

        const data =
          await getAllProducts();

        setProducts(
          data.products
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete product?"
        );

      if (
        !confirmDelete
      ) {
        return;
      }

      try {

        await deleteProduct(
          id
        );

        fetchProducts();

      } catch (error) {

        console.log(error);
      }
    };

  if (loading) {
    return (
      <h1 className="text-center mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Manage Products
      </h1>

      <Link
  to="/admin/products/create"
  className="bg-black text-white px-4 py-2 rounded inline-block mb-6"
>
  Create Product
</Link>

      <table className="w-full border">

        <thead>

          <tr className="border-b">

            <th>Name</th>

            <th>Price</th>

            <th>Stock</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {products.map(
            (product) => (
              <tr
                key={
                  product._id
                }
                className="border-b text-center"
              >

                <td>
                  {
                    product.name
                  }
                </td>

                <td>
                  ₹
                  {
                    product.price
                  }
                </td>

                <td>
                  {
                    product.stock
                  }
                </td>

 <td className="space-x-2">

  <Link
    to={`/admin/products/${product._id}/edit`}
    className="bg-blue-500 text-white px-3 py-1 rounded"
  >
    Edit
  </Link>

  <button
    onClick={() =>
      handleDelete(product._id)
    }
    className="bg-red-500 text-white px-3 py-1 rounded"
  >
    Delete
  </button>

</td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default AdminProducts;