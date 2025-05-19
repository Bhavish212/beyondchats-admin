import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "react-feather";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-400 dark:border-yellow-400 transition"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "dark" ? 360 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {theme === "dark" ? (
          <Moon size={18} className="text-yellow-400" />
        ) : (
          <Sun size={18} className="text-indigo-500" />
        )}
      </motion.div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
        {theme === "dark" ? "Dark" : "Light"} Mode
      </span>
    </motion.button>
  );
}
