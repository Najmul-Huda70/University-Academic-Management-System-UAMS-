import React from "react";
import StudentData from "../../data/students.json";
import AttendanceData from "../../data/Attendance.json";
import neu from "../../assets/neu.jpg";
import AttendanceGrid from "../AttendanceGrid";
const Outline = ({ course, outlineRef }) => {
  // conditon takbe dite hobe apatoto data nai

  return (
    <>
      {/* Modal without duplicate id, with className corrected */}
      <dialog ref={outlineRef} className="modal overflow-y-auto">
        <div className=" text-black modal-box max-h-[95%] space-y-5 ">
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
          <section className="text-start">
            <span className="text-gray-950 font-semibold">Introduction:</span>{" "}
            General overview and purpose of Database Management Systems (DBMSs),
            advantages, applications, common features and overall structure of
            the database.
            <span className="text-gray-950 font-semibold">
              Data modeling (Relational model):
            </span>{" "}
            structure of relational model, key constraints, referential
            integrity constraints, general constraints, Relational algebra:
            fundamental, additional and extended operations, aggregate
            functions, outer joins and database modification using RA. ER model:
            entity and relationship sets, constraints key, mapping cardinality
            and participation constraints, strong and weak entity sets, E-R
            diagram, class hierarchies, aggregation, conceptual database design
            with the ER model, converting ER to relational model.
            <span className="text-gray-950 font-semibold">
              Database application development (SQL):
            </span>{" "}
            data definition and data manipulation languages, integrity
            constraints, basic queries, nested and complex queries, modification
            of the database, Views: definition, update on views, cursors,
            Extending DBMS functionality: stored procedures, assertions and
            triggers, embedded and dynamic SQL, DBMS administration: DBA, users,
            privileges, security etc.
            <span className="text-gray-950 font-semibold">
              Relational database design:
            </span>{" "}
            Features of good relational design, functional dependency theory -
            basic concept, uses, closure of a set of FDs, closure of attribute
            sets, canonical cover, algorithms for FDs, decomposition using FDs &
            its desirable properties, Normalization: atomic domains and first
            normal form, BCNF and 3NF, multi-valued dependencies and fourth
            normal form, decomposition algorithms for different normal forms,
            database design process.
          </section>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Outline;
