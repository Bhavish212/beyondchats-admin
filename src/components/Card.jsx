import { motion } from "framer-motion";

export default function Card({ title, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-md transition"
    >
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h3>
      <div>{children}</div>
    </motion.div>
  );
}
