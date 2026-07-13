import { useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import { markOrderPaid } from "../services/api";

function Success() {

  const [searchParams] =
    useSearchParams();

  const orderId =
    searchParams.get(
      "orderId"
    );

  useEffect(() => {

    console.log("Order ID:", orderId);

console.log("URL:", window.location.href);

    const updateOrder =
      async () => {

        try {

          if (orderId) {

            await markOrderPaid(
              orderId
            );
          }

        } catch (error) {

          console.log(error);
        }
      };

    updateOrder();

  }, [orderId]);

  return (
    <div className="max-w-4xl mx-auto p-10">

      <h1 className="text-4xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>

      <p className="mt-4">
        Your order has been placed.
      </p>

    </div>
  );
}

export default Success;