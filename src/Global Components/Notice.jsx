import React from "react";

const Notice = () => {
  return (
    <div className="flex flex-col md:flex-row shadow gap-2 rounded-lg">
      <div className=" bg-blue-400 p-4 flex justify-center items-center  rounded-t-lg md:rounded-l-lg">
        <div className="flex gap-3 md:flex-col  text-white text-2xl text-center font-bold">
          <span>01</span>
          <span>Feb</span>
          <span>2026</span>
        </div>
      </div>
      <div className="space-y-3 m-3">
        <div className="title">
          <h1 className="text-blue-400 text-xl md:text-3xl font-bold">
            Election holiday notice
          </h1>
        </div>
        <div className="parra">
          <p className="text-sm md:text-md text-gray-700">
            This is to inform all the public that, in view of the 10th National
            Assembly Elections and the upcoming General Elections, the
            Government has announced the 6th and 8th working days of the 11th
            and 12th February 2026 for all Government, Semi-Government,
            Political and Civil Service Officers/Employees and Government, Civil
            Service Teachers/Employees during the period of the Elections and
            the Elections.
          </p>
        </div>
        <div className="details flex flex-col gap-3 sm:flex-row justify-center sm:justify-between">
          <div className="text-sm flex flex-col sm:flex-row  justify-center items-center gap-2">
            <p className="w-16 p-1 text-white flex justify-center items-center bg-blue-400 rounded-full">
              <span>Holiday</span>
            </p>
            <div className="post flex gap-1 items-center text-gray-500">
              <i className="fa-regular fa-user"></i>
              <p>Posted by: Academic Office</p>
            </div>
          </div>
          <div className="read-more text-red-500 font-semibold text-center">
            <a href="">
              read more <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
