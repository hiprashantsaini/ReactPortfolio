import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
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
import SecondPortFolio from './SecondPortFolio';

const App = () => {
  const [portfolio, setPortfolio] = useState('modern'); // 'modern' or 'classic'

  const togglePortfolio = () => {
    setPortfolio(portfolio === 'modern' ? 'classic' : 'modern');
  };

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <button
        onClick={togglePortfolio}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 group hover:scale-110"
        title={`Switch to ${portfolio === 'modern' ? 'Classic' : 'Modern'} Portfolio`}
      >
        <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
          {portfolio === 'modern' ? (
            <Moon size={20} className="group-hover:rotate-180 transition-transform duration-500" />
          ) : (
            <Sun size={20} className="group-hover:rotate-180 transition-transform duration-500" />
          )}
        </div>
      </button>

      {/* Modern Portfolio (Default) */}
      {portfolio === 'modern' && (
        <div className="w-full">
          <SecondPortFolio />
        </div>
      )}

      {/* Classic Portfolio */}
      {portfolio === 'classic' && (
        <div className='w-full'>
          <Header />
          <EnhancedParticleBackground />
          <About />
          <Education />
          <Skills />
          <Projects />
          <BestProjects />
          <Experience />
          <ContactForm />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
