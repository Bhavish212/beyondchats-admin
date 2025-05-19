import AnimatedPage from "../components/AnimatedPage";
import ThemeToggle from "../components/ThemeToggle";

export default function SettingsPage() {
  return (
    <AnimatedPage>
      <div className="ml-64 mt-6 px-6">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Settings
        </h3>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-200 font-medium">Theme Mode</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
