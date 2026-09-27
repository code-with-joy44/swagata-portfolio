import React from 'react';
import { Github, Linkedin, Facebook, Mail, ArrowUp, Terminal, Sparkles } from 'lucide-react';
import { contactLinks } from '../data/portfolioData';

const FOOTER_NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 pt-16 pb-12 transition-colors duration-200 relative overflow-hidden">
      {/* Subtle ambient glow in footer background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Brand & Professional Subtitle */}
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-2xs">
                <Terminal className="w-4 h-4" />
              </span>
              <span className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-sans">
                Joy Sen
              </span>
            </div>
            
            <p className="text-sm sm:text-base font-medium text-emerald-600 dark:text-emerald-400">
              Computer Science & Technology Student
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-normal">
              Aspiring AI Engineer & Software Developer
            </p>
          </div>

          {/* Footer Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 py-2 border-y border-neutral-100 dark:border-neutral-900 w-full max-w-2xl">
            {FOOTER_NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                id={`footer-nav-${item.href.substring(1)}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social & Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* GitHub */}
            <a
              id="footer-github-link"
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub Profile"
              className="group p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-neutral-200/80 dark:border-neutral-800 hover:border-emerald-500/40 transition-all hover:scale-105 shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              id="footer-linkedin-link"
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn Profile"
              className="group p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-neutral-200/80 dark:border-neutral-800 hover:border-emerald-500/40 transition-all hover:scale-105 shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Facebook */}
            <a
              id="footer-facebook-link"
              href={contactLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
              title="Facebook Profile"
              className="group p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-neutral-200/80 dark:border-neutral-800 hover:border-emerald-500/40 transition-all hover:scale-105 shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              id="footer-email-link"
              href={`mailto:${contactLinks.email}`}
              aria-label="Send Email"
              title={`Send Email to ${contactLinks.email}`}
              className="group p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-neutral-200/80 dark:border-neutral-800 hover:border-emerald-500/40 transition-all hover:scale-105 shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top Row */}
          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-900 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
            <p>
              © 2026 Joy Sen. All rights reserved.
            </p>

            <button
              id="footer-back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-500" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
