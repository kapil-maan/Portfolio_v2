import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CodingStats from './components/CodingStats';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import { getLeetCodeStats } from "./services/leetcode";
import { getGFGStats } from "./services/gfg";
import { SiGeeksforgeeks } from 'react-icons/si';

import VersionSwitch from './components/VersionSwitch';


function App() {
  const [codingStats, setCodingStats] = useState({
    leetcode: { easy: 0, medium: 0, hard: 0, total: 0 },
    gfg: { stats: { problemsSolved: 0 } }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodingStats = async () => {
      try {

      setLoading(true);

      const leetcodeUser = "IRON_KAPIL";
      const gfgUser = "kapilmaan0123";

      const [leetcode, gfg] =
        await Promise.all([

          getLeetCodeStats(leetcodeUser),
          getGFGStats(gfgUser)

        ]);

      setCodingStats({
        leetcode,
        gfg
      });

      setError(null);

    }

    catch {

      setError(
        "Failed to load coding stats"
      );

    }

    finally {

      setLoading(false);

    }

  };

    fetchCodingStats();
    const interval = setInterval(fetchCodingStats, 300000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const personalInfo = {
    name: 'Kapil Kumar',
    email: 'kapilmaan0123@gmail.com',
    phone: '+91-7415283930',
    linkedin: 'https://www.linkedin.com/in/kapilmaan/',
    github: 'https://github.com/kapil-maan',
    leetcode:'https://leetcode.com/u/IRON_KAPIL/',
    gfg:'https://www.geeksforgeeks.org/profile/kapilmaan0123',
    location: 'Punjab, India'
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden text-slate-200">
      <CustomCursor />
      <Navbar />
      <div className="reveal"><Hero personalInfo={personalInfo} /></div>
      <div className="reveal transition-delay-100"><About /></div>
      <div className="reveal transition-delay-200"><Skills /></div>
      <div className="reveal transition-delay-250"><Education /></div>
      <div className="reveal transition-delay-300"><Experience /></div>
      <div className="reveal transition-delay-400"><Projects /></div>
      <div className="reveal transition-delay-500"><CodingStats stats={codingStats} loading={loading} error={error} /></div>
      <div className="reveal transition-delay-600"><Certifications /></div>
      <div className="reveal transition-delay-700"><Contact /></div>
      <Footer personalInfo={personalInfo} />
      <VersionSwitch/>
    
    </div>
  );
}

export default App;