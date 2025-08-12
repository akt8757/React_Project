import React from "react";
import logo from "../image/logo.jpg";
import { Button } from "../components/ui/button";
export default function Header() {
  return (
    <div className="bg-amber-50 py-5">
      <div className="flex justify-between items-center px-5">
        <div className="w-[100px]">
          <img src={logo} alt="logo" />
        </div>
        <div className="bg">
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}
