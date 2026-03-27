import React from "react";
import SquareIcon from "../../../../Global Components/squareIcon";
const CoursesInfo = ({ data }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 text-md justify-center items-center text-center p-2 hover:bg-gray-100  border-b border-b-gray-200 rounded-md">
      <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-3">
        <SquareIcon
          bg="bg-blue-500"
          color="text-white"
          icon={<i class="fa-brands fa-leanpub"></i>}
        ></SquareIcon>
        <div>
          <h4 className="text-sm font-semibold">{data.Course}</h4>
          <p className="text-center md:text-start text-gray-600">{data.id}</p>
        </div>
      </div>
      <div className="md:col-span-3">{data.Department}</div>
      <div>
        <span className="md:hidden">Teacher:</span> {data.Teacher}
      </div>
      <div>
        <span className="md:hidden">Credits:</span> {data.Credits}
      </div>
      <div className=" flex justify-center items-center">
        <div className="w-16 h-6 flex gap-1 p-1 justify-center items-center text-green-600 bg-green-200 rounded-full">
          <div aria-label="info" class="status status-info"></div>{" "}
          <p>{data.Enrolled}</p>
        </div>
      </div>
    </div>
  );
};

export default CoursesInfo;
