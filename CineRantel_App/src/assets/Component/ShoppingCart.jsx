import { useContext } from "react";
import { shoppingContext } from "../Context";
import { GetMoviImg } from "../utils/movie-utils";
import remove from "../icons/delete.svg";
import checkout from "../icons/checkout.svg";

export default function ShoppingCart({ onCloseCart }) {
  const { addToCart, setAddToCart } = useContext(shoppingContext);

  const handleRemove = (id) => {
    const getValue = addToCart.filter((cart) => cart.id !== id);
    setAddToCart(getValue);
  };
  return (
    <>
      <div class="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
          <div class="bg-white shadow-md dark:bg-black rounded-2xl overflow-hidden p-5 md:p-9">
            <h2 class="text-2xl lg:text-[30px] mb-10 font-bold">Your Carts</h2>
            {addToCart.map((cart) => (
              <div class="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
                <div class="grid grid-cols-[1fr_auto] gap-4">
                  <div class="flex items-center gap-4">
                    <img
                      class="rounded overflow-hidden"
                      src={GetMoviImg(cart.cover)}
                      width="100px"
                      height="100px"
                      alt=""
                    />
                    <div>
                      <h3 class="text-base md:text-xl font-bold">
                        {cart.title}
                      </h3>
                      <p class="max-md:text-xs text-[#575A6E]">{cart.genre}</p>
                      <span class="max-md:text-xs">${cart.price}</span>
                    </div>
                  </div>
                  <div class="flex justify-between gap-4 items-center">
                    <button
                      onClick={() => handleRemove(cart.id)}
                      class="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                    >
                      <img class="w-5 h-5" src={remove} alt="" />
                      <span class="max-md:hidden">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div class="flex items-center justify-end gap-2">
              <a
                class="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
                href="#"
              >
                <img src={checkout} width="24" height="24" alt="" />
                <span>Checkout</span>
              </a>
              <a
                class="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                href="#"
                onClick={onCloseCart}
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
