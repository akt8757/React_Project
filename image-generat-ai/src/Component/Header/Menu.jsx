import React from "react";
import logo from "../../assets/Images//logo.svg";
import asraful from "../../assets/Images/asraful.jpg";

export default function Menu({ changeRoute, changeClass }) {
  return (
    <div>
      <header className="flex items-center mb-12 justify-between">
        <div className="flex items-center">
          <img src={asraful} className="w-20 h-20 rounded-full object-cover" />
        </div>
        <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
          <a
            onClick={() => changeRoute(false)}
            href="#"
            className={`hover:text-zinc-200 font-medium ${
              !changeClass && `text-zinc-200`
            } cursor-pointer transition-all`}
          >
            Create Image
          </a>
          <a
            onClick={() => changeRoute(true)}
            href="#"
            className={`hover:text-zinc-200 cursor-pointer ${
              changeClass && `text-zinc-200`
            } transition-all`}
          >
            Downloaded
          </a>
        </ul>
      </header>
    </div>
  );
}
