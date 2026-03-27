import React from "react";
import data from "../../../../src/data/Academic.json";
import Year from "./Year";
const dataY = data.academicActivities.years;
// console.log(dataY[0].semesters[0].courses[0]);
const Academic = () => {
  return (
    <>
      <section className="mt-10 p-5  bg-white shadow-sm rounded-lg">
        <h2 className="text-4xl font-bold">Academic Activities</h2>
        <p className="mt-2 mb-3">Honours Duration: 4 years with 8 semesters</p>
        <div className="flex justify-center">
          <input
            className="w-[85%] text-xl bg-white p-1 px-4 rounded-full"
            type="text"
            name=""
            id="Search"
            placeholder="Search for courses,subjects,codes..."
          />
        </div>
        {/*Year*/}
        {dataY.map((year, index) => (
          <Year key={index} year={year} />
        ))}
      </section>
    </>
  );
};

export default Academic;
