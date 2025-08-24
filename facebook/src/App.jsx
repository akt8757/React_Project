import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/Pages/HomePage";
import LoginPage from "./assets/Pages/LoginPage";
import RegisterPage from "./assets/Pages/RegisterPage";
import NotfoundPage from "./assets/Pages/NotfoundPage";
import ProfilePage from "./assets/Pages/ProfilePage";
import PrivateRouter from "./assets/Routes/privateRouter";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRouter />}>
          {/* <HomePage /> */}
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </>
  );
}

export default App;
