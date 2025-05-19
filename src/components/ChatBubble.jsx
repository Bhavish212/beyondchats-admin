import { motion } from "framer-motion";
import clsx from "clsx";

export default function ChatBubble({ text, sender = "user" }) {
  const isUser = sender === "user";

  return (
    <motion.div
      initial={{ x: isUser ? 50 : -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={clsx(
        "max-w-[75%] px-4 py-2 my-2 rounded-2xl text-sm shadow-md",
        isUser
          ? "ml-auto bg-indigo-500 text-white"
          : "mr-auto bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      )}
    >
      {text}
    </motion.div>
  );
}
