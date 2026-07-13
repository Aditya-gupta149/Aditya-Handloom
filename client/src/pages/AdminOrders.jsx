import {
  useEffect,
  useState,
} from "react";

import {
  getAllOrders,
  updateOrderStatus,
} from "../services/api";

function AdminOrders() {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchOrders =
    async () => {

      try {

        const data =
          await getAllOrders();

        setOrders(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange =
    async (
      orderId,
      status
    ) => {

      try {

        await updateOrderStatus(
          orderId,
          status
        );

        fetchOrders();

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
        Manage Orders
      </h1>

      <table className="w-full border">

        <thead>

          <tr>

            <th>User</th>

            <th>Total</th>

            <th>Status</th>

            <th>Update</th>

          </tr>

        </thead>

        <tbody>

          {orders.map(
            (order) => (
              <tr
                key={
                  order._id
                }
                className="text-center border-b"
              >

                <td>
                  {
                    order.user ? order.user.name : "Deleted User"
                  }
                </td>

                <td>
                  ₹
                  {
                    order.totalPrice
                  }
                </td>

                <td>
                  {
                    order.orderStatus
                  }
                </td>

                <td>

                  <select
                    value={
                      order.orderStatus
                    }
                    onChange={(
                      e
                    ) =>
                      handleStatusChange(
                        order._id,
                        e.target
                          .value
                      )
                    }
                    className="border p-2"
                  >

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Shipped">
                      Shipped
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>

                  </select>

                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default AdminOrders;