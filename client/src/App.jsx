import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import AdminDashboard from "./pages/AdminDashboard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AdminProducts from "./pages/AdminProducts";
import AdminCreateProduct from "./pages/AdminCreateProduct";
import AdminEditProduct from "./pages/AdminEditProduct";
import AdminOrders from "./pages/AdminOrders";
import AdminUsers from "./pages/AdminUsers";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import MyOrders from "./pages/MyOrders";

function App() {

  const { user } = useContext(AuthContext);

  return (
     <>
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/admin" element={ user?.role === "admin" ? ( <AdminDashboard /> ) : (
        <h1> Access Denied </h1> ) } />
        <Route path="/admin/products" element={ user?.role === "admin" ? <AdminProducts />
        : <h1>Access Denied</h1> } />
        <Route path="/admin/products/create" element={ user?.role === "admin" ? <AdminCreateProduct />
        : <h1>Access Denied</h1> } />
        <Route path="/admin/products/:id/edit" element={ user?.role === "admin" ? <AdminEditProduct />
        : <h1>Access Denied</h1> } />
        <Route path="/admin/orders" element={ user?.role === "admin"? <AdminOrders />
        : <h1>Access Denied</h1> } />
        <Route path="/admin/users" element={ user?.role === "admin" ? <AdminUsers />
        : <h1>Access Denied</h1> } />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
     
    </>
  );
}

export default App;