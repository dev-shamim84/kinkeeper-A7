"use client";
import { RechartsDevtools } from "@recharts/devtools";
import { FriendContext } from "@/context/ContextProvider";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
const Rechart = () => {
  const { friends } = useContext(FriendContext);
  console.log(friends);
  const chartData = Object.values(
    friends.reduce((acc, item) => {
      if (!acc[item.text]) {
        acc[item.text] = { name: item.text, value: 0 };
      }
      acc[item.text].value++;
      return acc;
    }, {})
  );
  return (
    <div className=" my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">
      <h2 className="font-semibold text-3xl mb-16 ">Friendship Analytics</h2>
      <div className="flex flex-col justify-center items-center space-y-3">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={chartData}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <RechartsDevtools />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Rechart;
