import React from 'react';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';


const App = () => {
  return (
   <div className='w-full border border-red-900'>
      <Header/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <ContactForm/>
      <Footer/>
   </div>
  );
};

export default App;
