// src/components/Projects.js
import { motion } from 'framer-motion';
import React from 'react';

const projectsData = [
  {
    title: "Social Media App",
    description: "A full-stack social media platform where users can share posts, follow others, and interact with comments and likes.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://updatedsocialmedia.netlify.app/",
    github: "https://github.com/hiprashantsaini/New-Social-Media-Application", // Add GitHub repo link here
  },
  {
    title: "Classroom App",
    description: "A comprehensive platform for principals and teachers to manage students and classes, schedule class timetables, and facilitate communication between educators and students.",
    techStack: ["MERN Stack (MongoDB, Express.js, React, Node.js)"],
    link: "https://classroom-web.netlify.app",
    github: "https://github.com/hiprashantsaini/collegeClassroom",
  },  
  {
    title: "Twitter Clone",
    description: "A social media platform that allows users to create accounts, post tweets, follow other users, and engage in real-time discussions.",
    techStack: ["React", "Node.js", "Google Firebase", "MongoDB", "Tailwind CSS"],
    link: "https://twitter-cloneweb.netlify.app",
    github: "https://github.com/hiprashantsaini/twitter_frontend",
  }, 
  {
    title: "To-Do App",
    description: "A user-friendly task management application that allows users to create, update, and delete tasks, set due dates, and categorize tasks for better organization.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
    link: "https://todoplace.netlify.app",
    github: "https://github.com/hiprashantsaini/ToDoApp",
  },
  {
    title: "Task Planet UI Clone",
    description: "An intuitive UI clone of Task Planet, offering users a sleek interface to manage tasks efficiently. Users can create, update, and categorize tasks while enjoying a visually engaging experience that enhances productivity.",
    techStack: ["React","React-Icons","CSS"],
    link: "https://tpcloneui.netlify.app",
    github: "https://github.com/hiprashantsaini/TaskPlanetClone",
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Project Card Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm font-semibold text-gray-500">Tech Stack:</p>
              <ul className="flex flex-wrap mt-2 space-x-2">
                {project.techStack.map((tech, techIndex) => (
                  <li key={techIndex} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-blue-700 bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
              <p className="text-white text-center px-4 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 font-bold px-4 py-2 rounded-md hover:bg-gray-200 transition"
                >
                  View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 font-bold px-4 py-2 rounded-md hover:bg-gray-200 transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
