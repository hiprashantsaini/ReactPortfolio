import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import '../borderStyle.css';
import img from '../data/profileImage.png';
import './AnimatedText.css';


const About = () => {
  return (
    <>
      <h2 className="w-full text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6 text-center">About Me</h2>
      <section id="about" className="container mx-auto py-12 px-6 flex flex-col-reverse md:flex-row">
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
            <p className='text-xl text-gray-700 font-thin'>
              I am a MERN Stack Developer with industry experience in building dynamic and scalable web applications. I specialize in React for creating interactive user interfaces and Node.js with Express for developing robust backend systems, powered by MongoDB databases. I enjoy transforming ideas into full-stack applications by writing optimized, secure, and maintainable code. I am committed to continuous growth and delivering high-quality solutions that drive real-world impact.
            </p>

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
            className='w-52 h-52 md:w-80 md:h-80 rounded-full shadow-lg overflow-hidden object-contain'
          />

        </motion.div>
      </section>

      {/* Contact Information Section */}
      <motion.section
        className="mt-12 px-6 pb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 shadow-2xl shadow-orange-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h3>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Email Card */}
            <motion.a
              href="mailto:prashantsaini4449@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer w-full md:w-auto"
            >
              <div className="bg-blue-600 text-white rounded-full p-4 text-2xl">
                ✉
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Email</p>
                <p className="text-lg font-bold text-gray-800">prashantsaini4449@gmail.com</p>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href="tel:+917895669626"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer w-full md:w-auto"
            >
              <div className="bg-green-600 text-white rounded-full p-4 text-2xl">
                ☎
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Phone</p>
                <p className="text-lg font-bold text-gray-800">+91 7895669626</p>
              </div>
            </motion.a>
          </div>

          <p className="text-center text-gray-600 mt-6 text-sm">
            Feel free to reach out! I'm always happy to discuss new opportunities.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default About;
