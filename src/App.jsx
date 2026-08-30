import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#090a0f] text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        
        {/* Navigation Bar */}
        <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
          <Experience />
          <Leadership />
          <Skills />
          <Achievements />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Case Study / PRD / Deck Modal */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

        {/* Full Resume Preview Modal */}
        <ResumeModal 
          isOpen={resumeModalOpen} 
          onClose={() => setResumeModalOpen(false)} 
        />

      </div>
    </ThemeProvider>
  );
}
