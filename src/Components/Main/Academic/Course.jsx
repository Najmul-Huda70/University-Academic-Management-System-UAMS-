import React, { useRef } from "react";
import BooksNotes from "../../../Global Components/Modal/BooksNotes";
import Attendance from "../../../Global Components/Modal/Attendance";

const Course = ({ course }) => {
  const { courseId, title, credits, type, prerequisites } = course;
  const booksNotesRef = useRef(null);
  const attendanceRef = useRef(null);

  return (
    <div className="p-3 w-full shadow-sm rounded-lg">
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
            onClick={() => attendanceRef.current?.showModal()}
            className="button"
          >
            Attendance
          </button>
        </div>
      </div>
      <BooksNotes course={course} booksNotesRef={booksNotesRef}></BooksNotes>
      <Attendance course={course} attendanceRef={attendanceRef}></Attendance>
    </div>
  );
};

export default Course;
