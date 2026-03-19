import React from "react";

const SquareIcon = ({ bg = "bg-blue-600", color = "text-white", icon }) => {
  return (
    <div
      className={`${bg} ${color} text-2xl w-12 h-12 flex justify-center items-center rounded-lg`}
    >
      {icon}
    </div>
  );
};

export default SquareIcon;
