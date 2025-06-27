import { useState } from "react";
import Content from "./assets/Component/Content";
import Footer from "./assets/Component/Footer";
import Header from "./assets/Component/Header";
import Sidebar from "./assets/Component/Sidebar";
import { shoppingContext } from "./assets/Context";
import { themeContext } from "./assets/Context";

function App() {
  const [addToCart, setAddToCart] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <themeContext.Provider value={{ darkMode, setDarkMode }}>
        <shoppingContext.Provider value={{ addToCart, setAddToCart }}>
          <Header />
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <Content />
          </div>
          <Footer />
        </shoppingContext.Provider>
      </themeContext.Provider>
    </div>
  );
}

export default App;
