import {
  useEffect,
  useState,
} from "react";

import {
  getDashboardStats,
} from "../services/api";

import { Link } from "react-router-dom";

function AdminDashboard() {

  const [stats, setStats] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchStats =
      async () => {

        try {

          const data =
            await getDashboardStats();

          setStats(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchStats();

  }, []);

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
        Admin Dashboard
      </h1>

      <div className="flex gap-4 mb-8">

  <Link
    to="/admin/products"
    className="bg-black text-white px-4 py-2 rounded"
  >
    Manage Products
  </Link>

  <Link
  to="/admin/orders"
  className="bg-black text-white px-4 py-2 rounded"
>
  Manage Orders
</Link>

<Link
  to="/admin/users"
  className="bg-black text-white px-4 py-2 rounded"
>
  Manage Users
</Link>

</div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="border rounded-lg p-6 shadow">

          <h2 className="text-lg">
            Users
          </h2>

          <p className="text-3xl font-bold">
            {stats.totalUsers}
          </p>

        </div>

        <div className="border rounded-lg p-6 shadow">

          <h2 className="text-lg">
            Products
          </h2>

          <p className="text-3xl font-bold">
            {
              stats.totalProducts
            }
          </p>

        </div>

        <div className="border rounded-lg p-6 shadow">

          <h2 className="text-lg">
            Orders
          </h2>

          <p className="text-3xl font-bold">
            {stats.totalOrders}
          </p>

        </div>

        <div className="border rounded-lg p-6 shadow">

          <h2 className="text-lg">
            Revenue
          </h2>

          <p className="text-3xl font-bold">
            ₹
            {
              stats.totalRevenue
            }
          </p>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;