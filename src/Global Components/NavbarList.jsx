import React, { useState } from "react";
import TextIcon from "./textIcon";

const NavbarList = () => {
  let [collapse, setCollapse] = useState(false);
  const handleClicked = () => {
    setCollapse(!collapse);
    // console.log(collapse);
  };
  return (
    <div
      className={`${!collapse ? "w-48 md:w-64 p-2" : "w-16 p-1"}  bg-base-100 border-r border-gray-300 rounded-b-md shadow-sm h-120 sticky top-20 overflow-scroll`}
    >
      <ul>
        <TextIcon
          icon={<i class="fa-solid fa-grip"></i>}
          text={!collapse && "Dashboard"}
        ></TextIcon>
        <TextIcon
          icon={<i class="fa-solid fa-book-open"></i>}
          // text="Courses"
          text={!collapse && "Courses"}
        ></TextIcon>
        <TextIcon
          icon={<i class="fa-solid fa-graduation-cap"></i>}
          // text="Student"
          text={!collapse && "Student"}
        ></TextIcon>
        <TextIcon
          icon={<i class="fa-solid fa-gear"></i>}
          // text="Settings"
          text={!collapse && "Settings"}
        ></TextIcon>
        <TextIcon
          icon={<i class="fa-solid fa-gear"></i>}
          // text="Settings"
          text={!collapse && "Settings"}
        ></TextIcon>
        <TextIcon
          icon={<i class="fa-solid fa-gear"></i>}
          // text="Settings"
          text={!collapse && "Settings"}
        ></TextIcon>
        <TextIcon
          icon={<i class="fa-solid fa-gear"></i>}
          // text="Settings"
          text={!collapse && "Settings"}
        ></TextIcon>
        <TextIcon
          icon={<i class="fa-solid fa-gear"></i>}
          // text="Settings"
          text={!collapse && "Settings"}
        ></TextIcon>
        <TextIcon
          icon={<i class="fa-solid fa-gear"></i>}
          // text="Settings"
          text={!collapse && "Settings"}
        ></TextIcon>
        <TextIcon
          icon={<i class="fa-solid fa-gear"></i>}
          // text="Settings"
          text={!collapse && "Settings"}
        ></TextIcon>
        <TextIcon
          icon={<i class="fa-solid fa-gear"></i>}
          // text="Settings"
          text={!collapse && "Settings"}
        ></TextIcon>
      </ul>
      <hr className="text-gray-300" />
      <div
        onClick={handleClicked}
        className="text-center p-2  text-[#00000690] text-xl hover:bg-gray-100 rounded-lg m-2"
      >
        <i class="fa-solid fa-angle-down"></i> {!collapse && "Collapse"}
      </div>
    </div>
  );
};

export default NavbarList;
