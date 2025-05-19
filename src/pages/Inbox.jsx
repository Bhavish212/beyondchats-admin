import React, { useState } from "react";
import { motion } from "framer-motion";
import dummyChats from "../data/dummyChats";

const groupChatsByDate = (chats) => {
  const groups = {
    Today: [],
    Yesterday: [],
    Earlier: [],
  };

  chats.forEach((chat) => {
    if (chat.date === "Today") groups.Today.push(chat);
    else if (chat.date === "Yesterday") groups.Yesterday.push(chat);
    else groups.Earlier.push(chat);
  });

  return groups;
};

const Inbox = () => {
  const [search, setSearch] = useState("");

  const filteredChats = dummyChats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  const groupedChats = groupChatsByDate(filteredChats);

  return (
    <motion.div
      className="p-4 sm:p-6 max-w-5xl mx-auto bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 rounded-xl"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 dark:text-white mb-3 text-center sm:text-left">
          Inbox
        </h2>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-white border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {Object.entries(groupedChats).map(([section, chats]) =>
        chats.length > 0 ? (
          <div key={section} className="mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-indigo-600 dark:text-gray-300 mb-3">
              {section}
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow divide-y divide-indigo-100 dark:divide-gray-700">
              {chats.map((chat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 hover:bg-indigo-50 dark:hover:bg-gray-700 transition"
                >
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-indigo-200"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {chat.name}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                        {chat.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                      {chat.message}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </motion.div>
  );
};

export default Inbox;
