import React, { useContext } from "react";
import { cartContext } from "../ContextProvider";

export default function OrderSummery() {
  const { isCart, setIsCart } = useContext(cartContext);

  let isdeliveriyfeeAda = 0;

  if (isCart.length > 0) {
    isdeliveriyfeeAda = 15;
  }
  const totalPrice = isCart.reduce(
    (fistVal, cart) => fistVal + cart.cartPrice,
    0
  );
  const discount = (totalPrice / 100) * 2;
  const afterDiscount = totalPrice - discount;
  const roundPrice = afterDiscount + isdeliveriyfeeAda;
  const finalPrice = Math.round(roundPrice);
  return (
    <div>
      <div className="mt-6">
        <h3 className="font-bold text-lg mb-4">Order Summary</h3>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${totalPrice}</span>
          </div>
          <div className="flex justify-between text-red-500">
            <span>Discount (-20%)</span>
            <span>-${discount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-medium">$15</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
            <span>Total</span>
            <span>${finalPrice}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-6">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
            />
            <span className="absolute left-3 top-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            </span>
          </div>
          <button className="bg-black text-white rounded-md px-4 py-2 text-sm">
            Apply
          </button>
        </div>

        <a
          href="#"
          className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          Go to Checkout
          <span className="inline-block ml-2">→</span>
        </a>
      </div>
    </div>
  );
}
