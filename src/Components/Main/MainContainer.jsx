import React from "react";
import BoxContainer from "../../Global Components/BoxContainer";
import Notice from "../../Global Components/Notice";
import Rechart from "./chart/Rechart";
import SearchInfo from "./search Button/SearchInfo";
import Academic from "./Academic/Academic";
import Attendance from "../../Global Components/Modal/Attendance";
import Course from "./search Button/CoursesBtn/CoursesBTN";
import CoursesBTN from "./search Button/CoursesBtn/CoursesBTN";
const adminBox = [
  {
    title: "Total Students",
    number: 1500,
    percentage: 20.54,
    bg: "bg-blue-600",
    color: "text-white",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    title: "Total Teachers",
    number: 120,
    percentage: 15.2,
    bg: "bg-green-600",
    color: "text-white",
    icon: "fa-solid fa-user-group",
  },
  {
    title: "Total Courses",
    number: 75,
    percentage: 10.1,
    bg: "bg-purple-600",
    color: "text-white",
    icon: "fa-brands fa-leanpub",
  },
  {
    title: "Departments",
    number: 12,
    percentage: 5.25,
    bg: "bg-yellow-600",
    color: "text-white",
    icon: "fa-solid fa-layer-group",
  },
];
const studentBox = [
  {
    title: "Enrolled Courses",
    number: 5,
    percentage: 10.5,
    bg: "bg-blue-600",
    color: "text-white",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    title: "Active Courses",
    number: 3,
    percentage: 5.2,
    bg: "bg-green-600",
    color: "text-white",
    icon: "fa-solid fa-user-group",
  },
  {
    title: "Completed Tasks",
    number: 4,
    percentage: 12.3,
    bg: "bg-purple-600",
    color: "text-white",
    icon: "fa-brands fa-leanpub",
  },
  {
    title: "Pending Tasks",
    number: 1,
    percentage: -2.1,
    bg: "bg-yellow-600",
    color: "text-white",
    icon: "fa-solid fa-layer-group",
  },
];
const MainContainer = ({ role = "Student" }) => {
  const box = role === "admin" ? adminBox : studentBox;
  return (
    <div className=" w-full m-5">
      {/* dashboard title */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className=" md:flex-1">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-lg text-gray-600">
            Welcome back! Here's what's happening at your university.
          </p>
        </div>
        <div className=" text-end w-full md:flex-1">
          <span>Last updated:</span> <span className="font-bold">Just now</span>
        </div>
      </section>
      {/* box-container */}
      <section className="grid grid-cols-1 justify-items-center sm:grid-cols-2  xl:grid-cols-4  mt-12 gap-3 lg:gap-8">
        {box.map((card, index) => (
          <BoxContainer
            key={index}
            title={card.title}
            bg={card.bg}
            color={card.color}
            icon={<i className={card.icon}></i>}
            number={card.number}
            parcentage={card.percentage}
          ></BoxContainer>
        ))}
      </section>
      {/* rechart */}
      {/* <Rechart></Rechart> */}
      {/* Search for the information you need */}
      {/* <SearchInfo></SearchInfo> */}
      <CoursesBTN></CoursesBTN>
      {/* Notice */}
      <section className=" bg-white rounded-lg shadow-sm p-5 space-y-5">
        <div>
          <h2 className="text-2xl font-semibold">
            <i className="fa-solid fa-bullhorn"></i> Recent Notices
          </h2>
          <p className="mt-3 text-gray-500 text-md">
            Stay informed with the latest announcements and events at the
            Department of CSE.
          </p>
        </div>
        {/* notice.... */}
        <Notice></Notice>
        <Notice></Notice>
        <div></div>
        <div className="w-full text-center">
          <button className="button">
            View All Notice <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
      {/* Academic */}
      <Academic></Academic>
    </div>
  );
};

export default MainContainer;
