import React from "react";
import BoxContainer from "../../Global Components/BoxContainer";
import Notice from "../../Global Components/Notice";
import Rechart from "./chart/Rechart";
import SearchInfo from "./SearchInfo";

const MainContainer = () => {
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
      <section className="grid grid-cols-1 justify-items-center sm:grid-cols-2  xl:grid-cols-4  mt-12 gap-5 lg:gap-12">
        <BoxContainer
          title="Total Students"
          bg="bg-blue-600"
          color="text-white"
          icon={<i class="fa-solid fa-graduation-cap"></i>}
          number={1500}
          parcentage={20.54}
        ></BoxContainer>
        <BoxContainer
          title="Total Teachers"
          bg="bg-green-600"
          color="text-white"
          icon={<i class="fa-solid fa-user-group"></i>}
          number={1500}
          parcentage={20.54}
        ></BoxContainer>
        <BoxContainer
          title="Total Courses"
          bg="bg-purple-600"
          color="text-white"
          icon={<i class="fa-brands fa-leanpub"></i>}
          number={1500}
          parcentage={20.54}
        ></BoxContainer>
        <BoxContainer
          title="Departments"
          bg="bg-yellow-600"
          color="text-white"
          icon={<i class="fa-solid fa-layer-group"></i>}
          number={1500}
          parcentage={20.54}
        ></BoxContainer>
      </section>
      {/* rechart */}
      <Rechart></Rechart>
      {/* Search for the information you need */}
      <SearchInfo></SearchInfo>
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
        <div className="w-full text-center">
          <button className="btn bg-blue-400 hover:bg-blue-500 text-lg font-semibold rounded-full text-white cursor-pointer">
            View All Notice <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default MainContainer;
