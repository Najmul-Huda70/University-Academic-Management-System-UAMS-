import React from "react";

const CustomLegend = ({ payload }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-6 p-4 border rounded-xl bg-gray-50 shadow-inner">
      {payload.map((data, index) => (
        <div key={`item-${index}`} className="flex items-center space-x-2">
          {/* The "Checkbox" style color indicator */}
          <div
            className="w-4 h-4 rounded-sm border shadow-sm"
            style={{ backgroundColor: data.payload.color }}
          />
          <span className="text-sm font-semibold text-gray-700">
            {data.payload.name}:
            <span className="ml-1 text-gray-500 font-normal">
              {data.payload.teacher}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;
