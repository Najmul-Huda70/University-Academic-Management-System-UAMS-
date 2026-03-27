import React, { useState } from "react";

const StudentsInfo = ({ data }) => {
  let shortName;
  const words = data.student_name.trim().split(" ");
  const shortWord = words.map((word) => word[0].toUpperCase());
  shortName = shortWord.slice(0, 2).join(""); //default size 2
  // console.log(data);

  // handler
  let [status, setStatus] = useState(data.status);
  // console.log(status);
  const handleAction = (action) => {
    console.log("Clicked Action:", action);
    setStatus(action);
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 text-md justify-center items-center text-center p-2 hover:bg-gray-100  border-b border-b-gray-200 rounded-md">
      <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-3">
        <div className="w-10 h-10 bg-blue-400 font-semibold  text-white flex justify-center items-center rounded-full">
          {shortName}
        </div>
        <div>
          <h4 className="text-xl font-semibold">{data.student_name}</h4>
          <p className="text-center md:text-start text-gray-600">{data.id}</p>
        </div>
      </div>
      <div className="md:col-span-3">{data.dept}</div>
      <div>
        <span className="md:hidden">Credits:</span> {data.credits}
      </div>
      <div>
        <span className="md:hidden">CGPA:</span> {data.cgpa}
      </div>
      <div className=" flex justify-center items-center">
        <div className="h-6 flex gap-1 p-1 px-2 justify-center items-center text-green-600 bg-green-200 rounded-full">
          <div aria-label="info" class="status status-info"></div>{" "}
          <p>{status ? status : data.status}</p>
        </div>
        {/* dropdown */}
        <div className="dropdown dropdown-top dropdown-end">
          <button tabIndex="0" className="cursor-pointer">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <ul
            tabIndex="-1"
            className="dropdown-content text-lg bg-base-100 rounded-box z-1 w-28 p-2 bottom-8 shadow-sm"
          >
            <li
              onClick={() => handleAction("Active")}
              className="hover:bg-gray-100 rounded-md p-1 cursor-pointer"
            >
              Active
            </li>
            <li
              onClick={() => handleAction("Pending")}
              className="hover:bg-gray-100 rounded-md p-1 cursor-pointer"
            >
              Pending
            </li>
            <li
              onClick={() => handleAction("graduate")}
              className="hover:bg-gray-100 rounded-md p-1 cursor-pointer"
            >
              graduate
            </li>
            <li
              onClick={() => handleAction("Remove")}
              className="hover:bg-red-50 text-red-600 rounded-md p-1 cursor-pointer"
            >
              Remove
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentsInfo;
