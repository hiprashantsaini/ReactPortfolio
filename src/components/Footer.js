// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left - Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
          <a href="#about" className="hover:text-indigo-400 transition duration-300">About</a>
          <a href="#education" className="hover:text-indigo-400 transition duration-300">Education</a>
          <a href="#skills" className="hover:text-indigo-400 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-indigo-400 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition duration-300">Contact</a>
        </div>

        {/* Right - Social Media Icons */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/prashant-saini-a60579241/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-300">
            <FaLinkedin className='hover:bg-blue-600 hover:scale-150' size={24} />
          </a>
          <a href="https://github.com/hiprashantsaini" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-300">
            <FaGithub className='hover:bg-yellow-600 hover:scale-150' size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-300">
            <FaTwitter className='hover:bg-green-600 hover:scale-150' size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
