const express =
  require("express");

const stripe =
  require(
    "../config/stripe"
  );

const router =
  express.Router();

  const Product = require("../models/Product");

router.post(
  "/create-checkout-session",
  async (req, res) => {

    try {

      const {
        orderItems,
      } = req.body;

      console.log(orderItems);

      const session =
        await stripe.checkout.sessions.create(
          {
            ui_mode: "hosted_page",
            payment_method_types:
              ["card"],
              

     line_items: await Promise.all(
  orderItems.map(async (item) => {

    const product = await Product.findById(
      item.product
    );

    return {
      price_data: {
        currency: "inr",

        product_data: {
          name: product.name,
        },

        unit_amount:
          Number(item.price) * 100,
      },

      quantity: item.quantity,
    };
  })
),

            mode:
              "payment",

           success_url:
  `http://localhost:5173/success?orderId=${req.body.orderId}`,

            cancel_url:
              "http://localhost:5173/cancel",
          }
        );

      res.json({
    url: session.url,
});

    } catch (error) {
      console.log(error);
      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

module.exports =
  router;