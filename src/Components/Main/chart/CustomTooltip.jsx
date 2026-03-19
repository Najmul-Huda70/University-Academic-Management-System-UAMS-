const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div className="bg-white px-4 py-3 rounded-lg border shadow-sm shadow-[rgb(0,0,0,0.1)] text-lg">
        <p className="font-semibold mb-1">{data.name}</p>
        <p style={{ color: data.color }}>● Students: {data.student}</p>
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
