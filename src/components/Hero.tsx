import React from 'react';
import { ArrowDown, Mail, ExternalLink, Github, Linkedin, Facebook, FileText, Code2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, socialLinks } from '../data/portfolioData';
import { PhotoSection } from './PhotoSection';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[250px] bg-teal-500/10 dark:bg-teal-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Text Column (col-span-7) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Developer status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Dhaka Polytechnic Institute</span>
              <span className="text-neutral-300 dark:text-neutral-600">•</span>
              <span className="font-mono">Bangladesh</span>
            </div>

            {/* Name and Titles */}
            <div className="space-y-2.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
                {PERSONAL_INFO.name}
              </h1>
              
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-medium">
                  {PERSONAL_INFO.secondaryTitle}
                </p>
              </div>
            </div>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {PERSONAL_INFO.bio.hero}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              {/* View Projects Button */}
              <button
                id="hero-view-projects-btn"
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Contact Me Button */}
              <button
                id="hero-contact-btn"
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-semibold text-sm border border-neutral-200 dark:border-neutral-700 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-400/50"
              >
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Contact Me</span>
              </button>

              {/* Download CV Button */}
              <button
                id="hero-download-cv-btn"
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60 font-medium text-sm transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              >
                <FileText className="w-4 h-4 text-neutral-500" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links & Quick Stack Badges */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 border-t border-neutral-200/60 dark:border-neutral-800/60">
              {/* Social Profiles */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Connect:
                </span>
                
                {/* 
                  * GITHUB LINK
                  * Easily update your GitHub link in `/src/data/portfolioData.ts` -> socialLinks.github
                */}
                <a
                  id="hero-github-link"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800/80 dark:hover:bg-neutral-800 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white border border-neutral-200 dark:border-neutral-700/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label="GitHub profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                {/* 
                  * LINKEDIN LINK
                  * Easily update your LinkedIn link in `/src/data/portfolioData.ts` -> socialLinks.linkedin
                */}
                <a
                  id="hero-linkedin-link"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800/80 dark:hover:bg-neutral-800 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white border border-neutral-200 dark:border-neutral-700/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label="LinkedIn profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* 
                  * FACEBOOK LINK
                  * Easily update your Facebook link in `/src/data/portfolioData.ts` -> socialLinks.facebook
                */}
                <a
                  id="hero-facebook-link"
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800/80 dark:hover:bg-neutral-800 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white border border-neutral-200 dark:border-neutral-700/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label="Facebook profile"
                  title="Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>

              {/* Quick Tech Badges */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center text-xs font-mono text-neutral-600 dark:text-neutral-400">
                <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/40">Python</span>
                <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/40">Java</span>
                <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/40">JavaScript</span>
                <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/40">MySQL</span>
              </div>
            </div>

          </div>

          {/* Right Column: Personal Photo Dedicated Section (col-span-5) */}
          <div className="lg:col-span-5 flex justify-center">
            <PhotoSection variant="hero" />
          </div>

        </div>
      </div>
    </section>
  );
};
