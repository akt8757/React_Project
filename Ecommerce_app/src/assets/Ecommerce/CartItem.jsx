import React, { useContext } from "react";
import { cartContext } from "../ContextProvider";
import { renderContext } from "../ContextProvider";
import { getProductImage } from "../utils/pcoduct-utils";
import { MdRemoveCircle } from "react-icons/md";
import { Button, notification, Space } from "antd";

export default function CartItem() {
  const { isCart, setIsCart } = useContext(cartContext);
  const { renderProductList, setRenderProductList } = useContext(renderContext);
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message,
      description,
      placement: "top",
      style: {
        backgroundColor: "#fff2f0",
        color: "#a8071a",
      },
      showProgress: true,
    });
  };

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
    const filtaredData = isCart.filter((data) => data.id !== cart.id);
    setIsCart(filtaredData);
  };

  //adjust cart count
  const handleProductCount = (productId, action) => {
    const updatedCart = isCart.map((item) => {
      if (item.id === productId) {
        let newCartItem = item.cartItem;

        if (action === "increment") {
          const product = renderProductList.find((p) => p.id === productId);
          if (product?.quantity > 0) {
            newCartItem += 1;
          }
        } else if (action === "decrement") {
          newCartItem = Math.max(1, newCartItem - 1);
        }

        // price adjust
        const priceAdjuist = renderProductList.find((p) => p.id === productId);
        console.log("kkk", item.price);
        let newPrice = item.cartPrice;
        if (action === "increment") {
          if (priceAdjuist.quantity === 0) {
            openNotificationWithIcon("warning", "Store is empty");
            newPrice;
          } else newPrice = item.cartPrice + item.price;
        } else if (action === "decrement") {
          if (newPrice === priceAdjuist.price) {
            openNotificationWithIcon("warning", "Take mimnimum 1 product");
            newPrice = item.price;
          } else newPrice = item.cartPrice - item.price;
        }

        return { ...item, cartItem: newCartItem, cartPrice: newPrice };
      }
      return item;
    });

    setIsCart(updatedCart);

    const updatedStore = renderProductList.map((item) => {
      if (item.id === productId) {
        let newQuantity = item.quantity;

        if (action === "increment" && item.quantity > 0) {
          newQuantity -= 1;
        } else if (action === "decrement") {
          const cartItem =
            isCart.find((p) => p.id === productId)?.cartItem || 1;
          if (cartItem > 1) {
            newQuantity += 1;
          }
        }

        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setRenderProductList(updatedStore);
  };

  return (
    <div>
      {contextHolder}
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
              <p className="font-bold">${cart.cartPrice}</p>
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
