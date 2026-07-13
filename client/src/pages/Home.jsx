import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

import sareeImg from "../assets/saree.jpg";
import kurtaImg from "../assets/kurta.jpg";
import traditionalImg from "../assets/traditional.jpg";

function Home() {

  const [products, setProducts] = useState([]);

useEffect(() => {
    const fetchProducts = async () => {
        try {
            const data = await getProducts();
            console.log(data);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    fetchProducts();
}, []);


  return (
 <>
  <Hero />

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 px-10">

   <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition duration-300">
  <img
    src={sareeImg}
    alt="Sarees"
    className="w-full h-64 object-cover"
  />

  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <h3 className="text-white text-2xl font-bold">
      Sarees
    </h3>
  </div>
</div>

<div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition duration-300">
  <img
    src={kurtaImg}
    alt="Kurtas"
    className="w-full h-64 object-cover"
  />

  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <h3 className="text-white text-2xl font-bold">
      Kurtas
    </h3>
  </div>
</div>

<div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition duration-300">
  <img
    src={traditionalImg}
    alt="Traditional Wear"
    className="w-full h-64 object-cover"
  />

  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <h3 className="text-white text-2xl font-bold">
      Traditional Wear
    </h3>
  </div>
</div>

  </div>

  <h2 className="text-4xl font-bold text-center mt-16">
    Featured Products
  </h2>

  <p className="text-center text-gray-500 mt-2">
    Explore our latest collection
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-10">
    {products.map((product) => (
      <ProductCard
        key={product._id}
        product={product}
      />
    ))}
  </div>

</>
  );
}

export default Home;