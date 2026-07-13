import { useEffect, useState } from "react";

import { getProducts } from "../services/api";

import ProductCard from "../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

const [category, setCategory] = useState("");

const [sort, setSort] = useState("");

const [page, setPage] = useState(1);

const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await getProducts(
        search,
        category,
        sort,
        page
      );

      setProducts(data.products);

      setTotalPages(data.totalPages);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  fetchProducts();

}, [search, category, sort, page]);

  if (loading) {
    return (
      <h1 className="text-center mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Shop
      </h1>

      <div className="flex flex-wrap gap-4 mb-8">

  <input
    type="text"
    placeholder="Search products..."
    value={search}
   onChange={(e) => {
  setSearch(e.target.value);
  setPage(1);
}}
    className="border p-2 rounded"
  />

  <select
    value={category}
   onChange={(e) => {
  setCategory(e.target.value);
  setPage(1);
}}
    className="border p-2 rounded"
  >
    <option value="">
      All Categories
    </option>

    <option value="Men">Men</option>

    <option value="Women">Women</option>

    <option value="Kids">Kids</option>

    <option value="Shirts">Shirts</option>

    <option value="T-Shirts">
      T-Shirts
    </option>

    <option value="Jeans">
      Jeans
    </option>

    <option value="Ethnic">
      Ethnic
    </option>

  </select>

  <select
    value={sort}
   onChange={(e) => {
  setSort(e.target.value);
  setPage(1);
}}
    className="border p-2 rounded"
  >
    <option value=""> 
      Sort By
    </option>

    <option value="lowToHigh">
      Price: Low → High
    </option>

    <option value="highToLow">
      Price: High → Low
    </option>

    <option value="newest">
      Newest
    </option>

  </select>

</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}

      </div>

      <div className="flex justify-center gap-4 mt-10">

  <button
    disabled={page === 1}
    onClick={() =>
      setPage(page - 1)
    }
    className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
  >
    Previous
  </button>

  <span className="text-lg">
    Page {page} of {totalPages}
  </span>

  <button
    disabled={page === totalPages}
    onClick={() =>
      setPage(page + 1)
    }
    className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
  >
    Next
  </button>

</div>

    </div>
  );
}

export default Shop;