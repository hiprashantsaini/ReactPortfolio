import { motion } from 'framer-motion';
import React from 'react';
import { ReactTyped } from 'react-typed';
import img from '../data/MyImg.png';
import './AnimatedText.css';

const About = () => {
  return (
    <>
      <h2 className="w-full text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6 text-center">About Me</h2>
      <section id="about" className="container mx-auto py-12 px-6 flex flex-col-reverse md:flex-row items-center">

        {/* Left Section - About Text */}
        <motion.div
          className="md:w-1/2 w-full md:mr-8 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-black mb-4 text-base md:text-lg leading-relaxed">
            <p className='font-extrabold text-6xl'>Hi, I'm </p>
            <p className='font-extrabold text-6xl'>Prashant</p>
            <div className="text-center text-2xl md:text-4xl font-bold text-black">
              <div className='text-left'>
                <p className="inline-block">I am a </p>&ensp;
                <div className="typed-wrapper text-blue-600">
                  <ReactTyped
                    strings={[
                      'Full Stack Developer.',
                      'Backend Developer.',
                      'Frontend Developer.',
                      'MERN Stack Developer.',
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                    smartBackspace={true}
                    backDelay={1500}
                    showCursor={true}
                    cursorChar="|"
                  />
                </div>
              </div>
            </div>
            <p className='text-xl text-gray-700 font-thin'>I am a dedicated B.Tech CSE enthusiast with a passion for technology and innovation. Always eager to embrace new challenges, I strive to deliver high-quality results in every project I undertake. With a positive attitude and a commitment to continuous learning, I aim to make meaningful contributions to the tech industry and achieve remarkable success.</p>
          </p>
        </motion.div>

        {/* Right Section - Profile Picture */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center md:justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={img}
            alt="Your Profile"
            className="w-52 h-52 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
          />
        </motion.div>
      </section>
    </>
  );
};

export default About;
