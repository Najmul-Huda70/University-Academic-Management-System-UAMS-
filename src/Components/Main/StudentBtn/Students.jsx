import React, { useState } from "react";
import StudentsInfo from "./StudentsInfo";
const studentsData = [
  {
    id: "BNG-24-01",
    student_name: "Arif Hossain",
    dept: "Bangla",
    credits: 120,
    cgpa: 3.45,
    status: "Active",
  },
  {
    id: "BNG-24-02",
    student_name: "Sultana Razia",
    dept: "Bangla",
    credits: 115,
    cgpa: 3.6,
    status: "Active",
  },
  {
    id: "BNG-24-03",
    student_name: "Tanvir Rahman",
    dept: "Bangla",
    credits: 110,
    cgpa: 3.2,
    status: "Active",
  },
  {
    id: "BNG-24-04",
    student_name: "Mitu Akter",
    dept: "Bangla",
    credits: 125,
    cgpa: 3.8,
    status: "Active",
  },
  {
    id: "BNG-24-05",
    student_name: "Robiul Islam",
    dept: "Bangla",
    credits: 100,
    cgpa: 3.1,
    status: "Inactive",
  },

  {
    id: "ENG-24-01",
    student_name: "Nabil Ahmed",
    dept: "English",
    credits: 122,
    cgpa: 3.55,
    status: "Active",
  },
  {
    id: "ENG-24-02",
    student_name: "Fariha Islam",
    dept: "English",
    credits: 118,
    cgpa: 3.72,
    status: "Active",
  },
  {
    id: "ENG-24-03",
    student_name: "Sabbir Ahmed",
    dept: "English",
    credits: 112,
    cgpa: 3.3,
    status: "Active",
  },
  {
    id: "ENG-24-04",
    student_name: "Anika Tabassum",
    dept: "English",
    credits: 128,
    cgpa: 3.85,
    status: "Active",
  },
  {
    id: "ENG-24-05",
    student_name: "Imran Khan",
    dept: "English",
    credits: 90,
    cgpa: 2.95,
    status: "Active",
  },

  {
    id: "ECO-24-01",
    student_name: "Sadia Afrin",
    dept: "Economics",
    credits: 115,
    cgpa: 3.65,
    status: "Active",
  },
  {
    id: "ECO-24-02",
    student_name: "Jahid Hasan",
    dept: "Economics",
    credits: 120,
    cgpa: 3.4,
    status: "Active",
  },
  {
    id: "ECO-24-03",
    student_name: "Ayesha Siddiqua",
    dept: "Economics",
    credits: 110,
    cgpa: 3.75,
    status: "Active",
  },
  {
    id: "ECO-24-04",
    student_name: "Hasan Mahmud",
    dept: "Economics",
    credits: 130,
    cgpa: 3.15,
    status: "Graduated",
  },
  {
    id: "ECO-24-05",
    student_name: "Rupa Khatun",
    dept: "Economics",
    credits: 105,
    cgpa: 3.5,
    status: "Active",
  },

  {
    id: "CSE-24-01",
    student_name: "Rahat Kabir",
    dept: "Computer Science & Engineering",
    credits: 140,
    cgpa: 3.92,
    status: "Active",
  },
  {
    id: "CSE-24-02",
    student_name: "Sumaiya Akter",
    dept: "Computer Science & Engineering",
    credits: 135,
    cgpa: 3.88,
    status: "Active",
  },
  {
    id: "CSE-24-03",
    student_name: "Fahad Aziz",
    dept: "Computer Science & Engineering",
    credits: 128,
    cgpa: 3.7,
    status: "Active",
  },
  {
    id: "CSE-24-04",
    student_name: "Farhana Rimi",
    dept: "Computer Science & Engineering",
    credits: 145,
    cgpa: 3.98,
    status: "Active",
  },
  {
    id: "CSE-24-05",
    student_name: "Zubair Ahmed",
    dept: "Computer Science & Engineering",
    credits: 120,
    cgpa: 3.5,
    status: "Active",
  },

  {
    id: "HIS-24-01",
    student_name: "Kamrul Islam",
    dept: "History and Archaeology",
    credits: 110,
    cgpa: 3.1,
    status: "Active",
  },
  {
    id: "HIS-24-02",
    student_name: "Sonia Akter",
    dept: "History and Archaeology",
    credits: 105,
    cgpa: 3.4,
    status: "Active",
  },
  {
    id: "HIS-24-03",
    student_name: "Yasin Arafat",
    dept: "History and Archaeology",
    credits: 100,
    cgpa: 3.25,
    status: "Active",
  },
  {
    id: "HIS-24-04",
    student_name: "Nadia Sultana",
    dept: "History and Archaeology",
    credits: 115,
    cgpa: 3.62,
    status: "Active",
  },
  {
    id: "HIS-24-05",
    student_name: "Liza Joy",
    dept: "History and Archaeology",
    credits: 120,
    cgpa: 3.35,
    status: "Active",
  },

  {
    id: "IR-24-01",
    student_name: "Mehedi Hasan",
    dept: "International Relations",
    credits: 118,
    cgpa: 3.58,
    status: "Active",
  },
  {
    id: "IR-24-02",
    student_name: "Tasnim Jara",
    dept: "International Relations",
    credits: 114,
    cgpa: 3.68,
    status: "Active",
  },
  {
    id: "IR-24-03",
    student_name: "Mahbub Alam",
    dept: "International Relations",
    credits: 125,
    cgpa: 3.2,
    status: "Active",
  },
  {
    id: "IR-24-04",
    student_name: "Salma Begum",
    dept: "International Relations",
    credits: 110,
    cgpa: 3.45,
    status: "Active",
  },
  {
    id: "IR-24-05",
    student_name: "Rakibul Islam",
    dept: "International Relations",
    credits: 108,
    cgpa: 3.3,
    status: "Active",
  },

  {
    id: "DS-24-01",
    student_name: "Nazmul Huda",
    dept: "Development Studies",
    credits: 112,
    cgpa: 3.52,
    status: "Active",
  },
  {
    id: "DS-24-02",
    student_name: "Tania Shila",
    dept: "Development Studies",
    credits: 116,
    cgpa: 3.75,
    status: "Active",
  },
  {
    id: "DS-24-03",
    student_name: "Ariful Islam",
    dept: "Development Studies",
    credits: 120,
    cgpa: 3.42,
    status: "Active",
  },
  {
    id: "DS-24-04",
    student_name: "Sabbir Hossain",
    dept: "Development Studies",
    credits: 105,
    cgpa: 3.18,
    status: "Active",
  },
  {
    id: "DS-24-05",
    student_name: "Mitu Khatun",
    dept: "Development Studies",
    credits: 122,
    cgpa: 3.6,
    status: "Active",
  },

  {
    id: "EEE-24-01",
    student_name: "Asif Iqbal",
    dept: "Electrical and Electronic Engineering",
    credits: 140,
    cgpa: 3.85,
    status: "Active",
  },
  {
    id: "EEE-24-02",
    student_name: "Rina Akter",
    dept: "Electrical and Electronic Engineering",
    credits: 138,
    cgpa: 3.72,
    status: "Active",
  },
  {
    id: "EEE-24-03",
    student_name: "Kaiser Ahmed",
    dept: "Electrical and Electronic Engineering",
    credits: 130,
    cgpa: 3.4,
    status: "Active",
  },
  {
    id: "EEE-24-04",
    student_name: "Shanta Islam",
    dept: "Electrical and Electronic Engineering",
    credits: 145,
    cgpa: 3.9,
    status: "Active",
  },
  {
    id: "EEE-24-05",
    student_name: "Tanvir Hasan",
    dept: "Electrical and Electronic Engineering",
    credits: 132,
    cgpa: 3.55,
    status: "Active",
  },

  {
    id: "ACC-24-01",
    student_name: "Jamil Hossain",
    dept: "Accounting",
    credits: 125,
    cgpa: 3.65,
    status: "Active",
  },
  {
    id: "ACC-24-02",
    student_name: "Farhana Kabir",
    dept: "Accounting",
    credits: 120,
    cgpa: 3.78,
    status: "Active",
  },
  {
    id: "ACC-24-03",
    student_name: "Sajid Ahmed",
    dept: "Accounting",
    credits: 115,
    cgpa: 3.35,
    status: "Active",
  },
  {
    id: "ACC-24-04",
    student_name: "Nilufa Akter",
    dept: "Accounting",
    credits: 128,
    cgpa: 3.82,
    status: "Active",
  },
  {
    id: "ACC-24-05",
    student_name: "Alamin Khan",
    dept: "Accounting",
    credits: 110,
    cgpa: 3.15,
    status: "Active",
  },
];
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
