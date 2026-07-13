const Order = require("../models/Order");
const Cart = require("../models/Cart");

const placeOrder = async (req, res) => {
    try {

        const {
            shippingAddress,
            paymentMethod
        } = req.body;

        const cart = await Cart.findOne({
            user: req.user._id
        }).populate("items.product");

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                message: "Cart is empty"
            });
        }

        let totalPrice = 0;

        const orderItems = cart.items.map((item) => {

            totalPrice +=
                item.product.price * item.quantity;

            return {
                product: item.product._id,
                quantity: item.quantity,
                price: item.product.price
            };
        });

        const order = await Order.create({
            user: req.user._id,
            orderItems,
            shippingAddress,
            totalPrice,
            paymentMethod
        });

        cart.items = [];

        await cart.save();

        res.status(201).json(order);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getMyOrders = async (req, res) => {

    console.log(req.user);
    try {

       const orders = await Order.find({
    user: req.user._id
})
.populate(
    "orderItems.product",
    "name image price"
)
.sort({
    createdAt: -1
});

        res.status(200).json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const getOrderById = async (req, res) => {
    try {

        const order = await Order.findById(
            req.params.id
        )
            .populate(
                "orderItems.product",
                "name price image"
            )
            .populate(
                "user",
                "name email"
            );

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const updateOrderStatus = async (req, res) => {
    try {

        const order = await Order.findById(
            req.params.id
        );

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        order.orderStatus =
            req.body.orderStatus ||
            order.orderStatus;

        await order.save();

        res.status(200).json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const markOrderAsPaid = async (req, res) => {
    try {

        const order = await Order.findById(
            req.params.id
        );

        if (!order) {
            return res.status(404).json({
                message: "Order not found",
            });
        }

        order.isPaid = true;

        order.paidAt = Date.now();

        order.orderStatus = "Paid";

        for (const item of order.orderItems) {

           const Product = require(
    "../models/Product"
);

const product =
    await Product.findById(
        item.product
    );

            if (product) {

                product.stock -=
                    item.quantity;

                await product.save();
            }
        }

        await order.save();

        res.status(200).json(order);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    placeOrder,
    getMyOrders,
    getOrderById,
    updateOrderStatus,
    markOrderAsPaid,
};