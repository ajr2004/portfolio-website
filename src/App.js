import React, { useState, useEffect } from 'react';
import { 
  Mail, Github, Linkedin, Terminal, Cpu, 
  BookOpen, Layers, Code, Phone, ExternalLink, 
  Briefcase, Menu, X 
} from 'lucide-react';
import './index.css';

// Local Image Imports
import profileImage from './assests/profile.png'; 
import schoolImage from './assests/scts.jpg';
import clgImage from './assests/tjc.jpg';
import btechImage from './assests/gvpce.png';

// --- Sub-components ---

const EducationCard = ({ logo, institution, course, score, period }) => (
  <div className="bg-gray-900 border border-gray-800 text-white rounded-xl shadow-xl flex flex-col w-full transition-all hover:border-green-400 hover:-translate-y-2 overflow-hidden group">
    <div className="bg-white p-6 h-32 flex items-center justify-center overflow-hidden">
      <img src={logo} alt={institution} className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h4 className="text-lg font-bold text-green-400 mb-2 leading-tight">{institution}</h4>
      <p className="text-sm italic text-gray-300 mb-4">{course}</p>
      <div className="mt-auto flex justify-between items-center border-t border-gray-800 pt-4">
        <span className="text-xs font-bold bg-green-400/10 text-green-400 px-3 py-1 rounded-full">{score}</span>
        <span className="text-xs text-gray-500 uppercase tracking-widest">{period}</span>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, description, tech, link }) => (
  <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 flex flex-col justify-between hover:border-green-400/50 transition-all group h-full">
    <div>
      <div className="flex justify-between items-start mb-6">
        <div className="p-2 bg-gray-900 rounded-lg group-hover:bg-green-400/20 transition-colors">
            <Code className="text-green-400 w-6 h-6" />
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Github size={20} />
        </a>
      </div>
      <h3 className="text-xl font-bold mb-4 group-hover:text-green-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>
    </div>
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map(t => (
          <span key={t} className="text-[10px] font-bold bg-gray-900 px-2 py-1 rounded text-gray-500 uppercase border border-gray-800">
            {t}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-green-400 hover:gap-3 transition-all">
        VIEW SOURCE <ExternalLink size={14}/>
      </a>
    </div>
  </div>
);

// --- Main Component ---

const Portfolio = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Cleaned up the words array to the "Rule of Three"
  const words = [
    "Software Engineer", 
    "Java Full Stack Developer", 
    "Microservices Architect"
  ];
  
  // Typing Effect Logic
  useEffect(() => {
    let timeout;
    const currentWord = words[currentWordIndex];
    
    const animate = () => {
      if (!isDeleting) {
        if (displayText !== currentWord) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          timeout = setTimeout(animate, 100);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setDisplayText(displayText.substring(0, displayText.length - 1));
          timeout = setTimeout(animate, 50);
        }
      }
    };
    timeout = setTimeout(animate, 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex,words]);

  // Data Objects
  const skills = {
    languages: [
      { name: "Java", logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
      { name: "Python", logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
      { name: "C++", logo: "https://cdn.worldvectorlogo.com/logos/c-1.svg" },
      { name: "MySQL", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
      { name: "JavaScript", logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" }
    ],
    frameworks: [
      { name: "Spring Boot", logo: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
      { name: "React", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
      { name: "Flask", logo: "https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-ar21~bgwhite.svg"},
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" }
    ],
    tools: [
      { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "VS Code", logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
      { name: "Docker", logo: "https://www.vectorlogo.zone/logos/docker/docker-tile.svg" }
    ]
  };

  const educationData = [
    {
      logo: btechImage, 
      institution: 'Gayatri Vidya Parishad College of Engineering',
      course: 'B.Tech in Computer Science and Engineering',
      score: 'CGPA: 9.34', 
      period: '2021 - 2025',
    },
    {
      logo: clgImage, 
      institution: 'Tirumala Junior College',
      course: 'Intermediate (M.P.C)',
      score: 'Percentage: 98.2%',
      period: '2019 - 2021',
    },
    {
      logo: schoolImage, 
      institution: 'Sri Chaitanya EM High School',
      course: 'SSC',
      score: 'GPA: 10/10',
      period: '2019',
    }
  ];

  const projects = [
    {
      title: "Hybrid Collision Detection Model",
      description: "Engineered a DRNN-BiLSTM hybrid model for real-time rear-end collision detection, achieving 94% accuracy in time-series forecasting under varied environmental conditions.",
      tech: ["Python", "TensorFlow", "Deep Learning", "PTV Vissim"],
      link: "https://github.com/ajr2004/Rear-End-Collision-Detection-in-Fog-Based-Internet-of-Vehicles"
    },
    {
      title: "SmartLend: Loan Management",
      description: "Automated loan processing engine with real-time CIBIL scoring, EMI scheduling logic, and secure JWT authentication. Features role-based dashboards and email notifications.",
      tech: ["Java", "Spring Boot", "React", "MySQL"],
      link: "https://github.com/ajr2004/smartlend"
    },
    {
      title: "InsurEase: Insurance Microservices",
      description: "Multi-module microservices architecture using Spring Cloud OpenFeign and Caffeine caching for enterprise scalability. Secured with OAuth2/JWT standards.",
      tech: ["Spring Cloud", "Microservices", "JWT"],
      link: "https://github.com/ajr2004/InsurEase"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-green-400 selection:text-black font-sans">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-green-400 font-bold text-xl tracking-tighter uppercase border border-green-400 px-2 py-1">AJR</span>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest items-center">
            {["about", "education", "skills", "projects", "experience", "contacts"].map(item => (
              <li key={item}><a href={`#${item}`} className="hover:text-green-400 transition-colors">{item}</a></li>
            ))}
            <li>
              {/* REMINDER: ADD YOUR GOOGLE DRIVE RESUME LINK HERE */}
              <a href="https://drive.google.com/file/d/1-uAic_hlxtQ4kAbPWHjEU-4DV7vuMDC7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-green-400 text-black px-4 py-2 rounded-sm hover:bg-white transition-colors">Resume</a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800 absolute w-full shadow-2xl">
            <ul className="flex flex-col p-6 gap-4 text-sm font-bold uppercase tracking-widest">
              {["about", "education", "skills", "projects", "experience", "contacts"].map(item => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setIsMobileMenuOpen(false)} className="block py-3 border-b border-gray-800 hover:text-green-400 transition-colors">{item}</a>
                </li>
              ))}
              <li><a href="YOUR_RESUME_LINK" target="_blank" rel="noopener noreferrer" className="block py-3 text-green-400 hover:text-white transition-colors">View Resume</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <header className="pt-40 pb-20 md:pt-60 md:pb-40 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          Athikamsetti <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Janaki Ram</span>
        </h1>
        <div className="text-xl md:text-3xl text-gray-400 h-12 flex justify-center items-center gap-2">
          <span>I am a</span>
          <span className="text-green-400 font-mono font-bold underline decoration-2 underline-offset-8 decoration-gray-700">
            {displayText}
          </span>
          <span className="animate-pulse text-green-400 w-2 font-mono">|</span>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
           <a href="mailto:ajanakiram2004@gmail.com" className="p-3 bg-gray-900 rounded-full hover:bg-green-400 hover:text-black transition-all"><Mail size={20}/></a>
           <a href="https://github.com/ajr2004" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-full hover:bg-green-400 hover:text-black transition-all"><Github size={20}/></a>
           <a href="https://linkedin.com/in/athikamsetti-janaki-ram-157aa0251" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-full hover:bg-green-400 hover:text-black transition-all"><Linkedin size={20}/></a>
        </div>
      </header>

      {/* --- About Section --- */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Fixed Glow Wrapper */}
          <div className="relative group mx-auto md:mx-0 w-72 h-72 md:w-96 md:h-96">
             {/* Glow Effect Behind Image */}
             <div className="absolute -inset-2 bg-green-400 rounded-3xl blur-lg opacity-20 group-hover:opacity-50 transition duration-1000"></div>
             
             {/* Profile Image */}
             <img 
                src={profileImage} 
                alt="Profile" 
                className="relative w-full h-full rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl border border-gray-800" 
             />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-3">
              <Terminal className="text-green-400" size={32}/> About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I am a <strong>Software Engineer (P1)</strong> at <strong>LTIMindtree</strong>, specializing in the intersection of scalable backend architecture and <strong>AI Enablement</strong>.
              </p>
              <p>
                With a core foundation in the <strong>Java/Spring Boot</strong> ecosystem, I architect high-performance microservices—from securing fintech platforms with JWT to optimizing data retrieval through multi-level caching.
              </p>
              <p className="border-l-4 border-green-400 pl-4 italic text-gray-400">
                Beyond the backend, my passion lies in integrating <strong>Generative AI</strong> and Machine Learning pipelines into enterprise systems to solve complex business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-sm text-gray-400 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <div>
                    <span className="block text-xs font-bold uppercase text-gray-600 mb-1">Location</span>
                    Yelamanchili, Andhra Pradesh
                </div>
                <div>
                    <span className="block text-xs font-bold uppercase text-gray-600 mb-1">Email</span>
                    <a href="mailto:ajanakiram2004@gmail.com" className="hover:text-green-400 transition-colors">ajanakiram2004@gmail.com</a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Education Section --- */}
      <section id="education" className="py-24 bg-gray-900 px-6 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-16 flex items-center gap-3">
            <BookOpen className="text-green-400" size={32}/> Education
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {educationData.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-16 flex items-center gap-3">
            <Layers className="text-green-400" size={32}/> Technical Arsenal
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
              <h3 className="text-xs font-black uppercase tracking-widest text-green-400 mb-8 border-b border-gray-800 pb-4">{category}</h3>
              <div className="grid grid-cols-2 gap-6">
                {items.map(skill => (
                  <div key={skill.name} className="flex flex-col items-center gap-3 group">
                    <img src={skill.logo} alt={skill.name} className="h-10 w-10 grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <span className="text-[10px] font-bold text-gray-500 group-hover:text-white uppercase transition-colors text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-24 bg-gray-900 px-6 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-16 flex items-center gap-3">
            <Cpu className="text-green-400" size={32}/> Engineered Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {projects.map((p, index) => (
              <ProjectCard key={index} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Experience Section --- */}
      <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-16 flex items-center gap-3">
            <Briefcase className="text-green-400" size={32}/> Professional Experience
        </h2>
        <div className="space-y-16">
          <div className="relative pl-8 md:pl-12 border-l-2 border-green-400">
            <div className="absolute w-6 h-6 bg-green-400 rounded-full -left-[13px] top-0 shadow-[0_0_15px_rgba(74,222,128,0.5)] border-4 border-gray-950"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Software Engineer</h3>
            <p className="text-green-400 font-bold mb-4 tracking-wide">LTIMindtree | Dec 2025 - Present</p>
            <p className="text-gray-400 leading-relaxed text-lg">
                Focusing on enterprise-scale application development and <strong>AI Enablement</strong>. Currently upskilling in Spring AI and RAG pipelines for intelligent automation within digital integration solutions.
            </p>
          </div>
          <div className="relative pl-8 md:pl-12 border-l-2 border-gray-800">
            <div className="absolute w-4 h-4 bg-gray-700 rounded-full -left-[9px] top-1"></div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">Full Stack Developer Intern</h3>
            <p className="text-gray-500 font-bold mb-4 tracking-wide">LTIMindtree (via Trumio) | July - Aug 2025</p>
            <p className="text-gray-500 leading-relaxed text-lg">
                Engineered a production-ready Loan Management System. Spearheaded the integration of automated notifications and secure role-based authentication modules.
            </p>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contacts" className="py-24 bg-green-400 text-black px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Let's Connect</h2>
          <p className="text-xl font-bold mb-12 opacity-80 max-w-2xl mx-auto">
            Ready to engineer the next generation of intelligent systems? Drop me a line.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 items-center">
            <a href="mailto:ajanakiram2004@gmail.com" className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                <Mail size={20}/> Email Me
            </a>
            <div className="flex items-center gap-6 text-black">
              <a href="https://github.com/ajr2004" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform bg-black/10 p-3 rounded-full"><Github size={24}/></a>
              <a href="https://linkedin.com/in/athikamsetti-janaki-ram-157aa0251" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform bg-black/10 p-3 rounded-full"><Linkedin size={24}/></a>
              <a href="tel:+917780172521" className="hover:scale-125 transition-transform bg-black/10 p-3 rounded-full"><Phone size={24}/></a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 text-center text-gray-700 text-xs font-bold tracking-widest uppercase border-t border-gray-950 bg-gray-900">
        © 2026 Athikamsetti Janaki Ram | Built with React & Tailwind CSS
      </footer>
    </div>
  );
};

export default Portfolio;