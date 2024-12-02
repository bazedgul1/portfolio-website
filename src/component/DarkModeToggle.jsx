import  { useState, useEffect } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("white");
    } else {
      document.documentElement.classList.remove("white");
    }
  }, [darkMode]);

  return (
    <>
    <div className="flex justify-end md:flex-1">

    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center border border-gray-600 hover:bg-gray-600"
      aria-label="Toggle Dark Mode"
      >
      {darkMode ? "🌙" : "☀️"}
    </button>
    </div>
    </>
  );
}

export default DarkModeToggle;
