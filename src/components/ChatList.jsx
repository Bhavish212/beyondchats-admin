import React from "react";
import { dummyChats } from "../data/dummyChats";

const ChatList = () => {
  return (
    <div className="space-y-4">
      {dummyChats.map((chat) => (
        <div
          key={chat.id}
          className="p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {chat.name}
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {chat.time}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 italic">
            {chat.role}
          </p>
          <p className="mt-1 text-gray-700 dark:text-gray-200">{chat.lastMessage}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
