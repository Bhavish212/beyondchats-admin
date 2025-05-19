import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, MessageSquare, BarChart2, Settings, Menu } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/dashboard", icon: <Home />, label: "Dashboard" },
  { to: "/inbox", icon: <MessageSquare />, label: "Inbox" },
  { to: "/analytics", icon: <BarChart2 />, label: "Analytics" },
  { to: "/settings", icon: <Settings />, label: "Settings" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 shadow z-50">
        <div className="font-bold text-xl text-blue-700 dark:text-white">BeyondChats</div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-white">
          <Menu />
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 768) && (
          <motion.aside
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.4 }}
            className="fixed md:relative top-0 left-0 w-64 min-h-screen bg-gradient-to-b from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white shadow-lg z-40"
          >
            <div className="p-6 font-bold text-2xl hidden md:block">BeyondChats</div>
            <nav className="flex flex-col space-y-4 mt-4 md:mt-8 px-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)} // close sidebar on mobile after click
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
        )}
      </AnimatePresence>
    </>
  );
}
