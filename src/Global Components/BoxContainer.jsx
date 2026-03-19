import React from "react";
import SquareIcon from "./squareIcon";

const BoxContainer = ({ title, bg, color, icon, number, parcentage }) => {
  return (
    <div className="card bg-base-100 grid justify-stretch shadow-sm p-5 relative  min-w-80 min-h-60 overflow-hidden">
      <h3 className="text-xl text-gray-500 font-semibold">{title}</h3>
      <span className="text-6xl font-bold">{number}</span>
      <p className="text-sm">
        <span className="text-green-500">
          <i class="fa-solid fa-arrow-up"></i> {parcentage}%
        </span>{" "}
        vs last year
      </p>
      <div className=" w-24 h-24 bg-gray-200 rounded-full absolute -right-7 -top-7">
        <div className="absolute bottom-2 left-2">
          <SquareIcon bg={bg} color={color} icon={icon}></SquareIcon>
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;
