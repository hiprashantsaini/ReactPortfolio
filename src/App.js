import { Close, KeyboardArrowDown } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import About from './components/About';
import BestProjects from './components/BestProjects';
import ContactForm from './components/ContactForm';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { EnhancedParticleBackground } from './ParticleBackgrounds';


const App = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showBest, setShowBest] = useState(false);


  return (
    <div className='w-full'>
      <Header />
      <EnhancedParticleBackground />

      <About />
      <div className='w-full p-8 flex justify-center items-center gap-6 text-pretty'>
        <button
          onClick={() => setShowSkills(true)}
          className='relative p-3 px-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg text-lg font-bold uppercase tracking-wider shadow-lg overflow-hidden group animate-pulse'
        >
          <span className='relative z-10 flex overflow-hidden'>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full'>S</span>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full delay-75'>k</span>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full delay-100'>i</span>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full delay-150'>l</span>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full delay-200'>l</span>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full delay-300'>s</span>
          </span>
          <span className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-200 animate-gradient'></span>
          <span className='absolute bottom-0 left-0 w-full h-1 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
          <span className='absolute -inset-x-full -bottom-full h-16 w-full transform translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent'></span>
        </button>

        <button
          onClick={() => setShowProjects(true)}
          className='relative p-3 px-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg text-lg font-bold uppercase tracking-wider shadow-lg overflow-hidden group animate-pulse'
        >
          <span className='relative z-10 flex overflow-hidden'>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full'>P</span>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full delay-75'>r</span>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full delay-100'>o</span>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full delay-150'>j</span>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full delay-200'>e</span>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full delay-250'>c</span>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full delay-300'>t</span>
            <span className='transform transition-transform duration-300 group-hover:-translate-y-full delay-350'>s</span>
          </span>
          <span className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-200 animate-gradient'></span>
          <span className='absolute bottom-0 left-0 w-full h-1 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
          <span className='absolute -inset-x-full -bottom-full h-16 w-full transform translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent'></span>
        </button>
      </div>
      <AnimatePresence>
        {
          showProjects && (
            <motion.div className='fixed z-50 top-0 left-0 w-full h-screen bg-blue-100 bg-opacity-90 overflow-x-auto' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} exit={{ x: -50, opacity: 0 }} style={{ scrollbarWidth: 'thin' }}>
              <div className='text-red-500 cursor-pointer m-4 absolute top-10 sm:left-20 border-2 border-white rounded-full'><Close onClick={() => { setShowProjects(false); setShowBest(false) }} /></div>
              <Projects />
              <motion.div onClick={(e) => setShowBest(true)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }} className='pb-2 text-center'><button className='bg-blue-500 py-2 px-4 text-white text-xl hover:bg-white hover:text-blue-600 text-pretty rounded-xl'> <KeyboardArrowDown className='animate-bounce' /> Best Work</button></motion.div>
              {showBest && <BestProjects />}
            </motion.div>
          )
        }
      </AnimatePresence>

      <AnimatePresence>
        {
          showSkills && (
            <motion.div className='fixed z-50 top-0 left-0 w-full h-screen bg-blue-100 bg-opacity-90 overflow-x-auto' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} exit={{ x: -50, opacity: 0 }} style={{ scrollbarWidth: 'thin' }}>
              <div className='text-red-500 cursor-pointer m-4 absolute top-10 sm:left-20 border-2 border-white rounded-full'><Close onClick={() => setShowSkills(false)} /></div>
              <Skills />
            </motion.div>
          )
        }
      </AnimatePresence>
      <Education />
      <Skills />
      <Projects />
      <Experience/>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;


