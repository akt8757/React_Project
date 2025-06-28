import React from "react";
import { getProductImage } from "../utils/pcoduct-utils";
import Reaction from "./Reaction";

export default function ProductCard({ product }) {
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
          <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}
