import React, { useState, useEffect, useRef } from 'react';
import { Search, Users, Award, Briefcase, Menu, X, Code, Database, Server, Globe, Zap, Trophy, BookOpen, Play, Clock, Star, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Settings, CheckCircle, FolderOpen, Monitor, Smartphone, Tablet, Eye, ChevronLeft, ChevronRight, Twitter, Instagram, Home, User, FileText } from 'lucide-react';
import Me from '../assets/me.jpeg'
import Api from '../api'
import { useNavigate } from "react-router-dom";
import Screenshot1 from '../assets/e1.png';
import { motion } from "framer-motion";
import 'aos/dist/aos.css';
import AOS from 'aos';
export default function MERNStackAcademy() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Simulate full page load (aap chahe to yahan API ya image load bhi check kar sakte ho)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second tak loading dikhana

    return () => clearTimeout(timer);
  }, []);



  // Track active section for mobile navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // only animate once per scroll
    });
  }, []);

  const projects = [
    {
      "id": 1,
      "title": "Responsive E-Commerce Web App with PWA",
      "subtitle": "Mobile-First Shopping Experience | MERN Stack",
      "description": "An intuitive and scalable e-commerce web application built with the MERN stack, featuring a mobile-first design and offline usability through PWA integration. The frontend is fully developed with smooth navigation, dynamic product pages, and a working cart system. Backend modules such as payments, admin controls, and order tracking are under active development.",
      "tech": ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "PWA"],
      "status": "Frontend Ready | Backend In Progress",
      "github": "https://github.com/Suriya2023/Ecoomerce-Frontennd-Backend",
      "live": "https://ecommerce-store-five-jet.vercel.app/",
      "image": "🛍️",
      "color": "from-teal-400/10 to-fuchsia-600/10",
      "screenshot": Screenshot1,
      "features": [
        "Progressive Web App (PWA) - Offline Browsing",
        "Mobile-Optimized Interface",
        "Product Listings with Manual Filtering",
        "Interactive Shopping Cart",
        "User Authentication & Account Creation",
        "Seamless Navigation System",
        "Add to Cart and Wishlist Functionality",
        "Future Additions: Admin Panel, Payments, Inventory, Order System"
      ]
    }
    ,

    {
      "id": 2,
      "title": "Social Media Dashboard",
      "subtitle": "Real-time Analytics Platform",
      "description": "Interactive dashboard for social media analytics with real-time data visualization, user engagement metrics, and automated reporting.",
      "tech": ["React.js", "Express.js", "MongoDB", "Socket.io"],
      "status": "IN PROGRESS",
      "github": "#",
      "live": "#",
      "image": "📊",
      "color": "from-green-500/10 to-cyan-600/10",
      "screenshot": "comming",
      "features": [
        "Real-time Analytics",
        "Data Visualization",
        "User Metrics",
        "Automated Reports",
        "Multi-platform",
        "Export Data"
      ]
    },
    {
      "id": 3,
      "title": "Task Management App",
      "subtitle": "Collaborative Project Tool",
      "description": "Team collaboration platform with task assignment, progress tracking, file sharing, and integrated communication features.",
      "tech": ["React.js", "Node.js", "MongoDB", "JWT"],
      "status": "COMPLETED",
      "github": "#",
      "live": "#",
      "image": "✅",
      "color": "from-purple-500/10 to-pink-600/10",
      "screenshot": "URL_TO_SCREENSHOT_3",
      "features": [
        "Task Assignment",
        "Progress Tracking",
        "File Sharing",
        "Team Chat",
        "Deadline Alerts",
        "Project Timeline"
      ]
    },
    {
      "id": 4,
      "title": "Eduport Learning Platform",
      "subtitle": "Online Course & Teaching App",
      "description": "A modern education platform for online learning, video lessons, progress tracking, and teacher-student collaboration.",
      "tech": ["React.js", "Node.js", "MongoDB", "JWT"],
      "status": "IDEA",
      "github": "#",
      "live": "#",
      "image": "📚",
      "color": "from-yellow-400/10 to-orange-500/10",
      "screenshot": "URL_TO_SCREENSHOT_4",
      "features": [
        "Course Listing",
        "Video Player",
        "Progress Tracking",
        "Instructor Panel",
        "Student Dashboard"
      ]
    },
    {
      "id": 5,
      "title": "Netflix Clone",
      "subtitle": "Video Streaming Platform",
      "description": "An OTT platform to browse, preview, and watch movies/TV shows with category filters and watchlist support.",
      "tech": ["React.js", "Firebase", "TMDB API"],
      "status": "IN PROGRESS",
      "github": "#",
      "live": "#",
      "image": "🎥",
      "color": "from-red-500/10 to-black/10",
      "screenshot": "URL_TO_SCREENSHOT_5",
      "features": [
        "User Login",
        "Movie Categories",
        "Watchlist",
        "Trailer Preview",
        "Dark Theme"
      ]
    },
    {
      "id": 6,
      "title": "Service Finder App",
      "subtitle": "Local Services Hiring Directory",
      "description": "A platform for users to find and hire local professionals like electricians, tutors, drivers, and more.",
      "tech": ["React.js", "Node.js", "MongoDB", "JWT"],
      "status": "PLANNED",
      "github": "#",
      "live": "#",
      "image": "🔧",
      "color": "from-indigo-500/10 to-yellow-500/10",
      "screenshot": "URL_TO_SCREENSHOT_6",
      "features": [
        "Service Categories",
        "Booking System",
        "City-Based Search",
        "User Reviews",
        "Contact Integration"
      ]
    }
  ];

  const techStack = [
    { name: "MongoDB", icon: Database, color: "from-green-400 to-green-600", level: "85%" },
    { name: "Express.js", icon: Server, color: "from-gray-600 to-gray-800", level: "80%" },
    { name: "React.js", icon: Code, color: "from-blue-400 to-blue-600", level: "90%" },
    { name: "Node.js", icon: Globe, color: "from-green-500 to-green-700", level: "85%" }
  ];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ts2z5tt",
        "template_081gefv",
        form.current,
        "i6Co8tIuaAVGZBxo0ZEfm"      // ✅ Replace with actual
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Expert in React.js, HTML5, CSS3, JavaScript ES6+, Tailwind CSS, and responsive web design"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Proficient in Node.js, Express.js, RESTful APIs, authentication, and server-side architecture"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Experienced with MongoDB, MySQL, database design, aggregation pipelines, and data optimization"
    },

  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Veer Narmad South Gujarat  University, Surat",
      year: "2023 - Present",
      status: "Pursuing (4th Sem)",
      grade: "8.25",
      semesters: [
        { sem: "Sem 1", sgpa: "7.54" },
        { sem: "Sem 2", sgpa: "7.68" },
        { sem: "Sem 3", sgpa: "8.35" },
        { sem: "Sem 4", sgpa: "Processing" }
      ]
    }
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white font-mono">
        {/* Glowing spinner */}
        <div className="w-20 h-20 border-4 border-t-transparent border-b-transparent border-l-cyan-400 border-r-pink-500 rounded-full animate-spin shadow-lg shadow-cyan-500/50 mb-6"></div>

        {/* Typing effect */}
        <div className="text-xl md:text-2xl text-cyan-300 loading-typing border-r-2 border-cyan-300 whitespace-nowrap overflow-hidden">
          Booting up your experience...
        </div>
      </div>

    );
  }
  return (
    <div className="min-h-screen 
    bg-gradient-to-br   from-blue-900  via-black  to-red-900  pb-20 md:pb-0  " >

      {/* Navigation */}
      <nav className="backdrop-blur-md border-b border-white/10 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Suraj Rajput
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button data-aos="zoom-in" onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button>
                <button data-aos="zoom-in" onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors">Skills</button>
                <button data-aos="zoom-in" onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">Projects</button>
                <button data-aos="zoom-in" onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-white transition-colors">Education</button>
                <button data-aos="zoom-in" onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
              </div>
            </div>

            <div className="hidden md:block">
              <button data-aos="zoom-in" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105">
                Hire Me
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button data-aos="zoom-in" className="text-gray-300">
                {isMenuOpen ? <X size={24} /> : <Users size={24} />}
              </button>
            </div>
          </div>
        </div>

      </nav>


      {/* Bottom Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0  bg-transparent   0 backdrop-blur-lg border-t border-white/10 z-50">
        <div className="flex justify-around items-center py-2">
          <button
            onClick={() => scrollToSection('about')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${activeSection === 'about'
              ? 'text-cyan-400 bg-cyan-400/10'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Home</span>
          </button>

          <button
            onClick={() => scrollToSection('skills')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${activeSection === 'skills'
              ? 'text-cyan-400 bg-cyan-400/10'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            <Code className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Skills</span>
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${activeSection === 'projects'
              ? 'text-cyan-400 bg-cyan-400/10'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            <FolderOpen className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Projects</span>
          </button>

          <button
            onClick={() => scrollToSection('education')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${activeSection === 'education'
              ? 'text-cyan-400 bg-cyan-400/10'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            <BookOpen className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Education</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${activeSection === 'contact'
              ? 'text-cyan-400 bg-cyan-400/10'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            <Mail className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Contact</span>
          </button>
        </div>
      </div>

      <section className="py-12 md:py-20 lg:py-24 mt-16" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl p-6 md:p-10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Info */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-6">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-medium">Full Stack (MERN) Developer</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Suraj Rajput</span>
                </h1>

                <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                  Aspiring Front-End Developer based in Surat, Gujarat. Proficient in React.js, JavaScript, and modern UI/UX principles. Currently pursuing BCA (2nd Year, 4th Semester) and passionate about building responsive, user-centric web applications.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a
                    href="mailto:surajrajput221221@gmail.com?subject=Let's Work Together&body=Hi Suraj,%0D%0AI'm interested in working with you!"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full hover:scale-110 transition-transform duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get In Touch</span>
                  </a>

                  <a href="/suraj-resume.pdf"
                    download
                    className="border-2 border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-400/10 transition-all flex items-center justify-center space-x-2 hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Resume</span>
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-gray-400 text-sm">Projects Built</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">2nd Year</div>
                    <div className="text-gray-400 text-sm">BCA Student</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">8.5</div>
                    <div className="text-gray-400 text-sm">CGPA</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative flex flex-col items-center justify-center"
              >
                <div className="relative group">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:shadow-purple-600/30 hover:scale-105">
                    <img
                      src={Me}
                      alt="Suraj Rajput"
                      className="object-cover w-full h-full transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full animate-[spin_8s_linear_infinite] bg-gradient-to-br from-purple-500/20 via-cyan-500/10 to-transparent blur-lg"></div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute top-3 md:top-6 right-0 md:right-6 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 text-white text-sm shadow-lg"
                >
                  <BookOpen className="w-5 h-5 text-cyan-400 mb-1" />
                  <div className="font-semibold">Student</div>
                  <div className="text-xs text-gray-300">BCA 2nd Year</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute bottom-3 md:bottom-6 left-0 md:left-6 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 text-white text-sm shadow-lg"
                >
                  <Trophy className="w-5 h-5 text-purple-400 mb-1" />
                  <div className="font-semibold">15+</div>
                  <div className="text-xs text-gray-300">Projects</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* is ko unique bnao mere linkedin releted content add karo */}

      {/* Contact Info */}
      <section data-aos="fade-up" className="py-10 md:py-16 bg-black/5 dark:bg-black/20 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Feel free to reach out via any platform listed below. I’m open to freelance, full-time, or collaborative work.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-6 md:p-10 border border-white/10 backdrop-blur-md shadow-lg">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-white">

              {/* Email */}
              <a
                href="mailto:surajrajput@email.com"
                className="group flex items-center space-x-2 hover:scale-105 transition-transform"
                title="Send Email"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:animate-bounce" />
                <span className="text-sm md:text-base group-hover:underline">surajrajput@email.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="group flex items-center space-x-2 hover:scale-105 transition-transform"
                title="Call Now"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-purple-400 group-hover:animate-pulse" />
                <span className="text-sm md:text-base group-hover:underline">+91 9510190352</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Suriya2023"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 hover:scale-105 transition-transform"
                title="Visit GitHub"
              >
                <Github className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white" />
                <span className="text-sm md:text-base group-hover:underline">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/suraj-rajput-a65bb9358/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 hover:scale-105 transition-transform"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-blue-400 group-hover:text-white" />
                <span className="text-sm md:text-base group-hover:underline">LinkedIn</span>
              </a>

              {/* Location */}
              <div
                className="group flex items-center space-x-2 hover:scale-105 transition-transform cursor-default"
                title="Location"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 12.5C19.5 17 12 21 12 21S4.5 17 4.5 12.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm md:text-base">Surat, Gujarat</span>
              </div>

              {/* Resume */}
              <a
                href="/suraj-resume.pdf"
                download
                className="group flex items-center space-x-2 hover:scale-105 transition-transform"
                title="Download Resume"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l3.5-3.5M12 20l-3.5-3.5" />
                </svg>
                <span className="text-sm md:text-base group-hover:underline">Download Resume</span>
              </a>


            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Technologies</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              My creative toolkit, ranging from UI development to AI integration — designed to deliver smart, sleek digital experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tech Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-5 md:p-6 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 text-white flex flex-col items-center`}
                >
                  <div className="p-4 bg-white/10 rounded-full mb-3 shadow-inner">
                    <tech.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm md:text-base">{tech.name}</h4>
                  <div className="w-full mt-2 bg-white/20 rounded-full h-1.5">
                    <div
                      className="bg-white h-full rounded-full transition-all duration-1000"
                      style={{ width: tech.level }}
                    ></div>
                  </div>
                  <span className="text-xs text-white/80 mt-1">{tech.level}</span>
                </div>
              ))}
            </div>

            {/* Skill Descriptions */}
            <div className="space-y-6 relative">
              {/* Ribbon Badge */}
              <div className="absolute -top-5 left-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10">
                Featured
              </div>

              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl space-y-4">
                <h3 className="text-xl font-bold text-white">AI Prompt Engineering</h3>
                <p className="text-white/90 text-sm">
                  Designing highly contextual prompts to maximize AI model efficiency and response precision using tools like GPT-4.
                </p>
              </div>

              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition"
                >
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full shadow-md">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{skill.title}</h4>
                    <p className="text-sm text-gray-300">{skill.description}</p>
                  </div>
                </div>
              ))}

              {/* Extra Section – Optional */}
              <div className="pt-4">
                <h4 className="text-white font-semibold text-lg mb-2">Collaboration Strengths</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  <li>Team-first mindset & proactive communication</li>
                  <li>Agile & Scrum familiarity</li>
                  <li>Continuous learning & AI-integrated problem solving</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      {/* Enhanced Projects Section */}
      <section data-aos="zoom-in" id="projects" className="py-12 md:py-16 lg:py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-3xl p-6 md:p-10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        >
          <div data-aos="zoom-in" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 border border-white/10">
                <FolderOpen className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                <span className="text-cyan-400 text-xs md:text-sm font-semibold">Portfolio</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
                Showcase of my best work in MERN stack development
              </p>
            </div>

            {/* Enhanced Project Carousel */}
            <div data-aos="zoom-in" className="relative">
              <div className="overflow-hidden rounded-3xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {projects.map((project, index) => (
                    <div key={project.id} className="w-full flex-shrink-0">
                      <div className={`bg-white/5 backdrop-blur-lg rounded-3xl p-4 md:p-6 lg:p-8 border border-white/10 hover:border-cyan-400/30 transition-all mx-2 md:mx-4 bg-gradient-to-br ${project.color}`}>
                        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                          <div>
                            <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                              <div className="text-4xl md:text-6xl">{project.image}</div>
                              <div>
                                <div className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${project.status === 'COMPLETED'
                                  ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                                  }`}>
                                  <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-1 md:mr-2 ${project.status === 'COMPLETED' ? 'bg-green-400' : 'bg-yellow-400'
                                    } animate-pulse`}></div>
                                  {project.status}
                                </div>
                              </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
                            <p className="text-cyan-400 text-lg md:text-xl mb-4 md:mb-6 font-medium">{project.subtitle}</p>
                            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">{project.description}</p>

                            <div className="mb-6 md:mb-8">
                              <h4 className="text-white font-semibold mb-3 md:mb-4 flex items-center text-sm md:text-base">
                                <Settings className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mr-2" />
                                Key Features
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                                {project.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center space-x-2">
                                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-400 flex-shrink-0" />
                                    <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div data-aos="zoom-in" className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                              {project.tech.map((tech, techIndex) => (
                                <span key={techIndex} className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 rounded-full text-xs md:text-sm border border-cyan-400/30 font-medium">
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <div data-aos="zoom-in" className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                              <button
                                onClick={() => {
                                  window.location.href = project.github;
                                }}
                                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105"
                              >
                                <Github className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="font-medium text-sm md:text-base">View Code</span>
                              </button>

                              <button
                                onClick={() => {
                                  window.location.href = project.live;
                                }}
                                className="flex items-center justify-center space-x-2 border-2 border-cyan-400/50 text-cyan-400 px-4 md:px-6 py-2.5 md:py-3 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
                              >
                                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="font-medium text-sm md:text-base">Live Demo</span>
                              </button>

                            </div>
                          </div>

                          {/* Project Preview */}
                          <div data-aos="zoom-in" className="relative">
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10">
                              <div className="flex items-center space-x-2 mb-4 md:mb-6">
                                <div className="flex space-x-1">
                                  <div data-aos="zoom-in" className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                                  <div data-aos="zoom-in" className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                                  <div data-aos="zoom-in" className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="flex-1 bg-slate-700/50 rounded-full h-6 md:h-8 flex items-center px-3 md:px-4">
                                  <span data-aos="zoom-in" className="text-gray-400 text-xs md:text-sm">http://localhost:5173</span>
                                </div>
                              </div>
                              <div className="relative py-5 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-xl h-32 md:h-48 lg:h-64 border border-white/5 overflow-hidden">
                                <img
                                  style={{ height: 'auto' }}
                                  src={project.screenshot}
                                  alt="Project Preview"
                                  data-aos="zoom-in"
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                              </div>


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div data-aos="zoom-in" className="flex justify-center items-center space-x-4 mt-6 md:mt-8">
                <button
                  onClick={prevSlide}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all hover:scale-110 border border-white/20"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <div data-aos="zoom-in" className="flex space-x-2">
                  {projects.map((_, index) => (
                    <button data-aos="zoom-in"
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide
                        ? 'bg-cyan-400 scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                        }`}
                    />
                  ))}
                </div>

                <button data-aos="zoom-in"
                  onClick={nextSlide}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all hover:scale-110 border border-white/20"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Education Section */}
      <section data-aos="zoom-in" id="education" className="py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg px-6 py-3 rounded-full border border-white/10">
              <BookOpen className="w-5 h-5 text-purple-400 animate-pulse" />
              <span className="text-purple-400 text-sm font-semibold">Academic Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Education</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 hover:border-purple-400/30 transition-all space-y-6 mb-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-4">
                      <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-purple-400 text-base font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="text-cyan-400 font-semibold text-base">{edu.year}</div>
                    <div className="text-gray-400 text-sm">{edu.status}</div>
                  </div>
                </div>

                {/* SGPA Panel */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {edu.semesters.map((sem, i) => (
                    <div key={i} className={`rounded-xl p-4 border text-center shadow-md ${sem.sgpa === "Processing"
                      ? "bg-yellow-900/20 border-yellow-400 text-yellow-300"
                      : "bg-gradient-to-br from-purple-600/10 to-pink-600/10 border-purple-400 text-white"}`}>
                      <p className="text-sm font-semibold">{sem.sem}</p>
                      <p className="text-lg font-bold mt-1">{sem.sgpa}</p>
                    </div>
                  ))}
                </div>

                {/* Current CGPA */}
                <div className="flex items-center justify-between bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-xl p-4 border border-purple-400/20 mt-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium text-base">Current CGPA</span>
                  </div>
                  <div className="text-purple-400 font-bold text-xl">{edu.grade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section data-aos="zoom-in" id="contact" className="py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="zoom-in" className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 border border-white/10">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
              <span data-aos="zoom-in" className="text-cyan-400 text-xs md:text-sm font-semibold">Get In Touch</span>
            </div>
            <h2 data-aos="zoom-in" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Let's Work <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Together</span>
            </h2>
            <p data-aos="zoom-in" className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project!
            </p>
          </div>

          <div data-aos="zoom-in" className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Contact Information</h3>

                <div data-aos="zoom-in" className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3 md:space-x-4 group cursor-pointer">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm md:text-base">Email</div>
                      <div className="text-gray-400 text-sm md:text-base">surajrajput@email.com</div>
                    </div>
                  </div>

                  <div data-aos="zoom-in" className="flex items-center space-x-3 md:space-x-4 group cursor-pointer">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Phone data-aos="zoom-in" className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <div data-aos="zoom-in" className="text-white font-medium text-sm md:text-base">Phone</div>
                      <a href="tel:+919510190352" data-aos="zoom-in" className="text-gray-400 text-sm md:text-base hover:text-white">
                        +91 9510190352
                      </a>

                    </div>
                  </div>

                  <div className="flex items-center space-x-3 md:space-x-4 group cursor-pointer">
                    <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                      <MapPin data-aos="zoom-in" className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <div data-aos="zoom-in" className="text-white font-medium text-sm md:text-base">Location</div>
                      <div data-aos="zoom-in" className="text-gray-400 text-sm md:text-base">Surat, Gujarat, India</div>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in" className="flex space-x-4 mt-6 md:mt-8">
                  <button onClick={() => { window.location.href = 'https://github.com/Suriya2023' }} className="bg-gradient-to-r from-gray-700 to-gray-900 p-3 rounded-full hover:scale-110 transition-transform border border-white/10">
                    <Github data-aos="zoom-in" className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </button>
                  <button onClick={() => { window.location.href = 'https://www.linkedin.com/in/suraj-rajput-a65bb9358/' }} className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-full hover:scale-110 transition-transform">
                    <Linkedin data-aos="zoom-in" className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </button>
                  <button onClick={() => { indow.location.href = 'https://x.com/RajputSr2k24' }} className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-full hover:scale-110 transition-transform">
                    <Twitter data-aos="zoom-in" className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </button>
                  <button onClick={() => { window.location.href = 'https://www.instagram.com/suraj_rajput__2k25/' }} className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-transform">
                    <Instagram data-aos="zoom-in" className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="zoom-in" className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Send Message</h3>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const name = e.target.name.value;
                  const email = e.target.email.value;
                  const subject = e.target.subject.value; // ✅ fixed
                  const message = e.target.message.value;

                  try {
                    const res = await Api.post('/api/send', {
                      Name: name,           // Make sure keys match backend field names
                      Email: email,
                      Subject: subject,
                      Message: message
                    });

                    if (res.data.success) {
                      localStorage.setItem('token', res.data.token);
                      localStorage.setItem('user', JSON.stringify(res.data.user)); // ✅ use correct field name
                      alert("Feedback sent successfully!");
                      e.target.reset(); 
                      navigate('/');
                    } else {
                      alert(res.data.message || "Feedback failed");
                    }
                  } catch (err) {
                    console.error("Register error:", err);
                    alert("Something went wrong, please try again.");
                  }
                }}
                className="space-y-4 md:space-y-6"
              >


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm md:text-base">Name</label>
                    <input type="text" name="name" required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm md:text-base">Email</label>
                    <input type="email" name="email" required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">Subject</label>
                  <input type="text" name="subject"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">Message</label>
                  <textarea name="message" rows="4" required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 md:py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer data-aos="zoom-in" className="py-6 md:py-8 border-t border-white/10 mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="zoom-in" className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div data-aos="zoom-in" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Suraj Rajput
              </div>
            </div>
            <p data-aos="zoom-in" className="text-gray-400 text-sm md:text-base">
              © 2024 Suraj Rajput. All rights reserved. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}