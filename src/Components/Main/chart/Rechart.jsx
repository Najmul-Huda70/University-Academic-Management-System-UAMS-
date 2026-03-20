import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomTooltipForPie from "./CustomTooltipForPie";
import CustomLegend from "./CustomLegend";
const data = [
  { name: "Bangla", student: 100, teacher: 10, color: "#FF6384" },
  { name: "English", student: 120, teacher: 12, color: "#36A2EB" },
  { name: "Economics", student: 80, teacher: 8, color: "#FFCE56" },
  {
    name: "Computer Science & Engineering",
    student: 150,
    teacher: 15,
    color: "#4BC0C0",
  },
  {
    name: "History and Archaeology",
    student: 60,
    teacher: 6,
    color: "#9966FF",
  },
  {
    name: "International Relations",
    student: 90,
    teacher: 9,
    color: "#FF9F40",
  },
  { name: "Development Studies", student: 70, teacher: 7, color: "#8DD17E" },
  {
    name: "Electrical and Electronic Engineering",
    student: 40,
    teacher: 5,
    color: "#C9CBCF",
  },
  { name: "Accounting", student: 40, teacher: 4, color: "#FF6F91" },
  { name: "General Education", student: 50, teacher: 10, color: "#00C9A7" },
];
// Total students
// const total = data.reduce((acc, cur) => acc + cur.value, 0);

const Rechart = () => {
  return (
    <div className="flex flex-col gap-5 mt-10 ">
      <div className="p-4 card rounded-lg h-140 bg-white shadow-sm">
        <h3 className="text-2xl mb-2 font-semibold">Department Distribution</h3>
        <p className="text-lg mb-5 text-gray-600">Students by department</p>
        <ResponsiveContainer>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis type="number"></XAxis>
            <YAxis dataKey={"name"} type="category" width={280}></YAxis>
            <Tooltip content={<CustomTooltip></CustomTooltip>}></Tooltip>
            <Bar dataKey={"student"} barSize={18}>
              {data.map((dept, index) => (
                <Cell key={index} fill={dept.color}></Cell>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="card rounded-lg h-120 bg-white shadow-sm p-4">
        <h3 className="text-2xl mb-2 font-semibold">Department Distribution</h3>
        <p className="text-lg mb-5 text-gray-600">Teachers by department</p>
        <ResponsiveContainer>
          <PieChart data={data}>
            <Pie
              cx="50%" // Horizontal center
              cy="50%" // Vertical center
              innerRadius={60}
              outerRadius={120}
              paddingAngle={1}
              dataKey="teacher"
            >
              {data.map((data, index) => (
                <Cell key={index} fill={data.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltipForPie></CustomTooltipForPie>} />
            <Legend content={<CustomLegend></CustomLegend>}></Legend>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Rechart;
