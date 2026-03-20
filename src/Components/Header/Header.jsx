import React, { useState } from "react";
import Profile from "./profile";
import SquareIcon from "../../Global Components/squareIcon";
import Mode from "../../Global Components/Mode";
import Bell from "../../Global Components/bell";
import NavbarList from "../Main/NavbarList";

const Header = () => {
  let [menuOpen, setMenuOpen] = useState(false);
  const handleClicked = () => setMenuOpen(!menuOpen);
  console.log(menuOpen);
  return (
    <>
      <div className="sticky top-0 z-10 flex p-2 justify-between bg-base-100 text-lg  border-b border-b-gray-300">
        <div className="hidden sm:flex sm:items-center gap-3 w-64">
          <SquareIcon
            icon={<i class="fa-solid fa-graduation-cap"></i>}
          ></SquareIcon>
          <div>
            <h2 className="text-2xl font-bold">UAMS</h2>
            <p className="text-lg text-gray-600">Academic Portal</p>
          </div>
        </div>
        <div onClick={handleClicked} className="sm:hidden">
          <SquareIcon
            icon={
              menuOpen ? (
                <i class="fa-solid fa-xmark"></i>
              ) : (
                <i class="fa-solid fa-bars"></i>
              )
            }
            bg="bg-gray-50"
            color="text-black"
          ></SquareIcon>
        </div>
        <div className=" flex justify-end items-center gap-2 ">
          <Mode></Mode>
          <Bell></Bell>
          <Profile></Profile>
        </div>
      </div>
      <div className={`${menuOpen ? "" : "hidden"} sm:hidden`}>
        <NavbarList></NavbarList>
      </div>
    </>
  );
};

export default Header;
