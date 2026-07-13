import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";



function Profile() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border rounded-lg">
      <h1 className="text-3xl font-bold mb-4">
        Profile
      </h1>

      <p>
        <strong>Name:</strong> {user?.name}
      </p>

      <p>
        <strong>Email:</strong> {user?.email}
      </p>

      <p>
        <strong>Role:</strong> {user?.role}
      </p>

      <button
  onClick={() => navigate("/my-orders")}
  className="mt-4 bg-black text-white px-4 py-2 rounded"
>
  My Orders
</button>
    </div>
  );
}

export default Profile;