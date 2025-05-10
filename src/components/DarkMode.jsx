import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { setDarkMode, getDarkMode } from "../utils/DarkMode";


const DarkModeToggle = ({ className = "" }) => {
    const [darkMode, setDark] = useState(getDarkMode());
  
    useEffect(() => {
      setDarkMode(darkMode);
    }, [darkMode]);
  
    return (
        <button
        onClick={() => setDark(!darkMode)}
        className="shadow-inner drop-shadow-lg relative flex items-center justify-center w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700"
      >
        {/* Toggle Ball */}
        <span
          style={{
            transition:
              "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
            transform: darkMode ? "translateX(24px)" : "translateX(0)",
          }}
          className="absolute left-1 top-1 w-6 h-6 bg-white dark:bg-black rounded-full shadow-md"
        ></span>

        {/* Sun Icon (Shifts Right & Fades Out) */}
        <Sun
          style={{
            transition:
              "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            opacity: darkMode ? 0 : 1,
            transform: darkMode
              ? "translateX(12px) scale(0.8)"
              : "translateX(0) scale(1)",
          }}
          className="absolute left-2 w-4 h-4 text-gray-800"
        />

        {/* Moon Icon (Shifts Left & Fades In) */}
        <Moon
          style={{
            transition:
              "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            opacity: darkMode ? 1 : 0,
            transform: darkMode
              ? "translateX(0) scale(1)"
              : "translateX(-12px) scale(0.8)",
          }}
          className="absolute right-2 w-4 h-4 text-gray-400"
        />
      </button>
    );
  };

export default DarkModeToggle;
