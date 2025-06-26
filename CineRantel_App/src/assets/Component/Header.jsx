import React, { useContext } from "react";
import { useState } from "react";
import logo from "../icons/logo.svg";
import gear from "../icons/gear.svg";
import moon from "../icons/moon.svg";
import sun from "../icons/sun.svg";
import cart from "../icons/shopping-cart.svg";
import ShoppingCart from "./ShoppingCart";
import { themeContext } from "../Context";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(themeContext);

  const [isCart, setIsCart] = useState(false);

  return (
    <>
      {isCart && <ShoppingCart onCloseCart={() => setIsCart(false)} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="img" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={gear} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? sun : moon}
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setIsCart(true)}
              >
                <img src={cart} width="24" height="24" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
