const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select(
      "-password"
    );

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find()
            .populate(
                "user",
                "name email"
            )
            .populate(
                "orderItems.product",
                "name"
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

const getDashboardStats = async (req, res) => {
    try {

        const totalUsers =
            await User.countDocuments();

        const totalProducts =
            await Product.countDocuments();

        const totalOrders =
            await Order.countDocuments();

        const orders =
            await Order.find();

        const totalRevenue =
            orders.reduce(
                (sum, order) =>
                    sum + order.totalPrice,
                0
            );

        res.status(200).json({
            totalUsers,
            totalProducts,
            totalOrders,
            totalRevenue
        });

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
                message: "Order not found",
            });
        }

        order.orderStatus =
            req.body.orderStatus;

        const updatedOrder =
            await order.save();

        res.status(200).json(
            updatedOrder
        );

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};

const updateUserRole = async (
  req,
  res
) => {

  try {

    const user =
      await User.findById(
        req.params.id
      );

    if (!user) {

      return res.status(
        404
      ).json({
        message:
          "User not found",
      });
    }

    user.role =
      req.body.role;

    const updatedUser =
      await user.save();

    res.status(200).json(
      updatedUser
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });
  }
};

const deleteUser = async (
  req,
  res
) => {

  try {

    const user =
      await User.findById(
        req.params.id
      );

    if (!user) {

      return res.status(
        404
      ).json({
        message:
          "User not found",
      });
    }

    await user.deleteOne();

    res.status(200).json({
      message:
        "User deleted", 
    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });
  }
};

module.exports = {
    getDashboardStats,
    getAllUsers,
    getAllOrders,
    updateOrderStatus,
    updateUserRole,
    deleteUser,
};