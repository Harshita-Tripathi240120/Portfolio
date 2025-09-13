import React, { useState, useEffect } from 'react';
import profilePhoto from './assets/photo1.jpg';
import { Mail, Phone, Linkedin, Github, Menu, X, Code, Database, BrainCircuit, BarChart, Wrench, ShieldCheck, ChevronDown, Award, GraduationCap, School, Briefcase, Lightbulb, Star, MessageSquare, ExternalLink } from 'lucide-react';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'skills', title: 'Skills' },
        { id: 'experience', title: 'Experience' },
        { id: 'projects', title: 'Projects' },
        { id: 'certifications', title: 'Certifications' },
        { id: 'contact', title: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const Header = () => (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm shadow-md shadow-sky-500/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" onClick={() => handleNavClick('home')} className="text-2xl font-bold text-white hover:text-sky-400 transition-colors">
                            Harshita Tripathi
                        </a>
                    </div>
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === link.id ? 'bg-sky-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                             <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === link.id ? 'bg-sky-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );

    const HeroSection = () => (
        <section id="home" className="relative pt-24 md:pt-32 min-h-screen flex items-center bg-cover bg-center w-screen left-1/2 -ml-[50vw]" style={{backgroundImage: "url('https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop')"}}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                    Harshita Tripathi
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-gray-300">
                    Full-Stack Developer & Data Enthusiast
                </p>
                <div className="mt-8 flex justify-center items-center space-x-6">
                    <a href="https://www.linkedin.com/in/harshita-tripathi-727a33328/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors">
                        <Linkedin size={28} />
                    </a>
                    <a href="https://github.com/Harshita-Tripathi240120" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors">
                        <Github size={28} />
                    </a>
                     <a href="mailto:harshitatripathi2816@gmail.com" className="text-gray-300 hover:text-sky-400 transition-colors">
                        <Mail size={28} />
                    </a>
                    <a href="tel:+917310086492" className="text-gray-300 hover:text-sky-400 transition-colors">
                        <Phone size={28} />
                    </a>
                </div>
                <div className="mt-10">
                     <a href="Harshita_Tripathi_Resume_Professional.pdf" download="Harshita_Tripathi_Resume.pdf" className="inline-block bg-sky-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-sky-600 transition-transform transform hover:-translate-y-1">
                        Download Resume
                    </a>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                <ChevronDown className="animate-bounce text-white/70" size={24} />
            </div>
        </section>
    );
    
    const Section = ({ id, title, icon: Icon, children, bgColorClass }) => (
        <section id={id} className={`${bgColorClass} py-16 md:py-24 w-screen relative left-1/2 -ml-[50vw]`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-sky-400 flex items-center justify-center gap-3">
                        <Icon size={32} className="text-sky-400" />
                        {title}
                    </h2>
                </div>
                {children}
            </div>
        </section>
    );

    const AboutSection = () => (
        <section id="about" className="bg-gray-800 py-16 md:py-24 w-screen relative left-1/2 -ml-[50vw]">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-sky-400 mb-12 text-center">
                    About Me
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-4xl mx-auto">
                    <div className="flex-shrink-0">
                        <img
                            src={profilePhoto}
                            alt="Harshita Tripathi"
                            className="w-48 h-48 rounded-full object-cover border-2 border-sky-500 shadow-lg"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I'm an enthusiastic 3rd-year Computer Science Engineering student and a full-stack developer. Experienced with React, Node.js, and data analytics. I've completed internships in Python and Web Development, along with professional training from Infosys (Power BI) and Grastech (Full Stack). I'm passionate about solving real-world problems, learning new technologies, and building scalable applications that make a difference.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );

    const skillsData = {
        'Full Stack Development': { icon: Code, items: ['React', 'Node.js', 'Express.js', 'REST APIs', 'Vite'] },
        'Front-End': { icon: Code, items: ['HTML', 'CSS', 'JavaScript (ES6+)', 'Responsive Design'] },
        'Back-End': { icon: Code, items: ['Node.js', 'Express.js', 'PHP'] },
        'Database': { icon: Database, items: ['MongoDB', 'MySQL', 'SQL'] },
        'Data Analytics': { icon: BarChart, items: ['Power BI', 'Pandas', 'NumPy', 'Scikit-learn'] },
        'Programming': { icon: BrainCircuit, items: ['Python', 'C', 'Java'] },
        'Tools': { icon: Wrench, items: ['GitHub', 'VS Code', 'MySQL Workbench', 'Jupyter Notebook'] },
        'Knowledge': { icon: Lightbulb, items: ['Algorithms & Data Structures'] },
    };
    
    const SkillsSection = () => (
        <Section id="skills" title="Core Skills" icon={Star} bgColorClass="bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skillsData).map(([category, { icon: Icon, items }]) => (
                    <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-2">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                            <Icon size={22} className="mr-3 text-sky-400" />
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                                <span key={skill} className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
    
    const experienceData = [
        {
            role: 'Web Development Intern',
            company: 'InternsElite',
            duration: 'Jun-Aug 2024',
            description: 'Worked with HTML, CSS, JavaScript, and PHP to design responsive websites. Built e-commerce features and collaborated with teams on live projects.',
            icon: Briefcase
        },
        {
            role: 'Python Programming Intern',
            company: 'ElSystems Services',
            duration: 'Jul-Aug 2024',
            description: 'Automated data tasks with Python (30% faster). Used Pandas, NumPy, and created a Python-based quiz project.',
            icon: Briefcase
        },
    ];
    
    const ExperienceSection = () => (
        <Section id="experience" title="Experience" icon={Briefcase} bgColorClass="bg-gray-800">
            <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>
                {experienceData.map((exp, index) => (
                    <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="w-1/2"></div>
                        <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white z-10">
                           <exp.icon size={20} />
                        </div>
                        <div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300 transform hover:scale-105">
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <p className="text-md font-semibold text-gray-300">{exp.company}</p>
                                <p className="text-sm text-gray-400 mb-3">{exp.duration}</p>
                                <p className="text-gray-400">{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );

    const projectsData = [
        {
            title: 'Health Trust - Pharmacy Store Platform',
            description: 'A consumer-facing pharmacy web app with cart/order features.',
            tech: ['HTML', 'CSS', 'React', 'Node.js', 'Vite'],
            liveLink: 'https://health-trust-plum.vercel.app/', 
            codeLink: 'https://github.com/Harshita-Tripathi240120/HealthTrust'
        },
        {
            title: 'E-commerce Website',
            description: 'A responsive store with product catalog, shopping cart, and checkout.',
            tech: ['HTML', 'CSS', 'JS', 'Node.js'],
            liveLink: 'https://comfies-git-main-harshita-tripathis-projects-bff6f844.vercel.app/',
            codeLink: 'https://github.com/Harshita-Tripathi240120/Comfies'
        },
        {
            title: 'Simple Linear Regression Model',
            description: 'Basic Linear Regression implementation for predicting continuous outcomes using features.',
            tech: ['Python', 'Scikit-learn', 'Jupyter Notebook'],
            liveLink: '#',
            codeLink: 'https://github.com/Harshita-Tripathi240120/simple-linear-regression'
        },
    ];

    const ProjectsSection = () => (
         <Section id="projects" title="Projects" icon={Code} bgColorClass="bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="p-6 flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map(t => <span key={t} className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{t}</span>)}
                            </div>
                        </div>
                        <div className="bg-gray-700/50 p-4 flex justify-end items-center space-x-4">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="font-medium transition-colors text-sky-400 hover:text-sky-300">Live Demo</a>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="font-medium transition-colors text-sky-400 hover:text-sky-300">Source Code</a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
    
    const certificationsData = [
        { title: 'Python for Data Science, AI & Development', issuer: 'Coursera-IBM', icon: Award, link: 'https://coursera.org/share/91260d0e7bec368f2c05b6710cccd424' },
        { title: 'Machine Learning with Python', issuer: 'Coursera-IBM', icon: Award, link: 'https://coursera.org/share/f6a6fb95f919f398a7325f1893dc8705' },
        { title: 'Python', issuer: 'Coursera-Google', icon: Award, link: 'https://coursera.org/share/bdb983792bf371598e2e91f8f8c5ce59' },
        { title: 'Full Stack', issuer: 'GeeksforGeeks', icon: Award, link: 'https://drive.google.com/file/d/19o9f__7vdS9ZXpj4q_uVukcVePWqH4mt/view?usp=drive_link' },
        { title: 'Artificial Intelligence', issuer: 'Coursera-IBM', icon: Award, link: 'https://coursera.org/share/91d839609f4e45fba1ba43337404a7bd' },
        { title: 'MongoDB Developer', issuer: 'GeeksforGeeks', icon: Award, link: 'https://drive.google.com/file/d/19o8Xo-iIiNm43Yd0NzQWqb69Y-fgLliX/view?usp=drive_link' },
        { title: 'Naukri Campus CodeQuest & Flipkart GRID 6.0 TechQuiz', issuer: 'Unstop', icon: Star, link: 'https://drive.google.com/file/d/1tSaL0r7q76a_uzoYs1Y3-xg-QwlXbe7h/view?usp=drive_link' },
        { title: 'Introduction to Front-End Development', issuer: 'Coursera-Meta', icon: MessageSquare, link: 'https://coursera.org/share/9da7ac8b6ac2a854c5107b524a966b3e' }
    ];

    const CertificationsSection = () => (
        <Section id="certifications" title="Achievements & Certifications" icon={Award} bgColorClass="bg-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificationsData.map((cert, index) => (
                    <a 
                        key={index} 
                        href={cert.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-900 p-5 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-1 group"
                    >
                        <div className="flex-shrink-0">
                            <cert.icon size={28} className="text-sky-400" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                            <p className="text-gray-400">{cert.issuer}</p>
                        </div>
                        <div className="flex-shrink-0">
                            <ExternalLink size={20} className="text-gray-500 group-hover:text-sky-400 transition-colors" />
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );

    const educationData = [
        {
            degree: 'B.Tech in Computer Science Engineering',
            institution: 'Babu Banarasi Das University, Lucknow',
            duration: '2023-2026',
            icon: GraduationCap
        },
        {
            degree: 'Intermediate (CBSE)',
            institution: 'Azamgarh Public School',
            duration: '2022 - 71.1%',
            icon: School
        },
        {
            degree: 'High School (CBSE)',
            institution: 'Azamgarh Public School',
            duration: '2020 - 90.2%',
            icon: School
        },
    ];

    const softSkills = ['Communication', 'Problem-Solving', 'Leadership', 'Time Management', 'Public Speaking', 'Critical Thinking'];

    const EducationAndSoftSkillsSection = () => (
         <section className="bg-gray-900 py-16 md:py-24 w-screen relative left-1/2 -ml-[50vw]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                     <h2 className="text-3xl font-bold text-sky-400 mb-8 text-center flex items-center justify-center gap-3">
                        <GraduationCap size={28}/> Education
                    </h2>
                    <div className="space-y-6">
                        {educationData.map((edu, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="mt-1">
                                    <edu.icon size={24} className="text-sky-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                                    <p className="text-gray-300">{edu.institution}</p>
                                    <p className="text-sm text-gray-400">{edu.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                 <div>
                    <h2 className="text-3xl font-bold text-sky-400 mb-8 text-center flex items-center justify-center gap-3">
                       <Lightbulb size={28} /> Soft Skills
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {softSkills.map(skill => (
                            <span key={skill} className="bg-gray-800 text-gray-200 text-md font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-sky-500 hover:text-white transition-colors duration-300 cursor-pointer">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
    
    const Footer = () => (
        <footer id="contact" className="bg-black py-12 w-screen relative left-1/2 -ml-[50vw]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-sky-400">Get In Touch</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        I'm currently looking for new opportunities. Feel free to reach out.
                    </p>
                    <div className="mt-8 flex justify-center items-center flex-wrap gap-6">
                        <a href="mailto:harshitatripathi2816@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-colors">
                            <Mail size={22} />
                            <span>harshitatripathi2816@gmail.com</span>
                        </a>
                        <a href="tel:+917310086492" className="flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-colors">
                            <Phone size={22} />
                            <span>+91-7310086492</span>
                        </a>
                    </div>
                     <div className="mt-8 flex justify-center space-x-6">
                        <a href="https://www.linkedin.com/in/harshita-tripathi-727a33328/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
                            <Linkedin size={28} />
                        </a>
                        <a href="https://github.com/Harshita-Tripathi240120" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
                            <Github size={28} />
                        </a>
                    </div>
                </div>
                 <div className="mt-12 border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Harshita Tripathi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );


    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ProjectsSection />
                <CertificationsSection />
                <EducationAndSoftSkillsSection />
            </main>
            <Footer />
        </>
    );
};

export default App;

