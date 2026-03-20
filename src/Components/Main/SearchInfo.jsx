import React, { useState } from "react";
import Students from "./StudentBtn/Students";
import Departments from "./DepartmentsBtn/Departments";
import Courses from "./CoursesBtn/Courses";

// console.log(title[0].name);
const SearchInfo = () => {
  let [activeId, setActiveId] = useState(1);
  console.log(activeId);
  return (
    <>
      <h2 className="text-3xl mt-5 text-blue-400 font-semibold">
        Search for the information you need
      </h2>
      <div className="flex gap-5 text-xl  mt-3">
        <button
          onClick={() => setActiveId(1)}
          className={`btn btn-soft btn-primary ${activeId === 1 ? "bg-blue-700 text-white" : ""}`}
        >
          Students
        </button>
        <button
          onClick={() => setActiveId(2)}
          className={`btn btn-soft btn-primary ${activeId === 2 ? "bg-blue-700 text-white" : ""}`}
        >
          Departments
        </button>
        <button
          onClick={() => setActiveId(3)}
          className={`btn btn-soft btn-primary ${activeId === 3 ? "bg-blue-700 text-white" : ""}`}
        >
          Courses
        </button>
      </div>
      {activeId === 1 ? (
        <Students></Students>
      ) : activeId === 2 ? (
        <Departments></Departments>
      ) : (
        <Courses></Courses>
      )}
    </>
  );
};

export default SearchInfo;
