import React, { useRef } from "react";
import BooksNotes from "../../../Global Components/Modal/BooksNotes";
import Attendance from "../../../Global Components/Modal/Attendance";
import Routine from "../../../Global Components/Modal/Routine";
import Result from "../../../Global Components/Modal/Result";
import Outline from "../../../Global Components/Modal/Outline";

const Course = ({ course }) => {
  const { courseId, title, credits, type, prerequisites } = course;
  const booksNotesRef = useRef(null);
  const outlineRef = useRef(null);
  const attendanceRef = useRef(null);
  const routineRef = useRef(null);
  const resultRef = useRef(null);
  // console.log("code:", courseId);
  return (
    <div className="p-5 w-full shadow-md rounded-lg card-1">
      <h3 className="mb-3 text-blue-400 text-xl font-bold">
        {courseId}: {title}
      </h3>
      <div className="flex justify-center gap-2 flexCol">
        <div className="px-2 bg-gray-300 rounded-full text-black">
          Credits: {credits}
        </div>
        <div className="px-2 bg-gray-300 rounded-full text-black">
          Type: {type}
        </div>
        <div className="px-2 bg-gray-300 rounded-full text-black">
          Prerequisites: {prerequisites || "N/A"}
        </div>
      </div>
      <h4 className="mt-5 mb-3 text-red-600 text-xl font-semibold">
        Class Routine & Result:
      </h4>
      <div className="flex justify-center gap-3 flexCol">
        <div>
          <button
            onClick={() => routineRef.current?.showModal()}
            className="button"
          >
            Class Routine
          </button>
        </div>
        <div>
          <button
            onClick={() => resultRef.current?.showModal()}
            className="button"
          >
            Result
          </button>
        </div>
      </div>
      <h4 className="mt-5 mb-3 text-green-600 text-xl font-semibold">
        Course Materials:
      </h4>
      <div className="flex justify-center gap-3 flexCol">
        <div>
          <button
            onClick={() => booksNotesRef.current?.showModal()}
            className="button"
          >
            Books & Notes
          </button>
        </div>
        <div>
          <button
            onClick={() => outlineRef.current?.showModal()}
            className="button"
          >
            Outline
          </button>
        </div>
        <div>
          <button
            onClick={() => attendanceRef.current?.showModal()}
            className="button"
          >
            Attendance
          </button>
        </div>
      </div>

      <BooksNotes course={course} booksNotesRef={booksNotesRef}></BooksNotes>
      <Outline course={course} outlineRef={outlineRef}></Outline>
      <Attendance course={course} attendanceRef={attendanceRef}></Attendance>
      <Routine course={course} routineRef={routineRef}></Routine>
      <Result course={course} resultRef={resultRef}></Result>
    </div>
  );
};

export default Course;
