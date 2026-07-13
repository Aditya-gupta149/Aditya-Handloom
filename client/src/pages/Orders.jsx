import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  getMyOrders,
} from "../services/api";

function Orders() {
  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchOrders =
      async () => {
        try {

          const data =
            await getMyOrders();

          setOrders(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <h1 className="text-center mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <h2>
          No orders found.
        </h2>
      ) : (
        <div className="space-y-4">

          {orders.map((order) => (
            <div
              key={order._id}
              className="border p-4 rounded"
            >

              <h2 className="font-bold">
                Order ID:
              </h2>

              <p>
                {order._id}
              </p>

              <p>
                Status:
                {" "}
                {
                  order.orderStatus
                }
              </p>

              <p>
                Total:
                {" "}
                ₹
                {
                  order.totalPrice
                }
              </p>

              <Link
                to={`/orders/${order._id}`}
                className="text-blue-500"
              >
                View Details
              </Link>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Orders;