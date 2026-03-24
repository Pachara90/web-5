"use client";

import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkmode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkmode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    const event = new CustomEvent("themeChanged", { detail: { darkMode } });
    window.dispatchEvent(event);
  }, [darkMode]);

  return (
    <>
      <div
        onClick={() => setDarkmode(!darkMode)}
        className={`relative w-20 h-8 flex items-center cursor-pointer rounded-full p-1 transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-teal-500"
        }`}
      >
        <FaMoon size={18} />

        <div
          className={`absolute    w-6 h-6 rounded-full shadow-md tranform transition-transform duration-300
                ${
                  darkMode
                    ? "translate-x-12 bg-gray-900"
                    : "translate-x-0  bg-white"
                }`}
        />

        <BsSunFill className="text-yellow-400 ml-auto" size={18} />
      </div>
    </>
  );
};
export default ThemeToggle;
