import React, { useState } from "react";
import DepartmentsInfo from "./DepartmentsInfo";
const departments = [
  {
    id: "DEPT-01",
    Department: "Bangla",
    Head_of_Department: "Dr. Hasan Karim",
    Students: 5,
    Courses: 12,
    Status: "Active",
  },
  {
    id: "DEPT-02",
    Department: "English",
    Head_of_Department: "Dr. Zaman Ali",
    Students: 5,
    Courses: 15,
    Status: "Active",
  },
  {
    id: "DEPT-03",
    Department: "Economics",
    Head_of_Department: "Dr. Sarah Islam",
    Students: 5,
    Courses: 14,
    Status: "Active",
  },
  {
    id: "DEPT-04",
    Department: "Computer Science & Engineering",
    Head_of_Department: "Dr. Abu Rayhan",
    Students: 5,
    Courses: 20,
    Status: "Active",
  },
  {
    id: "DEPT-05",
    Department: "Electrical and Electronic Engineering",
    Head_of_Department: "Dr. Tania Sultana",
    Students: 5,
    Courses: 18,
    Status: "Active",
  },
  {
    id: "DEPT-06",
    Department: "History and Archaeology",
    Head_of_Department: "Dr. Kamrul Islam",
    Students: 5,
    Courses: 10,
    Status: "Active",
  },
  {
    id: "DEPT-07",
    Department: "International Relations",
    Head_of_Department: "Dr. Mehedi Hasan",
    Students: 5,
    Courses: 11,
    Status: "Active",
  },
  {
    id: "DEPT-08",
    Department: "Development Studies",
    Head_of_Department: "Dr. Nazmul Huda",
    Students: 5,
    Courses: 13,
    Status: "Active",
  },
  {
    id: "DEPT-09",
    Department: "Accounting",
    Head_of_Department: "Dr. Jamil Hossain",
    Students: 5,
    Courses: 16,
    Status: "Active",
  },
  {
    id: "DEPT-10",
    Department: "Mathematics",
    Head_of_Department: "Dr. Anwar Hossain",
    Students: 0,
    Courses: 12,
    Status: "Active",
  },

  // ➕ Added data below

  {
    id: "DEPT-11",
    Department: "Physics",
    Head_of_Department: "Dr. Rashid Khan",
    Students: 6,
    Courses: 14,
    Status: "Active",
  },
  {
    id: "DEPT-12",
    Department: "Chemistry",
    Head_of_Department: "Dr. Farida Akter",
    Students: 4,
    Courses: 13,
    Status: "Active",
  },
  {
    id: "DEPT-13",
    Department: "Biology",
    Head_of_Department: "Dr. Shafiq Rahman",
    Students: 7,
    Courses: 15,
    Status: "Active",
  },
  {
    id: "DEPT-14",
    Department: "Statistics",
    Head_of_Department: "Dr. Imtiaz Ahmed",
    Students: 3,
    Courses: 11,
    Status: "Active",
  },
  {
    id: "DEPT-15",
    Department: "Philosophy",
    Head_of_Department: "Dr. Nasreen Sultana",
    Students: 2,
    Courses: 9,
    Status: "Active",
  },
  {
    id: "DEPT-16",
    Department: "Sociology",
    Head_of_Department: "Dr. Rezaul Karim",
    Students: 5,
    Courses: 12,
    Status: "Active",
  },
  {
    id: "DEPT-17",
    Department: "Political Science",
    Head_of_Department: "Dr. Aminul Islam",
    Students: 6,
    Courses: 14,
    Status: "Active",
  },
  {
    id: "DEPT-18",
    Department: "Law",
    Head_of_Department: "Dr. Mahmudul Hasan",
    Students: 8,
    Courses: 18,
    Status: "Active",
  },
  {
    id: "DEPT-19",
    Department: "Management",
    Head_of_Department: "Dr. Sharmeen Akter",
    Students: 7,
    Courses: 16,
    Status: "Active",
  },
  {
    id: "DEPT-20",
    Department: "Marketing",
    Head_of_Department: "Dr. Rakib Chowdhury",
    Students: 6,
    Courses: 15,
    Status: "Active",
  },
  {
    id: "DEPT-21",
    Department: "Finance",
    Head_of_Department: "Dr. Tanvir Alam",
    Students: 5,
    Courses: 14,
    Status: "Active",
  },
  {
    id: "DEPT-22",
    Department: "Geography",
    Head_of_Department: "Dr. Lutfun Nahar",
    Students: 4,
    Courses: 11,
    Status: "Active",
  },
  {
    id: "DEPT-23",
    Department: "Environmental Science",
    Head_of_Department: "Dr. Sadiqur Rahman",
    Students: 6,
    Courses: 13,
    Status: "Active",
  },
  {
    id: "DEPT-24",
    Department: "Psychology",
    Head_of_Department: "Dr. Nusrat Jahan",
    Students: 5,
    Courses: 12,
    Status: "Active",
  },
  {
    id: "DEPT-25",
    Department: "Public Administration",
    Head_of_Depment: "Dr. Khaled Mahmud",
    Students: 7,
    Courses: 15,
    Status: "Active",
  },
];

const Departments = () => {
  const itemsPerPage = 10;
  let [currentPage, setCurrentPage] = useState(1);
  const totalItems = departments.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let startIndex = (currentPage - 1) * itemsPerPage;
  const CurrentDepartments = departments.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  return (
    <div className="card bg-base-100 my-10 rounded-lg shadow-sm p-5 ">
      <h2 className="text-2xl font-semibold">Recent Departments</h2>
      <p className="text-gray-600 mt-2 mb-5">
        Top performing departments this year.
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
            <span className="col-span-3">Department</span>
            <span className="col-span-2">Head of Department</span>
            <span>Students</span>
            <span>Courses</span>
            <span>Status</span>
          </div>
        </div>
        {CurrentDepartments.map((data) => (
          <DepartmentsInfo key={data.id} data={data}></DepartmentsInfo>
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

export default Departments;
