import { useState } from "react";
import ProductDetail from "./assets/Component/productDetail";
import ProductList from "./assets/Component/ProductList";
import AddProduct from "./assets/Component/AddProduct";

function App() {
  const [isId, setIsId] = useState(1);
  const getIdHandeler = (id) => {
    setIsId(id);
  };
  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <AddProduct />
      </div>
      <div className="w-3/5 overflow-y-auto ... h-full">
        <ProductList getIdHandeler={getIdHandeler} />
      </div>
      <div className="w-1/5">
        <ProductDetail id={isId} />
      </div>
    </div>
  );
}

export default App;
