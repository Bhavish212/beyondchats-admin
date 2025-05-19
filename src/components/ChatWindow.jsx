import { motion } from "framer-motion";

export default function ChatWindow({ selectedChat }) {
  return (
    <motion.div
      className="w-2/3 bg-white dark:bg-gray-800 p-6 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {selectedChat ? (
        <>
          <h2 className="text-xl font-bold text-blue-600 dark:text-white">{selectedChat.name}</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">{selectedChat.lastMessage}</p>
        </>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">Select a chat to view messages.</p>
      )}
    </motion.div>
  );
}
