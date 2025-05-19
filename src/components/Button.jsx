import { motion } from "framer-motion";
import clsx from "clsx";

export default function Button({ children, onClick, variant = "primary" }) {
  const base = "px-4 py-2 rounded-full font-medium transition text-sm";

  const styles = {
    primary: "bg-indigo-500 text-white hover:bg-indigo-600",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={clsx(base, styles[variant])}
    >
      {children}
    </motion.button>
  );
}
