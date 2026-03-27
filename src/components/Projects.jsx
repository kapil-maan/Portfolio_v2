import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectImage = ({ images, title }) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative mb-6 overflow-hidden rounded-xl aspect-video border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} - ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-all duration-1000 ${
            idx === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      
      {/* Slider Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentImage ? 'w-4 bg-cyan-400' : 'w-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const projects = [
    {
      title: 'KYR: Know Your Rights',
      period: 'Oct 2025 - Dec 2025',
      description: [
        'Developed a legal awareness platform to educate citizens about Indian laws and the judicial system through an interactive web interface.',
        'Designed and implemented a responsive frontend ensuring smooth user experience across devices.',
        'Integrated features such as a law dictionary and gamified learning modules to enhance user engagement and knowledge retention.',
        'Optimized performance and deployment using Vercel, ensuring fast load times and scalability.',
      ],
      tech: ['React.Js', 'Express.js', 'TypeScript', 'Node.js', 'Tailwind', 'REST APIs'],
      github: 'https://github.com/kapil-maan/KYR-know_your_rights',
      live: 'https://kyr-frontend.vercel.app/',
      gradient: 'from-cyan-500 to-blue-500',
      images: ['/kyr1.png', '/kyr2.png','/kyr3.png']
    },
    {
      title: 'LaptopController App',
      period: 'Oct 2025',
      description: [
        'Built an Android application that enables users to control their laptop remotely using voice commands and on-screen controls.',
        'Implemented commands such as opening applications, shutdown/restart, media control, and file access through secure API communication.',
        'Integrated screen share and speech recognition for hands-free operation and improved accessibility.',
        'Enabled real-time communication between Android device and desktop system.'
      ],
      tech: ['Kotlin', 'Xml', 'Python', 'REST API'],
      github: 'https://github.com/kapil-maan/laptopController',
      gradient: 'from-indigo-500 to-purple-500',
      images: ['/lap1.png','/lap2.png','/lap1.png']
    },
    {
      title: 'StocksApp Groww',
      period: 'Oct 2025',
      description: [
        'Developed as part of the Groww internship assignment.',
        'This Android application was built using Kotlin and MVVM architecture.', 
        'It Tracks live stock prices, Top gainers and Losers, Search stocks by symbol, and view detailed stock information with interactive price charts.', 
        'Integrated Alpha Vantage API via Retrofit for real-time data and uses Room Database for persistent watchlist management.', 
        'UI designed with Material 3 components & ViewBinding for clean & responsive user experience and smooth user experience.'
      ],
      tech: ['Kotlin', 'Xml', 'coroutines', 'API', 'Firebase', 'Material 3'],
      github: 'https://github.com/kapil-maan/StocksApp',
      gradient: 'from-indigo-500 to-purple-500',
      images: ['/sto1.png','/sto2.png','/sto1.png']
    },
    {
  title: 'Job Connect',
  period: 'Sep 2025 - Oct 2025',
  description: [
    'Developed a full-stack job portal supporting dual user roles: recruiters (post jobs, manage listings, hire candidates) and job seekers (search, apply, track applications).',
    'Implemented secure authentication and role-based authorization to ensure controlled access to recruiter and applicant functionalities.',
    'Designed dynamic job search and filtering features enabling users to efficiently find relevant opportunities.',
    'Built RESTful APIs using Node.js and Express.js for job posting, application management, and user data handling.',
    'Integrated MongoDB for efficient storage and retrieval of user profiles, job listings, and application records.',
    'Created a responsive UI using React.js and Bootstrap ensuring accessibility across desktop and mobile devices.'
  ],
  tech: ['React.js', 'React Router', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  github: 'https://github.com/kapil-maan/JobConnect',
  gradient: 'from-emerald-500 to-teal-500',
  images: ['/job1.png','/job2.png','/job3.png']
},
{
  title: 'AnyChat',
  period: 'Aug 2025 - Sep 2025',
  description: [
    'Developed a real-time chat application supporting one-to-one and group messaging with end-to-end encryption for secure communication.',
    'Implemented WebSocket-based real-time messaging using Socket.io enabling instant message delivery and live conversation updates.',
    'Added features such as online/offline presence indicators, message delivery status, and typing indicators to enhance user experience.',
    'Utilized Redis for efficient session management and caching to improve performance and scalability of chat operations.',
    'Designed scalable backend services using Node.js, Express.js, and MongoDB for persistent storage of chat history and user data.',
    'Built a responsive frontend using React.js and TypeScript ensuring smooth and reliable communication across devices.'
  ],
  tech: ['React.js', 'TypeScript', 'Socket.io', 'Node.js', 'Express.js', 'Redis', 'MongoDB'],
  github: 'https://github.com/kapil-maan/AnyChat',
  gradient: 'from-pink-500 to-rose-500',
  images: ['/any1.png','/any2.png','/any3.png']
},
  ];

  return (
    <section id="projects" className="section-container relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="text-center mb-16 relative">
        <h2 className="section-title">Featured Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-[-2rem]"></div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="card group relative overflow-hidden"
            onMouseMove={(e) => handleMouseMove(e, index)}
          >
            {/* Spotlight Effect */}
            <div 
              className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.15), transparent 40%)`
              }}
            ></div>

            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>

            <div className="relative z-10 h-full flex flex-col">
              <ProjectImage images={project.images} title={project.title} />

              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-xs font-semibold whitespace-nowrap border border-slate-700">
                  {project.period}
                </span>
              </div>

              <ul className="mb-8 space-y-3 flex-grow">
                {project.description.map((item, idx) => (
                  <li key={idx} className="flex items-start text-slate-400">
                    <span className="text-cyan-500 mr-3 mt-1 text-lg leading-none">&bull;</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-slate-800/80 text-slate-300 border border-slate-700/50 px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4 border-t border-slate-700/50">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm">
                    <FaGithub className="mr-2 text-lg" /> Source Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-slate-300 hover:text-indigo-400 transition-colors duration-300 font-medium text-sm">
                    <FaExternalLinkAlt className="mr-2 text-lg" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;