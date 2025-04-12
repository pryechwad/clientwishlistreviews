import React from "react";
import WishlistPage from './components/client/Wishlist/WishlistPage';

import useThemeStore from "./store/useThemeStore";

const App = () => {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <div className={`min-h-screen p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <button
        className="absolute top-4 right-4 bg-teal-600 text-white px-4 py-2 rounded-md"
        onClick={toggleTheme}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <WishlistPage />
    </div>
  );
};

export default App;
