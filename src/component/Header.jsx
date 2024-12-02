// import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="flex justify-center items-center">
        {/* Navigation Links */}
        <div className="navbar">
        <nav className="flex space-x-6 text-sm md:text-lg">
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/articles" className="hover:text-gray-400">
            Articles
          </Link>
          <Link to="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link to="/speaking" className="hover:text-gray-400">
            Speaking
          </Link>
          <Link to="/uses" className="hover:text-gray-400">
            Uses
          </Link>
        </nav>
        </div>
        {/* Dark Mode Toggle */}
        <div className="ml-6">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
