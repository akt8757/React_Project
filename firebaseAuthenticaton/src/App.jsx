import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import Reset from "./component/Reset";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Reset" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
