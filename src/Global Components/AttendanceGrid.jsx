import React from "react";

const AttendanceGrid = ({ studentName, data }) => {
  const attendance = data?.attendance || [];

  const getStatusColor = (status) => {
    switch (status) {
      case "on-time":
        return "bg-emerald-500"; // Green
      case "late":
        return "bg-orange-500"; // Orange
      default:
        return "bg-gray-50"; // Empty/Dark squares
    }
  };

  return (
    <div className="bg-slate-950 p-6 pt-2 rounded-xl text-white font-sans">
      <div className="text-xl font-semibold mb-4">
        Attendance for <span className="text-yellow-200">{studentName}</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Detailed View</h2>
        <div className="flex gap-2">
          <div className="flex items-center justify-center  gap-1">
            <div className="bg-emerald-500 w-5 h-5 rounded-sm" />
            <span>on-time</span>
          </div>
          <div className="flex gap-1">
            <div className="bg-orange-500 w-5 h-5 rounded-sm" />
            <span>late</span>
          </div>
          {/* <div className="flex gap-1">
            <div className="bg-gray-50 w-5 h-5 rounded-sm" />
            <span>absent</span>
          </div> */}
        </div>
      </div>

      <div className="flex gap-3">
        <div className="grid grid-cols-15 gap-2">
          {attendance.map((item, index) => {
            const { date, status } = item;
            // console.log(date, status);
            return (
              <div
                key={index}
                className={`${getStatusColor(status)} w-6 h-6 rounded-sm cursor-pointer`}
                title={`${date} - ${status}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AttendanceGrid;
