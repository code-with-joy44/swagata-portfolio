import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CVModal } from './components/CVModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:bg-emerald-500/30 dark:selection:text-emerald-300 transition-colors duration-200 flex flex-col font-sans">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section with Dedicated Personal Photo Area */}
          <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

          {/* About Me Section */}
          <About />

          {/* Educational Background Section */}
          <Education />

          {/* Interactive Skills Section (Strictly the 14 skills provided) */}
          <Skills />

          {/* Projects Section (Strictly the 2 specified projects) */}
          <Projects />

          {/* Contact Section & Validated Form */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Scroll to Top Button */}
        <ScrollToTop />

        {/* CV Modal for viewing and downloading resume */}
        <CVModal
          isOpen={isCvModalOpen}
          onClose={() => setIsCvModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
