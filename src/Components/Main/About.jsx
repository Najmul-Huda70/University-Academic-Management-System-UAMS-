import React from "react";

const About = () => {
  return (
    <section className=" bg-white rounded-lg">
      <div className=" flex items-center gap-1">
        <i className="text-2xl fa-solid fa-people-roof"></i>
        <h3 className="text-2xl font-bold">About Us</h3>
      </div>
      <div className=" grid gap-3">
        <div className=" col-span-3 row-span-2">
          <img
            className="rounded-lg"
            src="./image/batch-04.png"
            alt="Batch-04"
          />
        </div>
        <div className=" col-span-3">
          <p>
            We are University 5th / CSE 4th Batch students of the Department of
            Computer Science and Engineering at Netrokona University, Netrokona.
            This portal is designed to help us share resources, notes, and study
            materials for our academic courses. Our batch started in October
            2023 and consists of talented students from all over Bangladesh. We
            are committed to excellence in learning and research in the field of
            Computer Science and Engineering.
          </p>
        </div>
        <div className="card bg-[#1055C9] rounded-lg">
          <h2 className="text-2xl font-bold">31</h2>
          <p>Students</p>
        </div>
        <div className="card bg-[#1055C9] rounded-lg">
          <h2 className="text-2xl font-bold">2nd</h2>
          <p>Year</p>
        </div>
        <div className="card bg-[#1055C9] rounded-lg">
          <h2 className="text-2xl font-bold">2nd</h2>
          <p>Semester</p>
        </div>
      </div>
    </section>
  );
};

export default About;
