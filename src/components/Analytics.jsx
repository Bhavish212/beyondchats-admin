import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dateOptions = ["Today", "This Week", "This Month"];

const chartDataByRange = {
  Today: {
    messages: [30, 50, 20, 40, 80],
    labels: ["9AM", "11AM", "1PM", "3PM", "5PM"],
  },
  "This Week": {
    messages: [120, 190, 300, 500, 200, 300, 450],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  "This Month": {
    messages: [400, 460, 300, 560, 600, 700, 800],
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
  },
};

const Analytics = () => {
  const [range, setRange] = useState("This Week");

  const lineData = {
    labels: chartDataByRange[range].labels,
    datasets: [
      {
        label: "Messages Sent",
        data: chartDataByRange[range].messages,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["New Users", "Active Users", "Churned"],
    datasets: [
      {
        label: "User Stats",
        data: [50, 200, 20],
        backgroundColor: ["#10b981", "#3b82f6", "#ef4444"],
        borderRadius: 6,
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-4 py-6 max-w-6xl mx-auto bg-gradient-to-br from-blue-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 rounded-xl"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-white">
          Analytics
        </h2>
        <div className="flex flex-wrap gap-2">
          {dateOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setRange(opt)}
              className={`px-4 py-1.5 rounded-full font-medium transition text-sm sm:text-base ${
                range === opt
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-gray-600"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md overflow-x-auto">
          <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Message Activity - {range}
          </h3>
          <Line data={lineData} />
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md overflow-x-auto">
          <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
            User Statistics
          </h3>
          <Bar data={barData} />
        </div>
      </div>

      {/* Insights */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: "Total Users", value: "2,430", growth: "+12%" },
          { label: "Messages Sent", value: "18,204", growth: "+18%" },
          { label: "Avg. Session", value: "4m 32s", growth: "+5%" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow text-center hover:shadow-lg transition"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
            <p className="text-sm text-green-600 font-medium">{stat.growth} vs last period</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Analytics;
