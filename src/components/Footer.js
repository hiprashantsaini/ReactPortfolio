import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (event, id) => {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="hover:text-indigo-400 transition duration-300 text-lg font-medium"
          >
            About
          </a>
          <a
            href="#education"
            onClick={(e) => handleScroll(e, "education")}
            className="hover:text-indigo-400 transition duration-300 text-lg font-medium"
          >
            Education
          </a>
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, "skills")}
            className="hover:text-indigo-400 transition duration-300 text-lg font-medium"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="hover:text-indigo-400 transition duration-300 text-lg font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="hover:text-indigo-400 transition duration-300 text-lg font-medium"
          >
            Contact
          </a>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="flex items-center space-x-6 mt-6 md:mt-0">
          <a
            href="https://www.linkedin.com/in/prashant-saini-a60579241/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/hiprashantsaini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
          >
            <FaTwitter size={28} />
          </a>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="mt-8 border-t border-gray-700"></div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} <span className="text-indigo-400">Prashant Saini</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
