import React, { useState } from "react";

const Mode = () => {
  let [dark, setDark] = useState(false);
  const handleClicked = () => {
    setDark(!dark);
  };
  return (
    <div
      onClick={handleClicked}
      className={` w-10 h-10 flex justify-center items-center rounded-lg ${dark ? "bg-black" : "bg-gray-200"}`}
    >
      {dark ? (
        <i class="fa-regular fa-moon text-white"></i>
      ) : (
        <i class="fa-regular fa-moon text-black"></i>
      )}
    </div>
  );
};

export default Mode;
