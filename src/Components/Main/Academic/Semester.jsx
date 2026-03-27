import React from "react";
import Course from "./Course";

const Semester = ({ sem }) => {
  // console.log(sem);
  return (
    <>
      <details className="group">
        <summary className="bg-red-600 text-lg font-semibold p-2 px-3 rounded-md flex justify-between items-center cursor-pointer">
          {sem.semester}
          <span className="transition-transform group-open:rotate-180">▼</span>
        </summary>

        <div className="m-1 p-2 grid grid-cols-2 justify-center text-center gap-5 shadow-sm rounded-lg">
          {sem.courses.map((course, index) => (
            <Course key={index} course={course} />
          ))}
        </div>
      </details>
    </>
  );
};

export default Semester;
