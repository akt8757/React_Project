import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/Component/HomePage";
import LoginPage from "./assets/Component/LoginPage";
import RegisterPage from "./assets/Component/RegisterPage";
import NotfoundPage from "./assets/Component/NotfoundPage";
import ProfilePage from "./assets/Component/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </>
  );
}

export default App;
