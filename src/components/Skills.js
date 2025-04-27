// src/components/Skills.js
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaLaptopCode, FaLayerGroup, FaServer, FaToolbox } from 'react-icons/fa';

const skillsData = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode className="text-4xl md:text-5xl" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    color: "from-blue-600 to-indigo-600",
    lightColor: "from-blue-300 to-indigo-300",
    darkColor: "from-blue-800 to-indigo-800",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-500"
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-4xl md:text-5xl" />,
    skills: ["Node.js", "Express.js", "MongoDB", "SQL", "REST API"],
    color: "from-emerald-600 to-teal-600",
    lightColor: "from-emerald-300 to-teal-300",
    darkColor: "from-emerald-800 to-teal-800",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500"
  },
  {
    title: "MERN Stack Development",
    icon: <FaLayerGroup className="text-4xl md:text-5xl" />,
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
    color: "from-purple-600 to-pink-600",
    lightColor: "from-purple-300 to-pink-300",
    darkColor: "from-purple-800 to-pink-800",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    title: "Tools & Technologies",
    icon: <FaToolbox className="text-4xl md:text-5xl" />,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
    color: "from-amber-600 to-orange-600",
    lightColor: "from-amber-300 to-orange-300",
    darkColor: "from-amber-800 to-orange-800",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500"
  },
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  // Card animation variants
  const cardVariants = {
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
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };
  
  // Skill item animation variants
  const skillItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 120
      }
    }
  };

  return (
    <section id="skills" className="container mx-auto py-16 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700">
            Technical Skills
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Building modern web applications with the latest technologies and best practices
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-xl"
            variants={cardVariants}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`}></div>
            
            {/* Card content */}
            <div className="relative h-full">
              {/* Front card display */}
              <motion.div 
                className="p-6 h-full flex flex-col items-center text-center"
                animate={{ 
                  opacity: activeIndex === index ? 0 : 1,
                  y: activeIndex === index ? -20 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated icon container */}
                <motion.div 
                  className={`w-20 h-20 ${category.iconBg} rounded-full flex items-center justify-center text-white shadow-lg mb-6`}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {category.icon}
                </motion.div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{category.title}</h3>
                
                <motion.div 
                  className="w-16 h-1 bg-white/50 rounded-full mx-auto mb-6"
                  animate={{ width: activeIndex === index ? 0 : 64 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                
                <p className="text-white/90 text-sm">
                  Click to explore my skills
                </p>
              </motion.div>

              {/* Back card with skills */}
              <motion.div 
                className="absolute inset-0 p-6 flex flex-col justify-center"
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  y: activeIndex === index ? 0 : 20
                }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">{category.title}</h3>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium inline-block border border-white/30 shadow-sm hover:bg-white/30 transition-colors duration-300"
                      variants={skillItemVariants}
                      initial="hidden"
                      animate={activeIndex === index ? "visible" : "hidden"}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                
                {/* Interactive decorative elements */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-transparent"
                  animate={{ 
                    scale: activeIndex === index ? 1.2 : 1,
                    opacity: activeIndex === index ? 0.6 : 0.2
                  }}
                  transition={{ duration: 0.8 }}
                ></motion.div>
                
                <motion.div 
                  className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-transparent"
                  animate={{ 
                    scale: activeIndex === index ? 1.2 : 1,
                    opacity: activeIndex === index ? 0.6 : 0.2
                  }}
                  transition={{ duration: 0.8 }}
                ></motion.div>
              </motion.div>
            </div>
            
            {/* Animated border */}
            <motion.div 
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.lightColor} opacity-0`}
              animate={{ 
                opacity: activeIndex === index ? [0, 0.5, 0] : 0 
              }}
              transition={{ 
                duration: 2, 
                repeat: activeIndex === index ? Infinity : 0 
              }}
              style={{ 
                mixBlendMode: "overlay", 
                zIndex: 10 
              }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
