import React, { useState } from "react";
import SquareIcon from "../../../../Global Components/squareIcon";
const DepartmentsInfo = ({ data }) => {
  // console.log(data);
  // handler
  let [status, setStatus] = useState(data.Status);
  // console.log(status);
  // console.log(data.Status);
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
      <div className="md:col-span-3 flex flex-col md:flex-row items-center gap-3">
        <SquareIcon
          bg="bg-blue-500"
          color="text-white"
          icon={<i class="fa-regular fa-building"></i>}
        ></SquareIcon>
        <div className="flex flex-col">
          <h4 className="text-xl text-start font-semibold">
            {data.Department}
          </h4>
          <p className="text-center md:text-start text-gray-600">{data.id}</p>
        </div>
      </div>
      <div className="md:col-span-2">{data.Head_of_Department}</div>
      <div>
        <span className="md:hidden">Students:</span> {data.Students}
      </div>
      <div>
        <span className="md:hidden">Courses:</span> {data.Courses}
      </div>
      <div className=" flex justify-center items-center">
        <div className=" h-6 flex gap-1 p-1 px-2 justify-center items-center text-green-600 bg-green-200 rounded-full">
          <div aria-label="info" class="status status-info"></div>{" "}
          <p>{status ? status : data.Status}</p>
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

export default DepartmentsInfo;
