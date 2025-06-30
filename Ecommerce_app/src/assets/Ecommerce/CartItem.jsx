import React, { useContext } from "react";
import { cartContext } from "../ContextProvider";
import { renderContext } from "../ContextProvider";
import { getProductImage } from "../utils/pcoduct-utils";
import { MdRemoveCircle } from "react-icons/md";

export default function CartItem() {
  const { isCart, setIsCart } = useContext(cartContext);
  const { renderProductList, setRenderProductList } = useContext(renderContext);

  const handleCartRemove = (cart) => {
    const updatedData = renderProductList.map((list) => {
      if (cart.id === list.id) {
        return {
          ...list,
          quantity: list.quantity + cart.cartItem,
        };
      }
      return list;
    });
    setRenderProductList(updatedData);
    console.log("master", updatedData);
    const filtaredData = isCart.filter((data) => data.id !== cart.id);
    setIsCart(filtaredData);
  };

  const handleProductCount = (productId, action) => {
    const updateCart = isCart.map((item) => {
      let newCart;
      if (item.id === productId) {
        if (action === "increment") {
          renderProductList.forEach((list) => {
            if (list.id === productId) {
              if (list.quantity === 0) {
                newCart = item.cartItem;
              } else newCart = item.cartItem + 1;
            }
          });
        } else if (action === "decrement") {
          newCart = item.cartItem - 1;
          if (newCart < 1) {
            newCart = 1;
          }
        }
        return { ...item, cartItem: newCart };
      }
      return item;
    });
    setIsCart(updateCart);

    const updateStore = renderProductList.map((item) => {
      let updateValue;
      if (item.id === productId) {
        if (action === "increment") {
          if (item.quantity === 0) {
            updateValue = 0;
          } else updateValue = item.quantity - 1;
        } else if (action === "decrement") {
          isCart.forEach((list) => {
            if (list.id === productId) {
              if (list.cartItem === 1) {
                updateValue = item.quantity;
              } else updateValue = item.quantity + 1;
            }
          });
        }
        return { ...item, quantity: updateValue };
      }
      return item;
    });
    setRenderProductList(updateStore);
  };
  return (
    <div>
      {isCart.map((cart) => (
        <div
          key={cart.id}
          className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
        >
          <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
            <img
              src={getProductImage(cart.image)}
              alt="Gradient Graphic T-shirt"
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between">
              <h3 className="font-medium">{cart.title}</h3>
              <span
                onClick={() => handleCartRemove(cart)}
                className="text-red-500 text-xl cursor-pointer"
              >
                <MdRemoveCircle />
              </span>
            </div>
            <p className="text-sm text-gray-500">Size: Large</p>
            <p className="text-sm text-gray-500">Color: White</p>
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold">${cart.price}</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleProductCount(cart.id, "decrement")}
                  className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                >
                  −
                </button>
                <span className="text-sm">{cart.cartItem}</span>
                <button
                  onClick={() => handleProductCount(cart.id, "increment")}
                  className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
