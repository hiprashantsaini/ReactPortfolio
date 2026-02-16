import { Build, Home, School, Work } from "@mui/icons-material";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (event, id) => {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close the mobile menu after clicking
  };

  return (
    <header className="bg-gray-100 text-gray-900 shadow-lg sticky top-0 z-10 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Portfolio</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            <Home fontSize="small" />
            <span>About</span>
          </a>
          <a
            href="#education"
            onClick={(e) => handleScroll(e, "education")}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            <School fontSize="small" />
            <span>Education</span>
          </a>
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, "skills")}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            <Build fontSize="small" />
            <span>Skills</span>
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            <Work fontSize="small" />
            <span>Projects</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden focus:outline-none text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Home fontSize="small" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={(e) => handleScroll(e, "education")}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <School fontSize="small" />
                <span>Education</span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleScroll(e, "skills")}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Build fontSize="small" />
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Work fontSize="small" />
                <span>Projects</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;


