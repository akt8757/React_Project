import React, { useContext } from "react";
import { renderContext } from "../ContextProvider";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { renderProductList } = useContext(renderContext);

  return (
    <div className="product-grid">
      {renderProductList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
