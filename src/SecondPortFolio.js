import { GitHub } from '@mui/icons-material';
import {
    ArrowRight,
    Briefcase,
    Code,
    ExternalLink,
    GraduationCap,
    Layers,
    Linkedin,
    LoaderCircle,
    Mail,
    Menu,
    Server,
    Twitter,
    X
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import noticeAdminImage from "./components/Dashbord.png";
import educationPlatform from "./components/EducationSeekersProvider.png";
import noticeUserImage from "./components/Frontend.png";
import taskManager from "./components/LapTopScreen.png";

// Utility function for scroll animations
const useScrollAnimation = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
};

const AnimatedElement = ({ children, delay = 0, threshold = 0.2 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// Project data
const projectsData = [
    {
        title: "Social Media App",
        description: "A full-stack social media platform where users can share posts, follow others, and interact with comments and likes.",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        link: "https://updatedsocialmedia.netlify.app/",
        github: "https://github.com/hiprashantsaini/New-Social-Media-Application",
    },
    {
        title: "Classroom App",
        description: "A comprehensive platform for principals and teachers to manage students and classes, schedule class timetables, and facilitate communication between educators and students.",
        techStack: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js"],
        link: "https://classroom-web.netlify.app",
        github: "https://github.com/hiprashantsaini/collegeClassroom",
    },
    {
        title: "Twitter Clone",
        description: "A social media platform that allows users to create accounts, post tweets, follow other users, and engage in real-time discussions.",
        techStack: ["React", "Node.js", "Google Firebase", "MongoDB", "Tailwind CSS"],
        link: "https://twitter-cloneweb.netlify.app",
        github: "https://github.com/hiprashantsaini/twitter_frontend",
    },
    {
        title: "To-Do App",
        description: "A user-friendly task management application that allows users to create, update, and delete tasks, set due dates, and categorize tasks for better organization.",
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
        link: "https://todoplace.netlify.app",
        github: "https://github.com/hiprashantsaini/ToDoApp",
    },
    {
        title: "Task Planet UI Clone",
        description: "An intuitive UI clone of Task Planet, offering users a sleek interface to manage tasks efficiently. Users can create, update, and categorize tasks while enjoying a visually engaging experience that enhances productivity.",
        techStack: ["React", "React-Icons", "CSS"],
        link: "https://tpcloneui.netlify.app",
        github: "https://github.com/hiprashantsaini/TaskPlanetClone",
    }
];

const bestProjects = [
    {
        title: "NoticeForYou - User Interface",
        description: "A user-friendly notification platform where users can receive real-time alerts, manage preferences, and interact with notifications. Features include customizable notification settings, message threading, and push notifications.",
        image: noticeUserImage,
        techStack: ["React", "lucide-react", "Tailwind", "Redux", "Express", "Node.js", "MongoDB"],
        links: {
            github: "https://github.com/hiprashantsaini",
            live: "https://noticeforyou.netlify.app/"
        }
    },
    {
        title: "NoticeForYou - Admin Dashboard",
        description: "Comprehensive admin dashboard for managing the notification system. Features include user management, notification broadcasting, analytics, template management, and system monitoring.",
        image: noticeAdminImage,
        techStack: ["React", "Lucide-react", "Recharts.js", "Redux", "Express", "Node.js", "MongoDB", "JWT"],
        links: {
            github: "https://github.com/hiprashantsaini",
            live: "https://noticeforyou.netlify.app/admin"
        }
    },
    {
        title: "Education Provider and Seekers",
        description: "This a very helpfull applications that provides connetivity between education providers and seekers. It is proving features to connect with each other, communicate with messages.",
        image: educationPlatform,
        techStack: ["React", "Tailwind css", "Web sockets", "MongoDB", "Lucide-react", "Express", "Node.js", "JWT"],
        links: {
            github: "https://github.com/hiprashantsaini/Educational-Platform",
            live: "https://classroom-web.netlify.app/"
        }
    },
    {
        title: "Advanced Task Manager",
        description: "A powerful task management solution with Kanban boards, team collaboration, and advanced filtering. Includes features like task dependencies, time tracking, and automated workflows.",
        image: taskManager,
        techStack: ["React", "Tailwind css", "weather api", "Local Storage", "Lucide-react", "Framer-motion"],
        links: {
            github: "https://github.com/hiprashantsaini/react-todo-weather-app",
            live: "https://taskfullweb.netlify.app/"
        }
    }
];

// Skill data
const skillsData = {
    frontend: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Redux", "Responsive Design"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "SQL", "JWT Authentication"],
    tools: ["Git", "GitHub", "VS Code", "Netlify", "Postman", "Webpack"]
};

// Component for particle effect background
export const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const particleCount = Math.floor(window.innerWidth / 10);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 1,
                    speedX: Math.random() * 0.5 - 0.25,
                    speedY: Math.random() * 0.5 - 0.25,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        };

        const connectParticles = () => {
            const maxDistance = 180;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = 1 - (distance / maxDistance);
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(120, 149, 203, ${opacity * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(120, 149, 203, ${particle.opacity})`;
                ctx.fill();

                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < 0 || particle.x > canvas.width) {
                    particle.speedX = -particle.speedX;
                }

                if (particle.y < 0 || particle.y > canvas.height) {
                    particle.speedY = -particle.speedY;
                }
            });

            connectParticles();
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            // className="fixed top-0 left-0 w-full h-full -z-10"
            className="fixed top-0 left-0 w-full h-full z-0"//works with second portfolio
        />
    );
};

// NavLink component with hover effect
const NavLink = ({ href, children, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="relative text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
    >
        {children}
    </a>
);

// Main App Component
export default function SecondPortFolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollY = useScrollAnimation();
    const [activeSection, setActiveSection] = useState('home');

      const [isLoading, setIsLoading] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        setTimeout(() => {
          // Handle form submission logic here
          console.log(formData);
          setIsLoading(false);
          alert("You message sent.");
          // Reset the form after submission
          setFormData({ name: '', email: '', message: '' });
        }, 2000);
      };


    useEffect(() => {
        const sections = ['home', 'about', 'projects', 'featured', 'contact'];

        const handleScroll = () => {
            const currentPosition = window.scrollY + 300;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;

                    if (
                        currentPosition >= offsetTop &&
                        currentPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
            <ParticleBackground />

            {/* Navbar */}
            <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrollY > 10 ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#home" className="flex items-center group">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mr-2 group-hover:rotate-12 transition-transform duration-300">P</div>
                        <span className="text-xl font-bold text-white">Prashant <span className="text-blue-400">Saini</span></span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-1">
                        <NavLink href="#home" onClick={() => scrollToSection('home')}>Home</NavLink>
                        <NavLink href="#about" onClick={() => scrollToSection('about')}>About</NavLink>
                        <NavLink href="#projects" onClick={() => scrollToSection('projects')}>Projects</NavLink>
                        <NavLink href="#featured" onClick={() => scrollToSection('featured')}>Featured Work</NavLink>
                        <NavLink href="#contact" onClick={() => scrollToSection('contact')}>Contact</NavLink>
                    </div>

                    {/* Mobile Navigation Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Navigation Menu */}
                <div
                    className={`fixed right-0 w-[50vw] h-[90vh] top-15 bg-gray-900/98 z-50 flex flex-col pt-10 items-center transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible bg-gray-900' : 'opacity-0 invisible'} md:hidden`}
                >
                    <div className="flex flex-col items-center space-y-8">
                        <a
                            href="#home"
                            onClick={() => scrollToSection('home')}
                            className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={() => scrollToSection('about')}
                            className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            onClick={() => scrollToSection('projects')}
                            className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#featured"
                            onClick={() => scrollToSection('featured')}
                            className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors"
                        >
                            Featured Work
                        </a>
                        <a
                            href="#contact"
                            onClick={() => scrollToSection('contact')}
                            className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    <div className="absolute bottom-10 flex space-x-6">
                        <a href="https://github.com/hiprashantsaini" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                            <GitHub size={20} />
                        </a>
                        <a href="https://linkedin.com/in/prashant-saini" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:contact@prashantsaini.com" className="text-gray-300 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>


            </header>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center pt-20">
                <div className="container mx-auto px-6 py-20">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 mb-12 md:mb-0">
                            <AnimatedElement>
                                <p className="text-blue-400 font-medium mb-4">Hi there! I'm</p>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
                                    Prashant Saini
                                </h1>
                                <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
                                    Full Stack Developer & Computer Science Engineer
                                </h2>
                                <p className="text-gray-400 mb-8 max-w-lg">
                                    I build modern, responsive, and high-performance web applications using the latest technologies.
                                    Passionate about creating intuitive user experiences and scalable backend solutions.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="#projects"
                                        onClick={() => scrollToSection('projects')}
                                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center group"
                                    >
                                        View Projects
                                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                    <a
                                        href="#contact"
                                        onClick={() => scrollToSection('contact')}
                                        className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                        Get In Touch
                                    </a>
                                </div>
                            </AnimatedElement>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-center">
                            <AnimatedElement delay={300}>
                                <div className="w-64 h-64 md:w-80 md:h-80 relative">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse"></div>
                                    <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
                                        <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">PS</div>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </div>

            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-6">
                    <AnimatedElement>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">About Me</h2>
                        <div className="w-20 h-1 bg-blue-500 mb-10"></div>
                    </AnimatedElement>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <AnimatedElement delay={200}>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-white">Who I am</h3>
                                <p className="text-gray-300 mb-4">
                                    I'm Prashant Saini, a Computer Science Engineer with a passion for building web applications
                                    that solve real-world problems. With expertise in the MERN stack and related technologies,
                                    I strive to create intuitive and efficient solutions.
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Throughout my education and internship experience, I've developed a strong foundation in
                                    both frontend and backend development. I enjoy the challenges of building responsive user interfaces
                                    and robust API integrations.
                                </p>
                                <p className="text-gray-300">
                                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                                    projects, and continuously expanding my knowledge in the ever-evolving field of web development.
                                </p>
                            </div>
                        </AnimatedElement>

                        <AnimatedElement delay={400}>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-white">Skills & Expertise</h3>

                                <div className="mb-6">
                                    <div className="flex items-center mb-2">
                                        <Code size={18} className="text-blue-400 mr-2" />
                                        <h4 className="text-xl font-medium text-white">Frontend Development</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skillsData.frontend.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-300 transition-colors duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-center mb-2">
                                        <Server size={18} className="text-blue-400 mr-2" />
                                        <h4 className="text-xl font-medium text-white">Backend Development</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skillsData.backend.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-300 transition-colors duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center mb-2">
                                        <Layers size={18} className="text-blue-400 mr-2" />
                                        <h4 className="text-xl font-medium text-white">Tools & Technologies</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skillsData.tools.map((tool, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-300 transition-colors duration-300"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedElement>
                    </div>

                    <AnimatedElement delay={600}>
                        <div className="mt-16">
                            <h3 className="text-2xl font-semibold mb-6 text-white">Experience & Education</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300">
                                    <div className="flex items-start mb-4">
                                        <div className="p-2 rounded-md bg-blue-500/20 mr-4">
                                            <Briefcase size={24} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium text-white">Internship Experience (Dec 2024 - Mar 2025)</h4>
                                            <p className="text-gray-400">Web Development Intern</p>
                                            <p className="text-gray-500 text-sm">3 months</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300">
                                        Worked on developing and maintaining web applications using the MERN stack.
                                        Collaborated with team members to implement new features and fix bugs.
                                        Gained practical experience in real-world development environments.
                                    </p>
                                </div>

                                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300">
                                    <div className="flex items-start mb-4">
                                        <div className="p-2 rounded-md bg-blue-500/20 mr-4">
                                            <GraduationCap size={24} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium text-white">Graduation (2021-2025)</h4>
                                            <h4 className="text-lg font-medium text-white">REC Kannauj (AKTU University)</h4>
                                            <p className="text-gray-400">B.Tech in Computer Science and Engineering</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300">
                                        Persuing a Bachelor's degree in Computer Science and Engineering with a focus on web development,
                                        algorithms, data structures, and software engineering principles.
                                    </p>
                                </div>

                                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300">
                                    <div className="flex items-start mb-4">
                                        <div className="p-2 rounded-md bg-blue-500/20 mr-4">
                                            <GraduationCap size={24} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium text-white">Intermediate (2019-2020)</h4>
                                            <h4 className="text-lg font-medium text-white">I.M.I. College Meerut (U.P. Board)</h4>
                                            <p className="text-gray-400">81.4% in 12th examinations.</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300">
                                        Achieved 1st position in 12th grade, excelling in science subjects and demonstrating a strong commitment to academic excellence.
                                    </p>
                                </div>

                                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300">
                                    <div className="flex items-start mb-4">
                                        <div className="p-2 rounded-md bg-blue-500/20 mr-4">
                                            <GraduationCap size={24} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium text-white">High School (2017-2018)</h4>
                                            <h4 className="text-lg font-medium text-white">I.M.I. College Meerut (U.P. Board)</h4>
                                            <p className="text-gray-400">86.66% in 10th examinations.</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300">
                                        Secured 1st position in 10th grade, showcasing strong performance across nearly all subjects and a dedication to academic excellence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 relative">
                <div className="container mx-auto px-6 pb-10">
                    <AnimatedElement>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Projects</h2>
                        <div className="w-20 h-1 bg-blue-500 mb-10"></div>
                        <p className="text-gray-300 max-w-2xl mb-12">
                            Here are some of the projects I've worked on. Each project demonstrates my skills in different areas of web development.
                        </p>
                    </AnimatedElement>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project, index) => (
                            <AnimatedElement key={project.title} delay={index * 100}>
                                <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 flex flex-col h-full">
                                    <div className="p-6 flex-1">
                                        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                                        <p className="text-gray-300 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.techStack.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-700/70 text-gray-300 rounded-md text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-4 border-t border-gray-700 flex justify-between">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <ExternalLink size={16} className="mr-1" />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <GitHub size={16} className="mr-1" />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section id="featured" className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-6">
                    <AnimatedElement>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Featured Work</h2>
                        <div className="w-20 h-1 bg-blue-500 mb-10"></div>
                        <p className="text-gray-300 max-w-2xl mb-12">
                            Highlighted projects that showcase my best work and technical capabilities.
                        </p>
                    </AnimatedElement>

                    {bestProjects.map((project, index) => (
                        <AnimatedElement key={project.title} delay={index * 200}>
                            <div className={`mb-16 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/30 transition-all duration-300`}>
                                <div className="w-full md:w-1/2 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                                    <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-4">
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center"
                                        >
                                            <ExternalLink size={16} className="mr-2" />
                                            View Live
                                        </a>
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-md transition-colors duration-300 flex items-center"
                                        >
                                            <GitHub size={16} className="mr-2" />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>
            </section>

            {/* Skills Showcase Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <AnimatedElement>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">My Tech Stack</h2>
                        <div className="w-20 h-1 bg-blue-500 mb-10"></div>
                    </AnimatedElement>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: "React", icon: <div className="text-blue-400 text-4xl">⚛️</div> },
                            { name: "JavaScript", icon: <div className="text-yellow-400 text-4xl">JS</div> },
                            { name: "Node.js", icon: <div className="text-green-400 text-4xl">🟢</div> },
                            { name: "MongoDB", icon: <div className="text-green-500 text-4xl">🍃</div> },
                            { name: "Express", icon: <div className="text-gray-200 text-4xl">Ex</div> },
                            { name: "HTML5", icon: <div className="text-orange-500 text-4xl">🌐</div> },
                            { name: "CSS3", icon: <div className="text-blue-500 text-4xl">🎨</div> },
                            { name: "Tailwind", icon: <div className="text-cyan-400 text-4xl">TW</div> },
                            { name: "Redux", icon: <div className="text-purple-500 text-4xl">🔄</div> },
                            { name: "Git", icon: <div className="text-orange-600 text-4xl">🔄</div> },
                            { name: "RESTful API", icon: <div className="text-blue-300 text-4xl">🔌</div> },
                            { name: "SQL", icon: <div className="text-blue-400 text-4xl">🗄️</div> }
                        ].map((tech, index) => (
                            <AnimatedElement key={tech.name} delay={index * 50}>
                                <div className="bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/70 p-6 flex flex-col items-center justify-center transition-all duration-300 group">
                                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {tech.icon}
                                    </div>
                                    <span className="text-gray-300 font-medium">{tech.name}</span>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-6">
                    <AnimatedElement>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Get In Touch</h2>
                        <div className="w-20 h-1 bg-blue-500 mb-10"></div>
                        <p className="text-gray-300 max-w-2xl mb-12">
                            Have a project in mind or want to discuss potential collaborations? Feel free to reach out!
                        </p>
                    </AnimatedElement>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <AnimatedElement delay={200}>
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="p-3 bg-blue-500/20 rounded-md mr-4">
                                            <Mail size={24} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                                            <a href="mailto:contact@prashantsaini.com" className="text-gray-300 hover:text-blue-400 transition-colors">prashantsaini4449@gmail.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="p-3 bg-blue-500/20 rounded-md mr-4">
                                            <Linkedin size={24} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-white mb-1">LinkedIn</h4>
                                            <a href="https://www.linkedin.com/in/prashant-saini-a60579241/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">https://www.linkedin.com/in/prashant-saini-a60579241/</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="p-3 bg-blue-500/20 rounded-md mr-4">
                                            <GitHub size={24} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-white mb-1">GitHub</h4>
                                            <a href="https://github.com/hiprashantsaini" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">github.com/hiprashantsaini</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedElement>

                        <AnimatedElement delay={400}>
                            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                                <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 mb-2">Name*</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 mb-2">Email*</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-300 mb-2">Message*</label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            name='message'
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                            placeholder="Your message here..."
                                            required
                                        ></textarea>
                                    </div>

                                    {isLoading ? <button
                                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full flex items-center justify-center group"
                                    >
                                        <LoaderCircle className="ml-2 size-6 animate-spin" />
                                    </button> :<button
                                        type="submit"
                                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full flex items-center justify-center group"
                                    >
                                        <span>Send Message</span>
                                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>}
                                </form>
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <a href="#home" className="flex items-center group">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mr-2 group-hover:rotate-12 transition-transform duration-300">P</div>
                                <span className="text-xl font-bold text-white">Prashant <span className="text-blue-400">Saini</span></span>
                            </a>
                            <p className="text-gray-400 mt-2">Full Stack Developer</p>
                        </div>

                        <div className="flex flex-col items-center md:items-end">
                            <div className="flex space-x-4 mb-4">
                                <a href="https://github.com/hiprashantsaini" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2">
                                    <GitHub size={20} />
                                </a>
                                <a href="https://linkedin.com/in/prashant-saini" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://twitter.com/prashantsaini" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2">
                                    <Twitter size={20} />
                                </a>
                                <a href="mailto:contact@prashantsaini.com" className="text-gray-400 hover:text-white transition-colors p-2">
                                    <Mail size={20} />
                                </a>
                            </div>
                            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Prashant Saini. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to top button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 focus:outline-none hover:bg-blue-700 ${scrollY > 300 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    );
}