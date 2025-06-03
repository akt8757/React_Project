import React from "react";
import Logo from "../../../public/lws-logo-en.svg";
export default function Header() {
  return (
    <div>
      <nav className="p-10 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <img className="h-[45px]" src={Logo} />
          </a>
        </div>
      </nav>
    </div>
  );
}
