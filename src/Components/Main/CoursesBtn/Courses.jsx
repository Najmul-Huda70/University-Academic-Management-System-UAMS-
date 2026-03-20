import React, { useState } from "react";
import CoursesInfo from "./CoursesInfo";
const courses = [
  {
    id: "COUR-01",
    Course: "Bangla Literature",
    Department: "Bangla",
    Teacher: "Prof. Rahman",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-02",
    Course: "Modern Bangla Poetry",
    Department: "Bangla",
    Teacher: "Dr. Sultana",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-03",
    Course: "Advanced English Writing",
    Department: "English",
    Teacher: "Dr. Fariha Islam",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-04",
    Course: "English Linguistics",
    Department: "English",
    Teacher: "Prof. Sabbir Ahmed",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-05",
    Course: "Microeconomics",
    Department: "Economics",
    Teacher: "Dr. Hasan Mahmud",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-06",
    Course: "Macroeconomics",
    Department: "Economics",
    Teacher: "Dr. Ayesha Siddiqua",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-07",
    Course: "Data Structures",
    Department: "Computer Science & Engineering",
    Teacher: "Mr. Asif Ahmed",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-08",
    Course: "Algorithms",
    Department: "Computer Science & Engineering",
    Teacher: "Ms. Farhana Rimi",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-09",
    Course: "Circuit Analysis",
    Department: "Electrical and Electronic Engineering",
    Teacher: "Ms. Tania Sultana",
    Credits: 4,
    Enrolled: 5,
  },
  {
    id: "COUR-10",
    Course: "Digital Electronics",
    Department: "Electrical and Electronic Engineering",
    Teacher: "Mr. Asif Iqbal",
    Credits: 4,
    Enrolled: 5,
  },
  {
    id: "COUR-11",
    Course: "Bangla Drama",
    Department: "Bangla",
    Teacher: "Dr. Karim",
    Credits: 3,
    Enrolled: 4,
  },
  {
    id: "COUR-12",
    Course: "Creative Writing",
    Department: "English",
    Teacher: "Dr. Nusrat Jahan",
    Credits: 3,
    Enrolled: 6,
  },
  {
    id: "COUR-13",
    Course: "Development Economics",
    Department: "Economics",
    Teacher: "Dr. Sadia Afrin",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-14",
    Course: "Operating Systems",
    Department: "Computer Science & Engineering",
    Teacher: "Mr. Fahad Aziz",
    Credits: 3,
    Enrolled: 7,
  },
  {
    id: "COUR-15",
    Course: "Database Systems",
    Department: "Computer Science & Engineering",
    Teacher: "Ms. Sumaiya Akter",
    Credits: 3,
    Enrolled: 6,
  },
  {
    id: "COUR-16",
    Course: "Power Systems",
    Department: "Electrical and Electronic Engineering",
    Teacher: "Mr. Tanvir Hasan",
    Credits: 4,
    Enrolled: 5,
  },
  {
    id: "COUR-17",
    Course: "Thermodynamics",
    Department: "Physics",
    Teacher: "Dr. Rashid Khan",
    Credits: 3,
    Enrolled: 4,
  },
  {
    id: "COUR-18",
    Course: "Organic Chemistry",
    Department: "Chemistry",
    Teacher: "Dr. Farida Akter",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-19",
    Course: "Genetics",
    Department: "Biology",
    Teacher: "Dr. Shafiq Rahman",
    Credits: 3,
    Enrolled: 6,
  },
  {
    id: "COUR-20",
    Course: "Probability Theory",
    Department: "Statistics",
    Teacher: "Dr. Imtiaz Ahmed",
    Credits: 3,
    Enrolled: 4,
  },
  {
    id: "COUR-21",
    Course: "Ethics",
    Department: "Philosophy",
    Teacher: "Dr. Nasreen Sultana",
    Credits: 2,
    Enrolled: 3,
  },
  {
    id: "COUR-22",
    Course: "Social Research",
    Department: "Sociology",
    Teacher: "Dr. Rezaul Karim",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-23",
    Course: "Political Theory",
    Department: "Political Science",
    Teacher: "Dr. Aminul Islam",
    Credits: 3,
    Enrolled: 6,
  },
  {
    id: "COUR-24",
    Course: "Constitutional Law",
    Department: "Law",
    Teacher: "Dr. Mahmudul Hasan",
    Credits: 4,
    Enrolled: 7,
  },
  {
    id: "COUR-25",
    Course: "Principles of Management",
    Department: "Management",
    Teacher: "Dr. Sharmeen Akter",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-26",
    Course: "Marketing Strategy",
    Department: "Marketing",
    Teacher: "Dr. Rakib Chowdhury",
    Credits: 3,
    Enrolled: 6,
  },
  {
    id: "COUR-27",
    Course: "Financial Accounting",
    Department: "Accounting",
    Teacher: "Dr. Jamil Hossain",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-28",
    Course: "Corporate Finance",
    Department: "Finance",
    Teacher: "Dr. Tanvir Alam",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-29",
    Course: "Human Geography",
    Department: "Geography",
    Teacher: "Dr. Lutfun Nahar",
    Credits: 3,
    Enrolled: 4,
  },
  {
    id: "COUR-30",
    Course: "Climate Change",
    Department: "Environmental Science",
    Teacher: "Dr. Sadiqur Rahman",
    Credits: 3,
    Enrolled: 6,
  },
  {
    id: "COUR-31",
    Course: "Cognitive Psychology",
    Department: "Psychology",
    Teacher: "Dr. Nusrat Jahan",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-32",
    Course: "Public Policy",
    Department: "Public Administration",
    Teacher: "Dr. Khaled Mahmud",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-33",
    Course: "International Trade",
    Department: "International Relations",
    Teacher: "Dr. Mehedi Hasan",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-34",
    Course: "Peace Studies",
    Department: "International Relations",
    Teacher: "Dr. Tasnim Jara",
    Credits: 3,
    Enrolled: 4,
  },
  {
    id: "COUR-35",
    Course: "Rural Development",
    Department: "Development Studies",
    Teacher: "Dr. Nazmul Huda",
    Credits: 3,
    Enrolled: 6,
  },
  {
    id: "COUR-36",
    Course: "Urban Planning",
    Department: "Development Studies",
    Teacher: "Dr. Tania Shila",
    Credits: 3,
    Enrolled: 5,
  },
  {
    id: "COUR-37",
    Course: "Linear Algebra",
    Department: "Mathematics",
    Teacher: "Dr. Anwar Hossain",
    Credits: 3,
    Enrolled: 4,
  },
];
const Courses = () => {
  const itemsPerPage = 10;
  let [currentPage, setCurrentPage] = useState(1);
  const totalItems = courses.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCourse = courses.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="card bg-base-100 my-10 rounded-lg shadow-sm p-5 ">
      <h2 className="text-2xl font-semibold">Recent Courses</h2>
      <p className="text-gray-600 mt-2 mb-5">
        Top performing courses this year.
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
            <span className="col-span-2">Course</span>
            <span className="col-span-3">Department</span>
            <span>Teacher</span>
            <span>Credits</span>
            <span>Enrolled</span>
          </div>
        </div>
        {currentCourse.map((data) => (
          <CoursesInfo key={data.id} data={data}></CoursesInfo>
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

export default Courses;
