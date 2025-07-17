import { useState } from "react";
import Result from "./Component/Body/Result";
import Search from "./Component/Body/Search";
import Downlod from "./Component/Downlod/Downlod";
import Banner from "./Component/Header/Banner";
import Glow from "./Component/Header/Glow";
import Menu from "./Component/Header/Menu";
import Store from "./Store";

function App() {
  const [isRoute, setIsRoute] = useState(false);
  return (
    <Store>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Menu changeRoute={setIsRoute} changeClass={isRoute} />
        <Glow />
        {isRoute ? (
          <Downlod />
        ) : (
          <main className="relative z-10">
            <Banner />
            <Search />
            <Result />
          </main>
        )}
      </div>
    </Store>
  );
}

export default App;
