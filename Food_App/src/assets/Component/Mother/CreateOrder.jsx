import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
export default function CreateOrder() {
  const initialValue = [
    {
      id: "",
      name: "Asraful",
      productName: "Burger",
      price: "300",
      status: true,
      totalOrder: "",
      img: "/hamburger.svg",
    },
    {
      id: "",
      name: "Asraful",
      productName: "chicken",
      price: "800",
      status: true,
      totalOrder: "",
      img: "/chicken.svg",
    },
    {
      id: "",
      name: "Asraful",
      productName: "pizza",
      price: "1000",
      status: true,
      totalOrder: "",
      img: "/pizza.svg",
    },
    {
      id: "",
      name: "Asraful",
      productName: "submarine",
      price: "700",
      status: true,
      totalOrder: "",
      img: "/submarine.svg",
    },
  ];

  const [products, setProduct] = useState(initialValue);
  const [updateCounter, setUpdateCounter] = useState("0");
  const [trackName, setTrackName] = useState();

  const handleIncement = (increment) => {
    let update = Number(updateCounter) + Number(increment);
    setUpdateCounter(update);
  };

  const handleDecrement = (decrement) => {
    let update = Number(updateCounter) - Number(decrement);
    setUpdateCounter(update);
  };

  //   submite order data to dashbord
  const handleGetOrder = () => {};
  console.log("increment", updateCounter);

  return (
    <div>
      <div class="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
        <h2 class="text-xl font-bold mb-1">CREATE ORDER</h2>
        <p class="text-gray-400 text-sm mb-4">
          Accurately fulfill customer orders based on a precise understanding of
          their requirements.
        </p>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-2">Customer Name</label>
          <input
            onChange={(e) => setTrackName(e.target.value)}
            type="text"
            class="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />
        </div>
        <label class="block text-sm font-medium mb-2">Choose Items</label>
        <div class="mb-4">
          <div class="items-container">
            {products.map((product) => (
              <div
                key={product}
                class="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
              >
                <div class="flex items-center">
                  <div class="w-12 h-12   flex items-center justify-center mr-3">
                    <img src={product.img} alt="Hamburger" class="w-10 h-10" />
                  </div>
                  <div>
                    <h3 class="font-medium">{product.productName}</h3>
                    <p class="text-xs text-gray-400">BDT {product.price}</p>
                  </div>
                </div>
                <div className="button-area">
                  <button
                    onClick={() => handleIncement(product.price)}
                    class=" cursor-pointer w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <FaPlus color="green" />
                  </button>
                  <button
                    onClick={() => handleDecrement(product.price)}
                    class=" cursor-pointer mt-2 w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <FaMinus color="red" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleGetOrder}
          class="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        >
          Place Order (BDT {updateCounter})
        </button>
      </div>
    </div>
  );
}
