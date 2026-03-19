import React from "react";
import Search from "./Search";
import StudentInfo from "./StudentInfo";

const RecentStudents = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold">Recent Students</h2>
      <p className="text-gray-600 mt-2 mb-5">
        Top performing students this semester
      </p>
      <div className="card bg-base-100 rounded-lg shadow-sm p-5 ">
        <div className="p-3 flex justify-between items-center gap-5 pb-5 border-b border-gray-200">
          <Search></Search>
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
          <StudentInfo></StudentInfo>
          <StudentInfo></StudentInfo>
          <StudentInfo></StudentInfo>
          <StudentInfo></StudentInfo>
          <StudentInfo></StudentInfo>
          <StudentInfo></StudentInfo>
          <StudentInfo></StudentInfo>
          <StudentInfo></StudentInfo>
          <StudentInfo></StudentInfo>
          <StudentInfo></StudentInfo>
          <div className="mt-5 flex justify-between items-center">
            <div>Showing 1 to 10 of 10 results</div>
            <div className="text-gray-500">
              <i class="fa-solid fa-angle-left"></i>{" "}
              <span className="btn btn-active btn-sm bg-blue-500 text-white p-2 px-3">
                1
              </span>{" "}
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentStudents;
