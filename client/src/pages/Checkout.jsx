import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { placeOrder } from "../services/api";

import { loadStripe } from "@stripe/stripe-js";

import {
  createCheckoutSession,
} from "../services/api";

function Checkout() {

    const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      fullName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const order = await placeOrder({
      shippingAddress: formData,
      paymentMethod: "Card",
    });

    const stripe = await loadStripe(
      import.meta.env.VITE_STRIPE_PUBLIC_KEY
    );

   const session =
  await createCheckoutSession(
    order.orderItems,
    order._id
  );

    window.location.href = session.url;

  } catch (error) {
  console.log(error);

  alert(
    error.response?.data?.message ||
    error.message
  );
}
};

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

     <form
  onSubmit={handleSubmit}
  className="space-y-4"
>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={
            formData.fullName
          }
          onChange={
            handleChange
          }
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={
            formData.phone
          }
          onChange={
            handleChange
          }
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={
            formData.address
          }
          onChange={
            handleChange
          }
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={
            formData.city
          }
          onChange={
            handleChange
          }
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={
            formData.state
          }
          onChange={
            handleChange
          }
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={
            formData.pincode
          }
          onChange={
            handleChange
          }
          className="w-full border p-2 rounded"
        />

        <button
          className="bg-black text-white px-6 py-3 rounded"
        >
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;