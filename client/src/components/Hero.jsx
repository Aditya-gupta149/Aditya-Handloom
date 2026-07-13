import { useNavigate } from "react-router-dom";

function Hero() {

    const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white py-24 text-center">
      <h1 className="text-5xl font-bold">
        Welcome to Aditya Handloom
      </h1>

      <p className="mt-4 text-lg text-gray-300">
  Premium handloom collection for every occasion.
</p>

      <button
    onClick={() => navigate("/shop")}
    className="mt-6 bg-white text-black px-6 py-3 rounded"
>
    Shop Now
</button>
    </div>
  );
}

export default Hero;