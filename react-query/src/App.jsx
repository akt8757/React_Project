import { useState } from "react";
import ProductDetail from "./assets/Component/productDetail";
import ProductList from "./assets/Component/ProductList";

function App() {
  const [isId, setIsId] = useState(1);
  const igetIdHandeler = (id) => {
    setIsId(id);
  };
  return (
    <div className="flex h-screen">
      <div className="w-3/5 overflow-y-auto ... h-full">
        <ProductList igetIdHandeler={igetIdHandeler} />
      </div>
      <div className="w-2/5">
        <ProductDetail id={isId} />
      </div>
    </div>
  );
}

export default App;
