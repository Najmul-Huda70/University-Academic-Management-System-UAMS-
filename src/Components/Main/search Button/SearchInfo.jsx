import React, { useRef, useState } from "react";
import Students from "./StudentBtn/Students";
import Departments from "./DepartmentsBtn/Departments";
import Courses from "./CoursesBtn/Courses";
import AddStudent from "../../../Global Components/Modal/AddStudent";
// console.log(title[0].name);
const SearchInfo = () => {
  let [activeId, setActiveId] = useState(1);
  const addRef = useRef(null);
  // console.log(activeId);
  return (
    <>
      <h2 className="text-3xl mt-5 text-blue-400 font-semibold">
        University Database Explorer
      </h2>
      <p className="text-lg text-gray-500">
        Select a category below to view detailed information and manage
        university data.
      </p>
      <div className="flex justify-between gap-5">
        <div className="flex gap-3 text-xl  mt-3">
          <button
            onClick={() => setActiveId(1)}
            className={`btn btn-soft btn-primary text-lg hover:bg-blue-500 ${activeId === 1 ? "bg-blue-600 text-white" : ""}`}
          >
            Students
          </button>
          <button
            onClick={() => setActiveId(2)}
            className={`btn btn-soft btn-primary text-lg hover:bg-blue-500  ${activeId === 2 ? "bg-blue-600 text-white" : ""}`}
          >
            Departments
          </button>
          <button
            onClick={() => setActiveId(3)}
            className={`btn btn-soft btn-primary text-lg hover:bg-blue-500  ${activeId === 3 ? "bg-blue-600 text-white" : ""}`}
          >
            Courses
          </button>
        </div>
        <div>
          <button
            onClick={() => addRef.current.showModal()}
            className="add-button flex items-center"
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                fill="currentColor"
              ></path>
            </svg>{" "}
            add{" "}
            {activeId === 1
              ? "student"
              : activeId === 2
                ? "department"
                : "course"}
          </button>
        </div>
      </div>
      {activeId === 1 ? (
        <Students></Students>
      ) : activeId === 2 ? (
        <Departments></Departments>
      ) : (
        <Courses></Courses>
      )}
      <AddStudent activeId={activeId} addRef={addRef}></AddStudent>
    </>
  );
};

export default SearchInfo;
