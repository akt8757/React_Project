import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import LoceationPopup from "./LoceationPopup";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className=" Container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />
          <LoceationPopup />
        </div>
      </nav>
    </header>
  );
}
