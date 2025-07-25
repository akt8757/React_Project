import React, { useContext, useState } from "react";
import { cartContext } from "../ContextProvider";
import { renderContext } from "../ContextProvider";
import { filterContext } from "../ContextProvider";
// import CartDrawer from "./CartDrawer";
import { Drawer } from "antd";
import CartItem from "../Ecommerce/CartItem";
import OrderSummery from "../Ecommerce/OrderSummery";

export default function Header() {
  const { isCart, setIsCart } = useContext(cartContext);
  const { renderProductList, setRenderProductList } = useContext(renderContext);
  const { filtaringProductList, setFilterindProductList } =
    useContext(filterContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isFilter, setIsFilter] = useState("");

  const handleopenDrawer = () => {
    setOpenDrawer(true);
  };
  const onClose = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleChange = (e) => {
    // let inputVal = ;
    setIsFilter(e.target.value);
    const filteredData = filtaringProductList.filter((val) => {
      if (isFilter === "") {
        return filtaringProductList;
      }
      return val.title.toLowerCase().includes(isFilter.toLowerCase());
    });
    setRenderProductList(filteredData);
  };

  return (
    <>
      <Drawer
        title="Cart Item"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={openDrawer}
      >
        <CartItem />
        <OrderSummery />
      </Drawer>
      {/* <CartDrawer openDrawer={openDrawer} /> */}
      <header className="border-b border-gray-200 py-4 px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            LWS.SHOP
          </a>

          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-500 transition-colors">
              Shop
            </a>
            <a href="#" className="hover:text-gray-500 transition-colors">
              On Sale
            </a>
            <a href="#" className="hover:text-gray-500 transition-colors">
              New Arrivals
            </a>
            <a href="#" className="hover:text-gray-500 transition-colors">
              Brands
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block w-64">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Search for products..."
                className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
              />
              <span className="absolute right-3 top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>

            <a
              href="#"
              className="hover:text-gray-500 transition-colors relative"
              onClick={() => handleopenDrawer(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow">
                {isCart.length}
              </span>
            </a>

            <a href="#" className="hover:text-gray-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
