import React from "react";
import courseDetails from "../../data/coursesDetails.json";
import SquareIcon from "../squareIcon";

const BooksNotes = ({ course, booksNotesRef }) => {
  const details = courseDetails.coursesMaterials;
  const courseSelect = details.find((c) => c.courseId === course.courseId);
  const books = courseSelect?.referenceBooks || [];
  const notes = courseSelect?.notes || [];
  // console.log(notes, books);
  return (
    <>
      {/* Modal without duplicate id, with className corrected */}
      <dialog ref={booksNotesRef} className="modal overflow-y-auto">
        <div className="text-black modal-box max-h-[95%] space-y-5">
          <h1 className="text-3xl text-blue-400 font-bold">
            {course.courseId}: {course.title}
          </h1>
          <div className="space-y-3">
            {/* books*/}
            <h2 className="text-2xl font-semibold">Books</h2>
            <div>
              {books.map((book, index) => (
                <div
                  key={index}
                  className="space-y-2 flex justify-between bg-gray-100 hover:bg-gray-200 px-2 rounded-lg items-center gap-5"
                >
                  <div className="text-start space-y-2">
                    {/*book title */}
                    <h2 className="text-xl text-green-600 font-semibold">
                      {book.title}
                    </h2>
                    <div className="flex gap-5 text-gray-600">
                      <div>
                        <span className="text-blue-500">Author:</span>{" "}
                        {book.author}
                      </div>
                      <div>
                        <span className="text-yellow-500">Addition:</span>{" "}
                        {book.addition}
                      </div>
                    </div>
                  </div>
                  <div>
                    <SquareIcon
                      bg="bg-gray-600"
                      icon={<i class="fa-solid fa-file-lines"></i>}
                    ></SquareIcon>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* notes */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Notes</h2>
            <div className="space-y-3">
              {notes.map((note, index) => (
                <div
                  key={index}
                  className="space-y-2 flex justify-between bg-gray-100 hover:bg-gray-200 px-2 rounded-lg items-center gap-5"
                >
                  <div className="text-start space-y-2">
                    {/*notes title */}
                    <h2 className="text-xl text-green-600 font-semibold">
                      {note.title}
                    </h2>
                    <div className="flex gap-5 text-gray-600">
                      <div>
                        <span className="text-blue-500">Chapter:</span>{" "}
                        {note.chapter}
                      </div>{" "}
                      <div>
                        <span className="text-emerald-700">Lecture:</span>{" "}
                        {note.lectureNo}
                      </div>{" "}
                      <div>
                        <span className="text-pink-500">Date:</span>{" "}
                        {note.lectureDate}
                      </div>{" "}
                    </div>
                  </div>
                  <div>
                    <SquareIcon
                      bg="bg-gray-600"
                      icon={<i class="fa-solid fa-file-lines"></i>}
                    ></SquareIcon>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default BooksNotes;
