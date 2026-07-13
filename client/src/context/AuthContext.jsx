import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("user")) || null
);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const login = (userData) => {
  localStorage.setItem(
    "token",
    userData.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(userData)
  );

  setUser(userData);
};

  return (
    <AuthContext.Provider
  value={{
    user,
    login,
    logout,
    setUser,
  }}
>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;