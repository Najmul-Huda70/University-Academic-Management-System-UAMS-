import React from "react";

const CustomTooltipForPie = ({ active, payload }) => {
  if (active && payload && payload.length) {
    // payload[0].payload is the specific data object for the hovered slice
    const { name, teacher, color } = payload[0].payload;

    return (
      <div className="bg-white px-4 py-2 rounded-md border shadow-sm text-lg font-medium">
        <p style={{ color: color }}>
          {name} : {teacher}
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltipForPie;
