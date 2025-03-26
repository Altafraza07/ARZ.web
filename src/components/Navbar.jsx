import React, { useEffect, useState } from "react";
import useReadingProgress from "../hooks/useReadingProgress";
import { X, Menu } from "lucide-react";
import DarkModeToggle from "./DarkMode";
import ARZ from "../assets/arz-logo.png";
import "@fontsource/montserrat";
import { scrollToSection } from "../utils/scrollTo";
import { getDarkMode } from "../utils/DarkMode";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const [darkMode, setDarkMode] = useState(getDarkMode());
  // Handle dark mode state and save to local storage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

   useEffect(() => {
      const handleThemeChange = () => {
        setDarkMode(getDarkMode()); // Update state when theme changes
      };
    
      window.addEventListener("storage", handleThemeChange);
      return () => window.removeEventListener("storage", handleThemeChange);
    }, []);
    
    useEffect(() => {
      setDarkMode(getDarkMode()); // Update on component mount
    }, []);

  const complete = useReadingProgress();

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#563A9C] dark:bg-[#000]/75 min-w-full backdrop-blur-lg text-white fixed top-0 !z-50 transition-all duration-300">
        <div className="container mx-auto py-5 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="tracking-widest bonheur text-2xl dark:text-[#EBEAFF] md:ml-0 ml-6">ARz</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {[
              "Home", 
              "About Me", 
              "Projects", 
              "Testimonials", 
              "Contact"
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, ""))} // Smooth scrolling
                className="hover:text-[#8B5CF6] transition-colors duration-300 font-medium tracking-widest text-[18px]"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle (Desktop) */}
          <div className="hidden md:flex">
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden mr-6 transform transition-transform duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Progress bar */}
        <div className="relative">
          <span
            style={{
              transform: `translateX(${complete - 100}%)`,
              transition: "transform 0.3s ease-out",
            }}
            className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#FDE7BB] to-[#FC8F54]  dark:from-[#8B5DFF] dark:to-[#9d76ff]"
          />
        </div>
      </nav>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 h-screen w-64 bg-[#EBEAFF] dark:bg-gray-800 shadow-lg z-50`}
        style={{
          right: open ? "0px" : "-100%", // Slide-in effect for mobile menu
          height: "100vh",
          width: "50%",
          boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.2)",
          transition: "right 0.2s ease-out",
          zIndex: 100,
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-4 text-2xl"
          onClick={() => setOpen(false)}
        >
          <X className="text-black dark:text-white "/>
        </button>

        {/* Sidebar Menu */}
        <ul className="flex flex-col mt-12 gap-6 text-lg pl-8">
          {[
            "Home", 
            "About Me", 
            "Services", 
            "Projects", 
            "Contact"
          ].map((item) => (
            <li key={item}>
              <button
                onClick={() => {
                  scrollToSection(item.toLowerCase().replace(/\s+/g, ""));
                  setOpen(false); // Close sidebar after clicking a menu item
                }}
                className="hover:text-[#8B5CF6] transition-colors duration-300 font-medium text-[#3a2e5e] dark:text-white"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle (Mobile) */}
        <div className="m-8 ">
          <p className="dark:text-[#ffffffb7] text-[#312553] text-sm mb-1 text-[13px] font-medium ">
            Switch to { darkMode ? "Light mode" : "Dark mode"}
          </p>
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
