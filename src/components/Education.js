// src/components/Education.js
import { motion } from 'framer-motion';
import React from 'react';
import { FaBookOpen, FaGraduationCap, FaSchool } from 'react-icons/fa'; // Importing educational icons

const educationData = [
  {
    title: "Graduation",
    year: "2021-25",
    marks:"7.9 SGPA",
    school: "Your College Name",
    description: "Completed my Bachelor's in Computer Science, focusing on web development and AI.",
    icon: <FaGraduationCap className="text-4xl text-blue-500" />,
  },
  {
    title: "Intermediate (10+2)",
    year: "2020",
    marks:"81%",
    school: "I.M. Inter College Kithore, Meerut",
    description: "Achieved 1st position in 12th grade, excelling in science subjects and demonstrating a strong commitment to academic excellence.",
    icon: <FaSchool className="text-4xl text-blue-500" />,
  },
  {
    title: "High School (10th)",
    year: "2018",
    marks:"86%",
    school: "I.M. Inter College Kithore, Meerut",
    description: "Secured 1st position in 10th grade, showcasing strong performance across nearly all subjects and a dedication to academic excellence.",
    icon: <FaBookOpen className="text-4xl text-blue-500" />,
  },
];

const Education = () => {
  return (
    <section id="education" className="container mx-auto py-12 px-6 scroll">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Education</h2>
      <div className="space-y-8 ">

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 flex items-start transform transition duration-300 ease-in-out hover:scale-105 hover:border-blue-600 hover:shadow-xl hover:bg-yellow-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.04 }}
          >
            <div className="mr-4">
              {edu.icon}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">{edu.title}</h3>
              <p className="text-gray-500 text-sm mb-1">{edu.year}</p>
              <p className="text-gray-500 text-sm mb-1">{edu.marks}</p>
              <p className="text-gray-600 font-medium mb-4">{edu.school}</p>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Education;
