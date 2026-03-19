import React from "react";
import TextIcon from "../../Global Components/textIcon";
const Profile = () => {
  return (
    <>
      <div class="dropdown dropdown-bottom  dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="btn btn-xl flex justify-center items-center gap-3 m-1 border-none"
        >
          <div className="w-10 h-10  flex justify-center items-center rounded-lg">
            <img
              className="w-10 h-10 rounded-lg"
              src="../../najmul huda.png"
              alt="Namul Huda"
            />
          </div>
          <div>
            <h3 className="text-left text-xl/4 font-semibold">Najmul Huda</h3>
            <p className="text-left text-gray-400 text-lg">Admin</p>
          </div>
          <div>
            <i class="text-gray-400 text-md fa-solid fa-angle-down"></i>
          </div>
        </div>
        <ul
          tabindex="-1"
          class="space-y-1 dropdown-content menu bg-base-100 rounded-box z-1 w-64 p-3 mt-2 mr-3 shadow-sm"
        >
          <li className="border-b-gray-200 border-b p-2">
            <h3 className="text-left text-xl/4 font-semibold">Najmul Huda</h3>
            <p className="text-left text-gray-400 text-lg">
              najmul.admin@gmail.com
            </p>
          </li>
          <TextIcon
            icon={<i class="fa-regular fa-user"></i>}
            text="Profile"
          ></TextIcon>
          <TextIcon
            icon={<i class="fa-solid fa-gear"></i>}
            text="Settings"
          ></TextIcon>
          <hr className="text-gray-200" />
          <TextIcon
            icon={<i class="fa-solid fa-arrow-right-from-bracket"></i>}
            text="Sign Out"
          ></TextIcon>
        </ul>
      </div>
    </>
  );
};

export default Profile;

{
  /* <TextIcon
          icon={<i class="fa-regular fa-user"></i>}
          text="Profile"
        ></TextIcon>
        <TextIcon
          icon={<i class="fa-solid fa-gear"></i>}
          text="Settings"
        ></TextIcon>

        <TextIcon
          icon={<i class="fa-solid fa-arrow-right-from-bracket"></i>}
          text="Sign Out"
        ></TextIcon> */
}
