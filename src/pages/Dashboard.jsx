import React from "react";
import { motion } from "framer-motion";
import { BarChart2, Users, MessageSquare, TrendingUp } from "react-feather";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const stats = [
  {
    title: "Active Users",
    value: "1,245",
    icon: <Users size={20} />,
    change: "+8.4%",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    title: "Messages",
    value: "8,592",
    icon: <MessageSquare size={20} />,
    change: "+12.2%",
    color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  },
  {
    title: "Growth",
    value: "24%",
    icon: <TrendingUp size={20} />,
    change: "+3.1%",
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  },
  {
    title: "Reports",
    value: "326",
    icon: <BarChart2 size={20} />,
    change: "-1.4%",
    color: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  },
];

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "User Activity",
      data: [120, 190, 300, 500, 420, 380, 430],
      fill: true,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      borderColor: "#3b82f6",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: "#64748b",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#64748b",
      },
    },
    y: {
      ticks: {
        color: "#64748b",
      },
    },
  },
};

const Dashboard = () => {
  return (
    <motion.div
      className="p-4 sm:p-6 max-w-6xl mx-auto bg-gradient-to-br from-sky-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-xl"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-700 dark:text-white text-center sm:text-left">
        Welcome Back, Admin!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`rounded-xl p-4 sm:p-5 shadow-md dark:shadow dark:bg-gray-800 transition hover:scale-[1.02] duration-200 ${stat.color}`}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold">{stat.title}</div>
              {stat.icon}
            </div>
            <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
            <div className="text-xs mt-1 text-gray-600 dark:text-gray-300">
              {stat.change} from last week
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 dark:text-white mb-3">
          Weekly User Activity
        </h3>
        <div className="h-64 sm:h-80 w-full">
          <Line data={data} options={options} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
