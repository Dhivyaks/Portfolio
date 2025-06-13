import React, { useState } from 'react';
import { Search, Users, Award, Briefcase, Menu, X, Code, Database, Server, Globe, Zap, Trophy, BookOpen, Play, Clock, Star, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Coffee, Calendar } from 'lucide-react';

export default function MERNDeveloperPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      title: "E-Commerce MERN App",
      category: "fullstack",
      description: "Complete e-commerce solution with user authentication, payment integration, admin panel, and real-time order tracking",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe", "JWT"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/ecommerce-mern",
      live: "https://ecommerce-demo.com",
      featured: true
    },
    {
      title: "Social Media Platform",
      category: "fullstack", 
      description: "Instagram-like social platform with real-time chat, posts, stories, likes, comments, and user profiles",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Cloudinary", "Redux"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/social-mern",
      live: "https://social-demo.com",
      featured: true
    },
    {
      title: "Task Management Dashboard",
      category: "frontend",
      description: "Modern React dashboard with drag-drop functionality, team collaboration, and project tracking features",
      technologies: ["React.js", "Redux Toolkit", "Material-UI", "Chart.js", "Firebase"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/task-dashboard",
      live: "https://tasks-demo.com"
    },
    {
      title: "REST API Backend",
      category: "backend",
      description: "Scalable Node.js API with authentication, file uploads, email services, and comprehensive documentation",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Swagger", "Nodemailer"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/api-backend",
      live: "https://api-docs.com"
    },
    {
      title: "Real Estate Platform",
      category: "fullstack",
      description: "Property listing platform with advanced search, virtual tours, agent profiles, and booking system",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Google Maps API"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/realestate-mern",
      live: "https://realestate-demo.com"
    },
    {
      title: "Blog Management System",
      category: "fullstack",
      description: "Content management system with rich text editor, SEO optimization, and multi-author support",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Quill.js"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/username/blog-cms",
      live: "https://blog-demo.com"
    }
  ];

  const skills = [
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "MongoDB", level: 88, category: "Database" },
    { name: "Express.js", level: 92, category: "Backend" },
    { name: "JavaScript/ES6+", level: 94, category: "Programming" },
    { name: "TypeScript", level: 85, category: "Programming" },
    { name: "Next.js", level: 82, category: "Frontend" },
    { name: "Redux/RTK", level: 87, category: "State Management" },
    { name: "PostgreSQL", level: 75, category: "Database" },
    { name: "AWS/GCP", level: 70, category: "Cloud" },
    { name: "Docker", level: 68, category: "DevOps" },
    { name: "Git/GitHub", level: 90, category: "Tools" }
  ];

  const experience = [
    {
      company: "TechCorp Solutions",
      position: "Senior MERN Stack Developer",
      duration: "Jan 2023 - Present",
      location: "Mumbai, India",
      description: "Leading development of scalable web applications using MERN stack. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Built 5+ production applications serving 100K+ users",
        "Reduced application load time by 40% through optimization",
        "Led team of 4 developers on major e-commerce project"
      ]
    },
    {
      company: "StartupHub India", 
      position: "Full Stack Developer",
      duration: "Jun 2021 - Dec 2022",
      location: "Bangalore, India",
      description: "Developed and maintained multiple client projects using React.js, Node.js, and MongoDB. Worked in agile environment.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with UI/UX team to improve user experience"
      ]
    },
    {
      company: "WebTech Solutions",
      position: "Junior Full Stack Developer",
      duration: "Aug 2020 - May 2021", 
      location: "Pune, India",
      description: "Started career developing responsive web applications. Gained expertise in MERN stack and modern development practices.",
      achievements: [
        "Completed 10+ projects using React.js and Node.js",
        "Contributed to open-source projects",
        "Received 'Best Newcomer' award in 2021"
      ]
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
    { name: "MongoDB Certified Developer", issuer: "MongoDB University", year: "2022" },
    { name: "React Developer Certification", issuer: "Meta", year: "2022" },
    { name: "Node.js Application Developer", issuer: "Linux Foundation", year: "2021" }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(project => project.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold text-white">
                Rahul Sharma
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105">
                Hire Me
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-300">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300">Projects</a>
              <a href="#skills" className="block px-3 py-2 text-gray-300">Skills</a>
              <a href="#experience" className="block px-3 py-2 text-gray-300">Experience</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300">Contact</a>
              <button className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full">
                Hire Me
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 text-sm font-medium">Available for Work</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Hi, I'm 
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Rahul Sharma</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-6">
                  MERN Stack Developer
                </h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Passionate full-stack developer with 4+ years of experience building scalable web applications. 
                  Specialized in React.js, Node.js, MongoDB, and modern web technologies. I love creating digital experiences that make a difference.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download CV</span>
                  </button>
                  <button className="border-2 border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all">
                    View Projects
                  </button>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                    <Mail className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full w-80 h-80 mx-auto relative overflow-hidden border border-white/10">
                  <img 
                    src="/api/placeholder/300/300" 
                    alt="Rahul Sharma - MERN Developer" 
                    className="absolute inset-4 w-72 h-72 object-cover rounded-full"
                  />
                  
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                    <Coffee className="w-6 h-6 text-cyan-400 mb-1" />
                    <div className="text-sm font-semibold text-white">4+</div>
                    <div className="text-xs text-gray-300">Years Exp</div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                    <Trophy className="w-6 h-6 text-purple-400 mb-1" />
                    <div className="text-sm font-semibold text-white">50+</div>
                    <div className="text-xs text-gray-300">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Get to know more about my background, skills, and passion for development</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate MERN Stack developer based in Mumbai, India. My journey in web development started 4 years ago when I discovered the power of JavaScript and its ecosystem. Since then, I've been dedicated to mastering modern web technologies and building impactful digital solutions.
                </p>
                <p>
                  I specialize in building full-stack applications using MongoDB, Express.js, React.js, and Node.js. My experience spans from creating responsive user interfaces to developing robust backend APIs and managing cloud deployments.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, mentoring aspiring developers, or exploring the latest trends in web development. I believe in continuous learning and staying updated with the rapidly evolving tech landscape.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Quick Facts</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">Mumbai, India</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">4+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">50+ Projects Completed</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Open Source</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">AI/ML</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">DevOps</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Photography</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 p-3 rounded-lg border border-green-500/30">
                    <Database className="w-8 h-8 text-green-400 mb-2" />
                    <div className="text-sm font-semibold text-white">MongoDB</div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-500/20 to-gray-600/20 p-3 rounded-lg border border-gray-500/30">
                    <Server className="w-8 h-8 text-gray-400 mb-2" />
                    <div className="text-sm font-semibold text-white">Express.js</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-3 rounded-lg border border-blue-500/30">
                    <Code className="w-8 h-8 text-blue-400 mb-2" />
                    <div className="text-sm font-semibold text-white">React.js</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-600/20 to-green-700/20 p-3 rounded-lg border border-green-600/30">
                    <Globe className="w-8 h-8 text-green-500 mb-2" />
                    <div className="text-sm font-semibold text-white">Node.js</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-2 border-cyan-400 pl-4">
                      <div className="font-semibold text-white text-sm">{cert.name}</div>
                      <div className="text-gray-400 text-xs">{cert.issuer} • {cert.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">My technical skills and proficiency levels in various technologies</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-cyan-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-gray-400 text-xs">{skill.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Showcase of my best work and personal projects</p>
          </div>
          
          {/* Project Filter */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-full p-2 border border-white/10">
              {['all', 'fullstack', 'frontend', 'backend'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab === 'fullstack' ? 'Full Stack' : tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all hover:-translate-y-2 group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      <a href={project.github} className="flex-1 bg-black/50 backdrop-blur-sm text-white py-2 px-4 rounded-lg text-center text-sm hover:bg-black/70 transition-all">
                        <Github className="w-4 h-4 inline mr-2" />
                        Code
                      </a>
                      <a href={project.live} className="flex-1 bg-cyan-500/50 backdrop-blur-sm text-white py-2 px-4 rounded-lg text-center text-sm hover:bg-cyan-500/70 transition-all">
                        <ExternalLink className="w-4 h-4 inline mr-2" />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">My professional journey and career highlights</p>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.position}</h3>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">{exp.company}</h4>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div>
                      <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-400 text-sm flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Have a project in mind? Let's discuss how we can bring your ideas to life</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h