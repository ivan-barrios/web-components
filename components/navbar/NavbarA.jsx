"use client";

import { useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

const NavbarA = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center text-white">
      <div className="w-[124px] text-3xl">LOGO</div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      {/* Menu buttons */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {showMenu ? (
          <CgClose
            onClick={() => setShowMenu(false)}
            className="w-[28px] h-[28px] cursor-pointer"
          />
        ) : (
          <CgMenuRight
            onClick={() => setShowMenu(true)}
            className="w-[28px] h-[28px] cursor-pointer"
          />
        )}
        {/* Actual Menu */}
        <div
          className={`${
            showMenu ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <a href={`${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarA;
