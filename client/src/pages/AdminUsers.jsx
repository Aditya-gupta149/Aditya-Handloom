import {
  useEffect,
  useState,
} from "react";

import {
  getAllUsers,
  updateUserRole,
  deleteUser,
} from "../services/api";

function AdminUsers() {

  const [users, setUsers] =
    useState([]);

  const fetchUsers =
    async () => {

      const data =
        await getAllUsers();

      setUsers(data);
    };

  useEffect(() => {

    fetchUsers();

  }, []);

  const handleRoleChange =
    async (
      id,
      role
    ) => {

      await updateUserRole(
        id,
        role
      );

      fetchUsers();
    };

  const handleDelete =
    async (id) => {

      if (
        !window.confirm(
          "Delete user?"
        )
      ) {
        return;
      }

      await deleteUser(id);

      fetchUsers();
    };

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Manage Users
      </h1>

      <table className="w-full border">

        <thead>

          <tr>

            <th>Name</th>

            <th>Email</th>

            <th>Role</th>

            <th>Delete</th>

          </tr>

        </thead>

        <tbody>

          {users.map(
            (user) => (

              <tr
                key={user._id}
                className="text-center border-b"
              >

                <td>
                  {user.name}
                </td>

                <td>
                  {user.email}
                </td>

                <td>

                  <select
                    value={user.role}
                    onChange={(e) =>
                      handleRoleChange(
                        user._id,
                        e.target.value
                      )
                    }
                  >

                    <option value="user">
                      User
                    </option>

                    <option value="admin">
                      Admin
                    </option>

                  </select>

                </td>

                <td>

                  <button
                    onClick={() =>
                      handleDelete(
                        user._id
                      )
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default AdminUsers;