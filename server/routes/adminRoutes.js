const express = require("express");

const router = express.Router();

const {
    getDashboardStats,
    getAllUsers,
    getAllOrders,
    updateOrderStatus,
    updateUserRole,
    deleteUser,
} = require( "../controllers/adminController");

const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");

router.get(
  "/users",
  protect,
  admin,
  getAllUsers
);

router.get(
  "/orders",
  protect,
  admin,
  getAllOrders
);

router.get(
  "/stats",
  protect,
  admin,
  getDashboardStats
);

router.put(
    "/orders/:id",
    protect,
    admin,
    updateOrderStatus
);

router.put(
  "/users/:id",
  protect,
  admin,
  updateUserRole
);

router.delete(
  "/users/:id",
  protect,
  admin,
  deleteUser
);

module.exports = router;