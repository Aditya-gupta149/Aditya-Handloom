const express = require("express");

const router = express.Router();

const {
    placeOrder,
    getMyOrders,
    getOrderById,
    updateOrderStatus,
    markOrderAsPaid,
} = require(
    "../controllers/orderController"
);

const {protect, } = require("../middleware/authMiddleware");
const { admin } = require( "../middleware/adminMiddleware");

router.post("/", protect, placeOrder);

router.get("/myorders", protect, getMyOrders);

router.get("/:id", protect, getOrderById);

router.put(
    "/:id/status",
    protect,
    admin,
    updateOrderStatus
);

router.put(
    "/:id/pay",
    protect,
    markOrderAsPaid
);

module.exports = router;