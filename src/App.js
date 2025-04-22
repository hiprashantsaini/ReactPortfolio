import { Close, KeyboardArrowDown } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import About from './components/About';
import BestProjects from './components/BestProjects';
import ContactForm from './components/ContactForm';
import Education from './components/Education';
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
      <EnhancedParticleBackground/>

      <About />
      <div className='w-full p-6 flex justify-center items-center gap-4 text-pretty'>
        <button onClick={() => setShowSkills(true)} className='p-2 px-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-white rounded-xl text-lg font-semibold'>SKILLS</button>
        <button onClick={() => setShowProjects(true)} className='p-2 px-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-white rounded-xl text-lg font-semibold'>PROJECTS</button>
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
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;


