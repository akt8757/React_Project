import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import HomePage from "../Pages/HomePage";

export default function PrivateRouter() {
  const data = useAuth();

  const token = useSelector((state) => state.auth.tokens);
  const selector = useSelector((state) => state.auth.user);

  // if (selector) {
  //   // console.log("asraful", selector);
  // } else console.log("kabir");

  return (
    <div>
      {data.user ? (
        <div>
          <HomePage />
          <Outlet />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
