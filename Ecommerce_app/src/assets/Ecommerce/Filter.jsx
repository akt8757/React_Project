import React, { useContext } from "react";
import { filterContext } from "../ContextProvider";
import { renderContext } from "../ContextProvider";
import { mutableContext } from "../ContextProvider";

export default function Filter() {
  // filter state
  const { filtaringProductList, setFilterindProductList } =
    useContext(filterContext);
  // render state
  const { renderProductList, setRenderProductList } = useContext(renderContext);

  // main/mutable state
  const { productList } = useContext(mutableContext);

  // filter logic/function
  const filterProduct = (data) => {
    if (data === "Most Popular") {
      const filteredData = filtaringProductList.filter(
        (product) => product.reaction === 5
      );
      setRenderProductList(filteredData);
    } else if (data === "All Product") {
      setRenderProductList(productList);
    } else if (data === "Price: Low to High") {
      const result = filtaringProductList
        .slice()
        .sort((a, b) => a.price - b.price);

      setRenderProductList(result);
    } else if (data === "Price: High to Low") {
      const result = filtaringProductList
        .slice()
        .sort((a, b) => b.price - a.price);

      setRenderProductList(result);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select
            onChange={(e) => filterProduct(e.target.value)}
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option>All Product</option>
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
