import React, { useState } from "react";
import { renderContext } from "./ContextProvider";
import { mainProductList } from "./Data/data";
import { mutableContext } from "./ContextProvider";
import { filterContext } from "./ContextProvider";
import { cartContext } from "./ContextProvider";

export default function Store({ children }) {
  // mutable stste
  const [productList, setProductList] = useState(mainProductList);
  // rendering state
  const [renderProductList, setRenderProductList] = useState(productList);
  // filtaring state
  const [filtaringProductList, setFilterindProductList] =
    useState(renderProductList);
  //product cart state
  const [isCart, setIsCart] = useState([]);
  return (
    <div>
      <mutableContext.Provider value={{ productList, setProductList }}>
        <renderContext.Provider
          value={{ renderProductList, setRenderProductList }}
        >
          <filterContext.Provider
            value={{ filtaringProductList, setFilterindProductList }}
          >
            <cartContext.Provider value={{ isCart, setIsCart }}>
              {children}
            </cartContext.Provider>
          </filterContext.Provider>
        </renderContext.Provider>
      </mutableContext.Provider>
    </div>
  );
}
