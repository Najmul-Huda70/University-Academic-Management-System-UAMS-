import React from "react";
import neu from "../../assets/neu.jpg";

const Routine = ({ course, routineRef }) => {
  // conditon takbe dite hobe apatoto data nai

  return (
    <>
      {/* Modal without duplicate id, with className corrected */}
      <dialog ref={routineRef} className="modal overflow-y-auto">
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
              <h2 className="text-xl font-semibold">Class Routine</h2>
              <div className="grid grid-cols-4 gap-2 justify-evenly items-center">
                <span>Day</span>
                <span className="col-span-2">Time</span>
                <span>Room</span>
                <span>SAT</span>
                <span className="col-span-2">9:00 AM - 10:30 AM</span>
                <span>403-A</span>
                <span>SUN</span>
                <span className="col-span-2">2:00 PM - 3:30 PM</span>
                <span>403-A</span>
                <span>WED</span>
                <span className="col-span-2">12:00 PM - 2:30 PM</span>
                <span>403-A</span>
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

export default Routine;
