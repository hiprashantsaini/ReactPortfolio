import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaDatabase, FaExternalLinkAlt, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiCss3, SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from 'react-icons/si';

// Tech stack icon mapping
const techIcons = {
  "React": <FaReact className="text-blue-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express": <SiExpress className="text-gray-200" />,
  "Express.js": <SiExpress className="text-gray-200" />,
  "MongoDB": <SiMongodb className="text-green-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-blue-400" />,
  "Google Firebase": <SiFirebase className="text-yellow-500" />,
  "CSS": <SiCss3 className="text-blue-500" />,
  "MERN Stack": <FaDatabase className="text-purple-500" />
};

const projectsData = [
  {
    title: "Social Media App",
    description: "A full-stack social media platform where users can share posts, follow others, and interact with comments and likes.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://updatedsocialmedia.netlify.app/",
    github: "https://github.com/hiprashantsaini/New-Social-Media-Application",
    color: "from-blue-600 to-indigo-700"
  },
  {
    title: "Classroom App",
    description: "A comprehensive platform for principals and teachers to manage students and classes, schedule class timetables, and facilitate communication between educators and students.",
    techStack: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js"],
    link: "https://classroom-web.netlify.app",
    github: "https://github.com/hiprashantsaini/collegeClassroom",
    color: "from-green-600 to-teal-700"
  },  
  {
    title: "Twitter Clone",
    description: "A social media platform that allows users to create accounts, post tweets, follow other users, and engage in real-time discussions.",
    techStack: ["React", "Node.js", "Google Firebase", "MongoDB", "Tailwind CSS"],
    link: "https://twitter-cloneweb.netlify.app",
    github: "https://github.com/hiprashantsaini/twitter_frontend",
    color: "from-purple-600 to-indigo-700"
  }, 
  {
    title: "To-Do App",
    description: "A user-friendly task management application that allows users to create, update, and delete tasks, set due dates, and categorize tasks for better organization.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
    link: "https://todoplace.netlify.app",
    github: "https://github.com/hiprashantsaini/ToDoApp",
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Task Planet UI Clone",
    description: "An intuitive UI clone of Task Planet, offering users a sleek interface to manage tasks efficiently. Users can create, update, and categorize tasks while enjoying a visually engaging experience that enhances productivity.",
    techStack: ["React", "React-Icons", "CSS"],
    link: "https://tpcloneui.netlify.app",
    github: "https://github.com/hiprashantsaini/TaskPlanetClone",
    color: "from-cyan-500 to-blue-600"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Project card animation variants
  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  // Tech stack item animation variants
  const techStackVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-teal-700">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore my portfolio of web applications built with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              variants={projectVariants}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card Base with Gradient Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} p-0.5 shadow-lg`}>
                <div className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-900"></div>
              </div>

              {/* Card Content */}
              <div className="relative h-full rounded-2xl bg-white dark:bg-gray-900 p-6 flex flex-col">
                {/* Project Title with Animated Underline */}
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white inline-block">
                    {project.title}
                  </h3>
                  <motion.div 
                    className={`h-1 rounded bg-gradient-to-r ${project.color} mt-1`}
                    initial={{ width: 0 }}
                    animate={{ width: hoveredProject === index ? "100%" : "30%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
                        variants={techStackVariants}
                      >
                        {techIcons[tech] && <span className="mr-1">{techIcons[tech]}</span>}
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="mt-auto flex gap-3">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg flex-1 justify-center`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                </div>

                {/* Animated Decoration Elements */}
                <motion.div 
                  className={`absolute -bottom-1 -right-1 w-20 h-20 rounded-full bg-gradient-to-br ${project.color} filter blur-xl opacity-20`}
                  animate={{ 
                    scale: hoveredProject === index ? [1, 1.2, 1] : 1,
                    opacity: hoveredProject === index ? [0.2, 0.3, 0.2] : 0.2
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: hoveredProject === index ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;