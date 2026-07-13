import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const registerUser = async (userData) => {
  const response = await api.post(
    "/auth/register",
    userData
  );

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post(
    "/auth/login",
    userData
  );

  return response.data;
};

export const getProducts = async (
  search = "",
  category = "",
  sort = "",
  page = 1
) => {
  const response = await api.get(
    `/products?search=${search}&category=${category}&sort=${sort}&page=${page}`
  );

  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(
    `/products/${id}`
  );

  return response.data;
};

export const addToCart = async (
  productId,
  quantity
) => {
  const response = await api.post(
    "/cart",
    {
      productId,
      quantity,
    }
  );

  return response.data;
};

export const getCart = async () => {
  const response = await api.get("/cart");

  return response.data;
};

export const updateCartQuantity = async (
  productId,
  quantity
) => {
  const response = await api.put(
    `/cart/${productId}`,
    {
      quantity,
    }
  );

  return response.data;
};

export const removeFromCart = async (
  productId
) => {
  const response = await api.delete(
    `/cart/${productId}`
  );

  return response.data;
};

export const placeOrder = async (
  orderData
) => {
  const response = await api.post(
    "/orders",
    orderData
  );

  return response.data;
};

export const getMyOrders = async () => {
  const response = await api.get(
    "/orders/myorders"
  );

  return response.data;
};

export const getOrderById = async (
  id
) => {
  const response = await api.get(
    `/orders/${id}`
  );

  return response.data;
};

export const getDashboardStats = async () => {
  const response = await api.get(
    "/admin/stats"
  );

  return response.data;
};

export const getAllProducts = async () => {
  const response = await api.get(
    "/products?limit=1000"
  );

  return response.data;
};

export const deleteProduct = async (
  id
) => {
  const response = await api.delete(
    `/products/${id}`
  );

  return response.data;
};

export const createProduct = async (
  productData
) => {
  const response = await api.post(
    "/products",
    productData
  );

  return response.data;
};

export const updateProduct = async (
  id,
  productData
) => {
  const response = await api.put(
    `/products/${id}`,
    productData
  );

  return response.data;
};

export const getAllOrders = async () => {
  const response = await api.get(
    "/admin/orders"
  );

  return response.data;
};

export const updateOrderStatus =
  async (id, status) => {

    const response =
      await api.put(
        `/admin/orders/${id}`,
        {
          orderStatus:
            status,
        }
      );

    return response.data;
  };

  export const getAllUsers = async () => {
  const response = await api.get(
    "/admin/users"
  );

  return response.data;
};

export const updateUserRole = async (
  id,
  role
) => {
  const response = await api.put(
    `/admin/users/${id}`,
    { role }
  );

  return response.data;
};

export const deleteUser = async (
  id
) => {
  const response = await api.delete(
    `/admin/users/${id}`
  );

  return response.data;
};

export const uploadImage = async (imageFile) => {
  const formData = new FormData();

  formData.append(
    "image",
    imageFile
  );

  const response =
    await api.post(
      "/upload",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

  return response.data;
};

export const createCheckoutSession = async (orderItems , orderId) => {

    const response =
      await api.post(
        "/payment/create-checkout-session",
        {
          orderItems,
          orderId,
        }
      );

    return response.data;
  };

  export const markOrderPaid = async (
    id
) => {

    const response =
        await api.put(
            `/orders/${id}/pay`
        );

    return response.data;
};



export default api;