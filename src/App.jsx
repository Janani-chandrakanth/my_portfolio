import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import BlogArticle from "./components/BlogArticle";
import SkillDetail from "./components/SkillDetail";

import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import AnimatedBackground from "./components/AnimatedBackground";
import FloatingAvatar from "./components/FloatingAvatar";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleReadArticle = (article) => {
    setSelectedArticle(article);
    setCurrentPage('article');
  };

  const handleBackFromArticle = () => {
    setSelectedArticle(null);
    setCurrentPage('home');
  };

  const handleViewSkill = (skill) => {
    setSelectedSkill(skill);
    setCurrentPage('skill');
  };

  const handleBackFromSkill = () => {
    setSelectedSkill(null);
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated Background - only on home page */}
      {currentPage === 'home' && <AnimatedBackground />}
      
      {/* Main Content */}
      <div className="relative z-10">
        {currentPage === 'home' && (
          <>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills onViewSkill={handleViewSkill} />
            <Timeline />
            <Achievements />
            <Blog onReadArticle={handleReadArticle} />
           
            <Contact />
          </>
        )}

        {currentPage === 'article' && (
          <BlogArticle 
            article={selectedArticle} 
            onBack={handleBackFromArticle} 
          />
        )}

        {currentPage === 'skill' && (
          <SkillDetail 
            skill={selectedSkill} 
            onBack={handleBackFromSkill} 
          />
        )}
      </div>

      {/* Theme Toggle Button */}
      <ThemeToggle />
    </div>
  );
}

export default App;