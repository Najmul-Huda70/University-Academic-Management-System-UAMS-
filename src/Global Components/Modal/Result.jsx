import React from "react";
import StudentData from "../../data/students.json";
import neu from "../../assets/neu.jpg";
const Result = ({ course, resultRef }) => {
  const studentName = StudentData.find(
    (item) => item.id === "CSE-24-03",
  ).student_name;
  return (
    <>
      {/* Modal without duplicate id, with className corrected */}
      <dialog ref={resultRef} className="modal overflow-y-auto">
        <div className=" text-black modal-box space-y-5 ">
          <div className="flex gap-5">
            <div className="flex flex-wrap">
              <img className="w-18 h-23" src={neu} alt="logo" />
            </div>
            <div>
              <h1 className="text-2xl text-blue-400 font-bold">
                Netrokona University, Netrokona
              </h1>
              <h3 className="text-xl text-black">Depertmant of CSE(2022-23)</h3>
              <div className="text-gray-600">
                <span className="text-gray-800 font-semibold">2nd </span> Year{" "}
                <span className="text-gray-800 font-semibold">2nd </span>{" "}
                Semester
              </div>
            </div>
          </div>
          <div className="text-start">
            <h1 className="text-xl text-green-500 font-bold">
              {course.courseId}: {course.title}
            </h1>
            <h3>Course Teacher: Md Anwarul Islam Abir</h3>
            <div className="text-gray-500">Credits: {course.credits}</div>
          </div>
          <section>
            <div className="bg-slate-950 p-6 pt-2 rounded-xl text-white font-sans space-y-3">
              <h2 className="text-xl font-semibold">
                Result for{" "}
                <span className="text-yellow-200">{studentName}</span>
              </h2>

              <div className="grid grid-cols-4 gap-2 justify-evenly items-center">
                <span>Distribution</span>
                <span className="col-span-2">get Marks</span>
                <span>Marks</span>
                <span>MID</span>
                <span className="col-span-2">18</span>
                <span>20</span>
                <span>ATTENDANCE</span>
                <span className="col-span-2">10</span>
                <span>10</span>
                <span>ASSIGNMENT</span>
                <span className="col-span-2">10</span>
                <span>10</span>
                <span>FINAL</span>
                <span className="col-span-2">55</span>
                <span>60</span>
                <span className="text-green-300">TOTAL</span>
                <span className="col-span-2 text-green-300">93</span>
                <span className="text-green-300">100</span>
              </div>
            </div>
          </section>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Result;
