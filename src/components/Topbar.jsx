import React from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Bell, User } from "react-feather";

const Topbar = () => {
  return (
    <motion.header
      className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
       Admin Panel
      </h1>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <Bell size={20} className="text-gray-600 dark:text-gray-300" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <ThemeToggle />
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold shadow">
          <User size={16} />
        </div>
      </div>
    </motion.header>
  );
};

export default Topbar;
