import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const tabs = ["Account", "Preferences", "Security"];

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("Account");

  const tabClass = (tab) =>
    `px-5 py-2 rounded-t-lg text-sm sm:text-base font-medium transition ${
      tab === activeTab
        ? "bg-blue-600 text-white shadow"
        : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-blue-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg"
    >
      {/* Tabs */}
      <div className="flex space-x-2 p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-t-xl">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={tabClass(tab)}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-b-xl space-y-6">
        {activeTab === "Account" && (
  <div className="space-y-5">
    <h3 className="text-xl font-semibold text-blue-700 dark:text-white">
      Account Settings
    </h3>
    <input
      type="text"
      placeholder="Full Name"
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
    />
    <input
      type="email"
      placeholder="Email Address"
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
    />
    <div>
      <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
        Profile Picture
      </label>
      <input
        type="file"
        className="block w-full text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"
      />
    </div>
    
    <div className="pt-2">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        Save Changes
      </button>
    </div>
  </div>
)}

        {activeTab === "Preferences" && (
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-white">
              Preferences
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Theme</span>
              <button
                onClick={toggleTheme}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
              </button>
            </div>
          </div>
        )}

        {activeTab === "Security" && (
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-white">
              Security Settings
            </h3>
            <input
              type="password"
              placeholder="Current Password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              Update Password
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SettingsPage;
