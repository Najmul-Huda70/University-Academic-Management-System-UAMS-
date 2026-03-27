import React, { useState } from "react";
import StudentsInfo from "./StudentsInfo";
import studentsData from "../../../../data/students.json";
const Students = () => {
  const itemsPerPage = 10;
  let [currentPage, setCurrentPage] = useState(1);
  const totalItems = studentsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = studentsData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="card bg-base-100 my-10 rounded-lg shadow-sm p-5 ">
      <h2 className="text-2xl font-semibold">Recent Students</h2>
      <p className="text-gray-600 mt-2 mb-5">
        Top performing students this year.
      </p>
      <div className="p-3 flex justify-between items-center gap-5 pb-5 border-b border-gray-200">
        <div className="flex items-center h-10 w-full p-3 bg-white rounded-lg overflow-hidden pl-4 shadow-md cursor-pointer">
          <label htmlFor="input" className="px-3 cursor-pointer">
            <svg
              className="w-3.25"
              viewBox="0 0 512 512"
              fill="rgb(114,114,114)"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
            </svg>
          </label>
          <input
            type="text"
            placeholder="Search Students..."
            className="w-full border-none text-lg outline-none  caret-orange-500"
          />
        </div>
        <button className="btn btn-soft hover:text-white hover:bg-blue-600 w-20 text-lg">
          Filter
        </button>
      </div>
      <div className="m-5">
        <div className="hidden md:grid">
          <div className="grid grid-cols-8 text-center p-2">
            <span className="col-span-2">Student</span>
            <span className="col-span-3">Department</span>
            <span>Credits</span>
            <span>CGPA</span>
            <span>Status</span>
          </div>
        </div>

        {currentStudents.map((data) => (
          <StudentsInfo key={data.id} data={data}></StudentsInfo>
        ))}

        <div className="mt-5 flex justify-between items-center">
          <div>
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems}{" "}
            results
          </div>
          <div className="flex gap-2 text-gray-500">
            <button
              className="hover:bg-gray-200 rounded-lg flex items-center justify-center"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <div className="btn btn-active btn-sm bg-blue-500 text-white p-2 px-3">
              {currentPage}
            </div>
            <button
              className="hover:bg-gray-200 rounded-lg flex items-center justify-center"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage >= totalPages}
            >
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
