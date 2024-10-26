// src/components/Skills.js
import { motion } from 'framer-motion';
import React from 'react';
import { FaLaptopCode, FaLayerGroup, FaServer, FaToolbox } from 'react-icons/fa';

const skillsData = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode className="text-4xl text-blue-500" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-4xl text-blue-500" />,
    skills: ["Node.js", "Express.js", "MongoDB", "SQL", "REST API"],
  },
  {
    title: "MERN Stack Development",
    icon: <FaLayerGroup className="text-4xl text-blue-500" />,
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Tools & Technologies",
    icon: <FaToolbox className="text-4xl text-blue-500" />,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="relative group bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Main Card Content */}
            <div className="flex flex-col items-center justify-center h-full">
              {category.icon}
              <h3 className="text-2xl font-semibold text-gray-700 mt-4">{category.title}</h3>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-blue-500 text-white rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out transform translate-y-full p-6 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">{category.title}</h3>
              <ul className="space-y-2 text-center">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="bg-white text-blue-500 px-3 py-1 rounded-full text-sm font-medium inline-block hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
