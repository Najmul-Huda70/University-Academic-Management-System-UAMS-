import React from "react";
import SquareIcon from "../../../Global Components/squareIcon";
const DepartmentsInfo = ({ data }) => {
  console.log(data);
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
        <div className="w-16 h-6 flex gap-1 p-1 justify-center items-center text-green-600 bg-green-200 rounded-full">
          <div aria-label="info" class="status status-info"></div>{" "}
          <p>{data.Status}</p>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsInfo;
