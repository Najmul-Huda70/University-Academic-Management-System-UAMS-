import React from "react";
import Semester from "./Semester";

const Year = ({ year }) => {
  //   console.log(year);
  return (
    <>
      <details className="text-white mt-5">
        <summary className="bg-blue-400 text-xl font-semibold rounded-lg p-2 px-3 flex justify-between items-center cursor-pointer">
          {year.year}
          <span className="transition-transform group-open:rotate-180">▼</span>
        </summary>
        <div className=" shadow-sm m-3 p-2 rounded-lg space-y-2">
          {/* semester */}
          {year.semesters.map((sem, index) => (
            <Semester key={index} sem={sem}></Semester>
          ))}
        </div>
      </details>
    </>
  );
};

export default Year;
