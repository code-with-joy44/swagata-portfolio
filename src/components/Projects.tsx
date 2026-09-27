import React from 'react';
import { Code, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-900/50 border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Featured Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Academic & Practical Projects
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
            Real software built to solve concrete problems, reinforcing object-oriented programming, graphical user interfaces, database persistence, and full-stack web architecture.
          </p>
        </div>

        {/* Projects Grid: Exactly the 2 specified projects */}
        <div className="space-y-8 sm:space-y-10">
          {PROJECTS_DATA.map((project) => {
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-7 sm:p-9 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1"
              >
                <div className="space-y-6">
                  
                  {/* Top Row: Technologies Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-neutral-800 text-emerald-700 dark:text-emerald-300 border border-neutral-200 dark:border-neutral-700/80 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
                    {project.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-4xl">
                    {project.shortDescription}
                  </p>

                  {/* Features List */}
                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-3">
                      Features:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
