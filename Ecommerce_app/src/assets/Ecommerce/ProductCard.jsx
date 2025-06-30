import React, { useContext } from "react";
import { getProductImage } from "../utils/pcoduct-utils";
import Reaction from "./Reaction";
import { cartContext } from "../ContextProvider";
import { renderContext } from "../ContextProvider";

export default function ProductCard({ product }) {
  const { isCart, setIsCart } = useContext(cartContext);
  const { renderProductList, setRenderProductList } = useContext(renderContext);
  // console.log("this is kabir", product.quantity);
  // add data to cart component
  const handleAddCart = (product) => {
    let found = isCart.find((item) => item.id === product.id);
    if (!found) {
      setIsCart([...isCart, product]);
    } else {
      console.log("Already Added");
    }
  };

  // remove data from cart component
  const handleRemoveCart = (product) => {
    const deliteCart = isCart.filter((data) => data.id !== product.id);
    setIsCart(deliteCart);
  };

  // whene clickd to cart button it will switch to remove button

  const toggleButton = isCart.find((item) => item.id === product.id);

  return (
    <div>
      <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img
            src={getProductImage(product.image)}
            alt="Gradient Graphic T-shirt"
            className="h-full w-auto object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium">{product.title} </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center my-1">
              <Reaction reaction={product.reaction} />
              <span className="text-xs text-gray-500 ml-1">
                {product.reaction}/5
              </span>
            </div>
            <span className="text-xs text-gray-700">
              ({product.quantity} pcs left)
            </span>
          </div>
          <p className="font-bold">${product.price} </p>
          {}
          {product.quantity === 0 ? (
            <button
              disabled
              className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
            >
              Out of stock
            </button>
          ) : toggleButton ? (
            <button
              onClick={() => handleRemoveCart(product)}
              className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() => handleAddCart(product)}
              className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
