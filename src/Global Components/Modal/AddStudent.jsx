import React from "react";
const data = [
  {
    id: 1,
    categories: "Student",
    title: ["Student", "Department", "Credits", "CGPA", "Status"],
  },
  {
    id: 2,
    categories: "Departments",
    title: [
      "Department",
      "Head of Department",
      "Students",
      "Courses",
      "Status",
    ],
  },
  {
    id: 3,
    categories: "Course",
    title: ["Course", "Department", "Teacher", "Credits", "Enrolled"],
  },
];
const addStudent = ({ activeId, addRef }) => {
  const cat = data.find((item) => activeId === item.id);
  // console.log(cat);
  return (
    <>
      <dialog ref={addRef} className="modal">
        <div className="modal-box max-h-[95%] container">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className=" mb-4 heading">Add New {cat.categories}</h3>

          <form className=" form flex flex-col gap-3">
            {cat.title.map((title, index) => (
              <>
                <div key={index}>
                  <input
                    required
                    className="input input-bordered w-full"
                    type="email"
                    placeholder={title}
                  />
                </div>
              </>
            ))}
            <button
              type="submit"
              className="btn btn-blue-600 bg-blue-600 text-white hover:bg-blue-700 mt-2"
            >
              Submit
            </button>
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default addStudent;
