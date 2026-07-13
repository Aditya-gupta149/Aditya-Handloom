import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">
            Aditya Handloom • Premium Fabrics
          </h1>
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/">Home</Link>

          <Link to="/shop">Shop</Link>

          <Link to="/cart">Cart</Link>

          {!user ? (
            <>
              <Link to="/login">Login</Link>

              <Link to="/register">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile">
                {user.name}
              </Link>

              {user.role === "admin" && (
                <Link to="/admin">
                  Admin
                </Link>
              )}

              <button onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;