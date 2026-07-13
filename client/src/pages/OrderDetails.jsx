import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  getOrderById,
} from "../services/api";

function OrderDetails() {
  const { id } = useParams();

  const [order, setOrder] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchOrder =
      async () => {
        try {

          const data =
            await getOrderById(id);

          setOrder(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <h1 className="text-center mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Order Details
      </h1>

      <div className="border rounded p-6">

        <p>
          <strong>
            Order ID:
          </strong>
          {" "}
          {order._id}
        </p>

       <p>

  <strong>
    Status:
  </strong>

  <span
    className={
      order.orderStatus ===
      "Delivered"

        ? "text-green-600"

        : order.orderStatus ===
          "Shipped"

        ? "text-blue-600"

        : "text-yellow-600"
    }
  >
    {" "}
    {
      order.orderStatus
    }
  </span>

</p>

        <p>
          <strong>
            Payment:
          </strong>
          {" "}
          {order.paymentMethod}
        </p>

        <p>
          <strong>
            Total:
          </strong>
          {" "}
          ₹{order.totalPrice}
        </p>

      </div>

      <div className="border rounded p-6 mt-6">

  <h2 className="text-2xl font-bold mb-4">
    Shipping Address
  </h2>

  <p>
    {
      order.shippingAddress
        .fullName
    }
  </p>

  <p>
    {
      order.shippingAddress
        .phone
    }
  </p>

  <p>
    {
      order.shippingAddress
        .address
    }
  </p>

  <p>
    {
      order.shippingAddress
        .city
    }
    ,
    {
      order.shippingAddress
        .state
    }
  </p>

  <p>
    {
      order.shippingAddress
        .pincode
    }
  </p>

</div>

<div className="mt-6">

  <h2 className="text-2xl font-bold mb-4">
    Products
  </h2>

  <div className="space-y-4">

    {order.orderItems.map(
      (item) => (
        <div
          key={
            item.product._id
          }
          className="flex items-center gap-4 border p-4 rounded"
        >

          <img
            src={
              item.product.image
            }
            alt={
              item.product.name
            }
            className="w-24 h-24 object-cover rounded"
          />

          <div>

            <h3 className="font-bold">
              {
                item.product.name
              }
            </h3>

            <p>
              Quantity:
              {" "}
              {
                item.quantity
              }
            </p>

            <p>
              Price:
              {" "}
              ₹
              {
                item.price
              }
            </p>

          </div>

        </div>
      )
    )}

  </div>

</div>

    </div>
  );
}

export default OrderDetails;