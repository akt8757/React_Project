import React from "react";
import logo from "../../assets/icons/logo.svg";
export default function Logo() {
  return (
    <div>
      <a href="#">
        <img className="h-9" src={logo} alt="Weather App" />
      </a>
    </div>
  );
}
