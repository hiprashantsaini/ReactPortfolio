import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, Award, Calendar, ChevronDown, ChevronUp, Code, Star } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: i * 0.05,
        type: "spring",
        stiffness: 120
      }
    })
  };

  const techStack = ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Context API", "RESTful APIs", "Git"];

  return (
    <section ref={sectionRef} className="container mx-auto py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative"
        >
          <motion.div 
            variants={itemVariants}
            className="mb-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block relative"
            >
              <span className="relative flex gap-2 items-center">
                <motion.span
                  className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 2 
                  }}
                />
              </span>
              <h2 className="text-4xl font-bold text-gray-800 inline-block">
                Professional Experience
              </h2>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mt-4 mx-auto max-w-xs rounded-full"
            />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative"
            >
              {/* Accent top border with gradient */}
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800">Full Stack Developer Intern</h3>
                    <p className="text-gray-600 mt-1 text-lg">RoamVerse Solution pvt.ltd</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center text-sm bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full shadow-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Calendar size={16} className="mr-2" />
                    <span className="font-medium">December 2024 - March 2025</span>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="flex items-center mt-6 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <div className="relative">
                    <Award size={24} className="text-green-600" />
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 10px rgba(34, 197, 94, 0)", "0 0 0 0 rgba(34, 197, 94, 0)"]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        repeatDelay: 1
                      }}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <span className="ml-2 font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm">
                    Certification Received
                  </span>
                </motion.div>
                
                <div className="mt-6">
                  <p className="text-gray-700 mb-4">Technologies & Skills:</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {techStack.map((tech, index) => (
                      <motion.span
                        key={index}
                        custom={index}
                        variants={skillVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: ["#dbeafe", "#c7d2fe"],
                          color: ["#2563eb", "#4f46e5"],
                          transition: { duration: 0.3 }
                        }}
                        className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium shadow-sm border border-blue-100 flex items-center"
                      >
                        <Star size={12} className="mr-1" />
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <motion.p 
                      className="text-gray-700 text-lg leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      During my three-month internship, I worked as a full stack developer contributing to 
                      production-level applications using the MERN stack.
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: isExpanded ? 1 : 0,
                        height: isExpanded ? "auto" : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 border-l-4 border-blue-500 my-6">
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.5 }}
                        >
                          <p className="font-semibold text-lg text-gray-800 mb-3">Key Responsibilities:</p>
                          <ul className="mt-2 space-y-3 text-gray-700">
                            {[
                              "Developed responsive front-end interfaces using React and Context API for state management",
                              "Built RESTful APIs with Express.js and integrated with MongoDB databases",
                              "Implemented user authentication and authorization features",
                              "Participated in daily stand-ups and collaborated with team members."
                            ].map((item, idx) => (
                              <motion.li 
                                key={idx}
                                className="flex items-start"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 + (idx * 0.1), duration: 0.4 }}
                              >
                                <div className="relative mt-1 mr-3">
                                  <ArrowRight size={16} className="text-blue-500 flex-shrink-0" />
                                  <motion.div
                                    className="absolute inset-0"
                                    animate={{ 
                                      scale: [1, 1.4, 1],
                                      opacity: [1, 0.7, 1]
                                    }}
                                    transition={{ 
                                      repeat: Infinity,
                                      repeatDelay: 1.5,
                                      duration: 1.5,
                                      delay: idx * 0.5
                                    }}
                                  />
                                </div>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                      
                      <div className="pl-4 border-l-4 border-green-500 my-6">
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <p className="font-semibold text-lg text-gray-800 mb-3">Key Achievements:</p>
                          <ul className="mt-2 space-y-3 text-gray-700">
                            {[
                              "Gained hands-on experience in managing both frontend and backend tasks in large-scale projects",
                              "Improved the efficiency of codebase by following best practices in full stack development",
                              "Enhanced understanding of project architecture and contributed to maintaining code quality and scalability"
                            ].map((item, idx) => (
                              <motion.li 
                                key={idx}
                                className="flex items-start"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 + (idx * 0.1), duration: 0.4 }}
                              >
                                <div className="relative mt-1 mr-3">
                                  <ArrowRight size={16} className="text-green-500 flex-shrink-0" />
                                  <motion.div
                                    className="absolute inset-0"
                                    animate={{ 
                                      scale: [1, 1.4, 1],
                                      opacity: [1, 0.7, 1]
                                    }}
                                    transition={{ 
                                      repeat: Infinity,
                                      repeatDelay: 2,
                                      duration: 1.5,
                                      delay: 1 + idx * 0.5
                                    }}
                                  />
                                </div>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100 mt-6 shadow-md"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        whileHover={{ 
                          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          y: -5
                        }}
                      >
                        <div className="flex items-center">
                          <div className="p-2 bg-indigo-100 rounded-lg">
                            <Code size={20} className="text-indigo-600" />
                          </div>
                          <motion.p 
                            className="ml-3 font-semibold text-lg text-gray-800"
                            animate={{ 
                              color: ["#1e40af", "#4f46e5", "#1e40af"]
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 4
                            }}
                          >
                            Project Highlight
                          </motion.p>
                        </div>
                        <p className="mt-3 text-gray-700">
                          Led the development of a task management dashboard feature that was incorporated
                          into the company's main product. Implemented drag-and-drop functionality and 
                          real-time updates using React Context API and WebSockets.
                        </p>
                      </motion.div>
                    </motion.div>
                    
                    <motion.button
                      onClick={toggleExpand}
                      className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-2 px-6 rounded-full mt-4 shadow-md transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded ? (
                        <>
                          <span>Show less</span>
                          <ChevronUp size={16} className="ml-2" />
                        </>
                      ) : (
                        <>
                          <span>Show more</span>
                          <ChevronDown size={16} className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}