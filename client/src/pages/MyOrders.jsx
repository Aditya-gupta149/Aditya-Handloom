import { useEffect, useState } from "react";
import { getMyOrders } from "../services/api";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getMyOrders();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="border p-4 rounded mb-4"
          >
            <p>
              <strong>Order ID:</strong> {order._id}
            </p>

            <p>
              <strong>Total:</strong> ₹{order.totalPrice}
            </p>

            <p>
              <strong>Status:</strong> {order.orderStatus}
            </p>

            <p>
  <strong>Date:</strong>{" "}
  {new Date(
    order.createdAt
  ).toLocaleDateString()}
</p>

            <p>
              <strong>Paid:</strong>{" "}
              {order.isPaid ? "Yes" : "No"}
            </p>

            <h3 className="mt-4 font-bold">
  Products:
</h3>

{order.orderItems.map((item) => (
  <div
    key={item._id}
    className="border p-2 mt-2 rounded"
  >
    <p>
      Product: {item.product.name}
    </p>

    <p>
      Quantity: {item.quantity}
    </p>

    <p>
      Price: ₹{item.price}
    </p>
  </div>
))}
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;