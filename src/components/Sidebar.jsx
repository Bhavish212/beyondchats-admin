import { NavLink } from "react-router-dom";
import { Home, MessageSquare, BarChart2, Settings } from "react-feather";
import { motion } from "framer-motion";

const navItems = [
  { to: "/dashboard", icon: <Home />, label: "Dashboard" },
  { to: "/inbox", icon: <MessageSquare />, label: "Inbox" },
  { to: "/analytics", icon: <BarChart2 />, label: "Analytics" },
  { to: "/settings", icon: <Settings />, label: "Settings" },
];

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 min-h-screen bg-gradient-to-b from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white shadow-lg"
    >
      <div className="p-6 font-bold text-2xl">BeyondChats</div>
      <nav className="flex flex-col space-y-4 mt-8 px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-md transition-all duration-300 
              ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-200 dark:hover:bg-gray-700"}`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </motion.aside>
  );
}
