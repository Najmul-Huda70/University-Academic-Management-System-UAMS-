import React from "react";
import StudentData from "../../data/students.json";
import AttendanceData from "../../data/Attendance.json";
import neu from "../../assets/neu.jpg";
import AttendanceGrid from "../AttendanceGrid";
const Attendance = ({ course, attendanceRef }) => {
  // conditon takbe dite hobe apatoto data nai
  const attendanceData = AttendanceData.find((item) => item.id === "CSE-24-03");
  const studentName = StudentData.find(
    (item) => item.id === "CSE-24-03",
  ).student_name;

  return (
    <>
      {/* Modal without duplicate id, with className corrected */}
      <dialog ref={attendanceRef} className="modal overflow-y-auto">
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
            <h3>Course Teacher: Md. Khabir Uddin Ahamed</h3>
            <div className="text-gray-500">Credits: {course.credits}</div>
          </div>
          <section>
            <AttendanceGrid
              studentName={studentName}
              data={attendanceData}
            ></AttendanceGrid>
          </section>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Attendance;
