import React, { useState } from "react";
import CloseIcon from "../assets/close-icon.svg";
import MenuIcon from "../assets/menu-icon.svg";
import MenuArrow from "../assets/menu-arrow.svg";
import Logo from "./symbols/Logo";
import MenuDialog from "./MenuDialog";

const Menu = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const menuContainer = document.getElementById("menu-dialog");

  const toggleDialog: any = () => {
    if (!displayMenu) {
      menuContainer!.classList.add("visible");
      menuContainer!.classList.remove("invisible");
    } else {
      menuContainer!.classList.remove("visible");
      menuContainer!.classList.add("invisible");
    }
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className="w-full flex px-5 py-3">
      <div className="flex-1 h-8 p-2">
        <Logo />
      </div>
      <div className="flex items-end">
        <div className="flex ">
          <h2 className="font-sans text-2xl text-right uppercase">Menu</h2>
        </div>
      </div>
      <div
        className="flex items-center justify-center px-4"
        onClick={() => toggleDialog()}
      >
        <MenuIcon />
      </div>
      {displayMenu && (
        <MenuDialog>
          <div className="container w-full">
            <div className="container grid grid-cols-2">
              <div className="py-8 px-4 flex items-end justify-start">
                <Logo color="#FFFFFF" />
              </div>
              <div
                className="py-8 px-4 flex items-end justify-end"
                onClick={() => toggleDialog()}
              >
                <CloseIcon />
              </div>
            </div>
            <div className="container w-full">
              <ul>
                <li className="text-right uppercase border-b border-[#A3A3A3] mx-4 my-2 text-4xl text-white flex items-center justify-end gap-4">
                  <MenuArrow />
                  <p>Home</p>
                </li>
                <li className="text-right uppercase border-b border-[#A3A3A3] mx-4 my-2 text-4xl text-white">
                  <p>Werk</p>
                </li>
                <li className="text-right uppercase border-b border-[#A3A3A3] mx-4 my-2 text-4xl text-white">
                  <p>Over</p>
                </li>
                <li className="text-right uppercase border-b border-[#A3A3A3] mx-4 my-2 text-4xl text-white">
                  <p>Diensten</p>
                </li>
                <li className="text-right uppercase border-b border-[#A3A3A3] mx-4 my-2 text-4xl text-white">
                  <p>Partners</p>
                </li>
                <li className="text-right uppercase border-b border-[#A3A3A3] mx-4 my-2 text-4xl text-white">
                  <p>Stories</p>
                </li>
                <li className="text-right uppercase border-b border-[#A3A3A3] mx-4 my-2 text-4xl text-white">
                  <p>Vacatures</p>
                </li>
                <li className="text-right uppercase border-b border-[#A3A3A3] mx-4 my-2 text-4xl text-white">
                  <p>Events</p>
                </li>
                <li className="text-right uppercase border-b border-[#A3A3A3] mx-4 my-2 text-4xl text-white">
                  <p>Contact</p>
                </li>
              </ul>
            </div>
          </div>
        </MenuDialog>
      )}
    </div>
  );
};

export default Menu;
