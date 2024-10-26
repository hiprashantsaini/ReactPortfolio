import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-400">Portfolio</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#education" className="hover:text-teal-400">Education</a>
          <a href="#skills" className="hover:text-teal-400">Skills</a>
          <a href="#projects" className="hover:text-teal-400">Projects</a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden focus:outline-none text-teal-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icon: Menu when closed, X when open */}
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-700">
          <ul className="flex flex-col space-y-2 p-4">
            <li><a href="#about" className="hover:text-teal-400">About</a></li>
            <li><a href="#education" className="hover:text-teal-400">Education</a></li>
            <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
