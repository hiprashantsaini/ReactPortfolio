import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBookOpen, FaGraduationCap, FaSchool } from 'react-icons/fa';
import '../borderStyle.css';

const educationData = [
  {
    title: "Graduation",
    year: "2021-25",
    marks: "7.9 SGPA",
    school: "Rajkiya Engineering College Kannauj (AKTU University)",
    description: "Completed my Bachelor's in Computer Science, focusing on web development and AI.",
    icon: <FaGraduationCap className="text-3xl md:text-4xl" />,
    color: "from-indigo-600 to-blue-500"
  },
  {
    title: "Intermediate (10+2)",
    year: "2020",
    marks: "81%",
    school: "I.M. Inter College Kithore, Meerut",
    description: "Achieved 1st position in 12th grade, excelling in science subjects and demonstrating a strong commitment to academic excellence.",
    icon: <FaSchool className="text-3xl md:text-4xl" />,
    color: "from-purple-600 to-pink-500"
  },
  {
    title: "High School (10th)",
    year: "2018",
    marks: "86%",
    school: "I.M. Inter College Kithore, Meerut",
    description: "Secured 1st position in 10th grade, showcasing strong performance across nearly all subjects and a dedication to academic excellence.",
    icon: <FaBookOpen className="text-3xl md:text-4xl" />,
    color: "from-emerald-600 to-teal-500"
  },
];

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Container variants with slower transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Increased stagger time between children
        delayChildren: 0.2,   // Initial delay before animations start
        duration: 0.8         // Slower overall container transition
      }
    }
  };

  // Individual card variants with slower, smoother transitions
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,    // Start from further down
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 1.2,     // Slower card animation
        ease: "easeOut",   // Smooth easing function
        opacity: { duration: 1.5 }, // Even slower fade-in
      } 
    }
  };

  return (
    <section id="education" className="max-w-[1240px] mx-auto py-12 sm:py-16 px-4 sm:px-6 scroll">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">
          Education Journey
        </span>
      </motion.h2>

      <motion.div 
        className="space-y-6 sm:space-y-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Changed to whileInView for scroll-triggered animation
        viewport={{ once: true, amount: 0.1 }} // Trigger when just 10% of the element is in view
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg"
            variants={cardVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-80`}></div>
            
            <motion.div 
              className="absolute inset-0 bg-white" 
              initial={{ opacity: 1 }}
              animate={{ opacity: hoveredIndex === index ? 0 : 0.95 }}
              transition={{ duration: 0.8 }} // Slower color transition
            ></motion.div>
            
            <div className="relative p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start gap-3 sm:gap-6">
              <div className="flex-shrink-0 mb-3 sm:mb-0">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                  {edu.icon}
                </div>
              </div>
              
              <div className="flex-grow">
                <motion.h3 
                  className={`text-xl sm:text-2xl font-bold mb-2 ${hoveredIndex === index ? 'text-white' : 'text-gray-800'}`}
                  initial={false}
                  animate={{ 
                    x: hoveredIndex === index ? [0, -5, 0] : 0,
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  {edu.title}
                </motion.h3>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <span className={`inline-flex items-center px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${hoveredIndex === index ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'}`}>
                    {edu.year}
                  </span>
                  <span className={`inline-flex items-center px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${hoveredIndex === index ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'}`}>
                    {edu.marks}
                  </span>
                </div>
                
                <h4 className={`text-base sm:text-lg font-semibold mb-2 ${hoveredIndex === index ? 'text-white/90' : 'text-gray-700'}`}>
                  {edu.school}
                </h4>
                
                <p className={`text-sm sm:text-base ${hoveredIndex === index ? 'text-white/80' : 'text-gray-600'}`}>
                  {edu.description}
                </p>
                
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/40 to-white/10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }} // Slower underline animation
                  style={{ transformOrigin: 'left' }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
