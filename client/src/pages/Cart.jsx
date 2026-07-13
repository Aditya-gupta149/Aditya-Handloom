import {
  getCart,
  removeFromCart,
  updateCartQuantity,
} from "../services/api";

import {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

function Cart() {

  const navigate = useNavigate();
  
  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
  });

  const [loading, setLoading] =
    useState(true);

  const fetchCart = async () => {
    try {
      const data = await getCart();

      setCart(data);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = async (
    productId
  ) => {
    try {
      await removeFromCart(
        productId
      );

      fetchCart();

    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityChange =
    async (
      productId,
      quantity
    ) => {
      try {
        await updateCartQuantity(
          productId,
          quantity
        );

        fetchCart();

      } catch (error) {
        console.log(error);
      }
    };

  if (loading) {
    return (
      <h1 className="text-center mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Your Cart
      </h1>

      {cart.items.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          <div className="space-y-4">

            {cart.items.map((item) => (
              <div
                key={
                  item.product._id
                }
                className="flex items-center gap-4 border p-4 rounded"
              >

                <img
                  src={
                    item.product.image
                  }
                  alt={
                    item.product.name
                  }
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1">

                  <h2 className="font-bold text-lg">
                    {
                      item.product.name
                    }
                  </h2>

                  <p>
                    ₹
                    {
                      item.product
                        .price
                    }
                  </p>

                </div>

                <select
                  value={
                    item.quantity
                  }
                  onChange={(
                    e
                  ) =>
                    handleQuantityChange(
                      item.product
                        ._id,
                      Number(
                        e.target
                          .value
                      )
                    )
                  }
                  className="border p-2 rounded"
                >
                 {[
  ...Array(
    Math.min(
      item.product.stock,
      10
    )
  ).keys(),
].map(
                    (x) => (
                      <option
                        key={
                          x + 1
                        }
                        value={
                          x + 1
                        }
                      >
                        {x + 1}
                      </option>
                    )
                  )}
                </select>

                <button
                  onClick={() =>
                    handleRemove(
                      item.product
                        ._id
                    )
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

          <div className="mt-8 border-t pt-6">

            <h2 className="text-2xl font-bold">
              Total: ₹
              {
                cart.totalPrice
              }
            </h2>

<button
  onClick={() =>
    navigate("/checkout")
  }
  className="mt-4 bg-black text-white px-6 py-3 rounded"
>
  Proceed to Checkout
</button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;