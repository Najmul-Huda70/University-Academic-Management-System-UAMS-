import React from "react";

const TextIcon = ({ icon, text }) => {
  return (
    <>
      <li className="p-2 text-gray-700 flex-row gap-3 text-xl hover:bg-gray-100 rounded-lg mb-1">
        {icon} {text}
      </li>
    </>
  );
};

export default TextIcon;
