import React from 'react';
import { GraduationCap, Code2, BrainCircuit, Target, CheckCircle2, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-900/50 border-y border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
            A dedicated student striving toward technical excellence and purposeful software creation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative (col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-5">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>My Journey in Computer Science & Technology</span>
              </h3>

              {PERSONAL_INFO.bio.about.map((paragraph, idx) => (
                <p key={idx} className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Education Highlight Card */}
              <div className="mt-6 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      {PERSONAL_INFO.education.degree}
                    </h4>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {PERSONAL_INFO.education.institution}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {PERSONAL_INFO.education.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars / Key Priorities (col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Pillar 1: Strong Technical Foundation */}
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs transition-all hover:border-emerald-500/40">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    Strong Technical Foundation
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Prioritizing core data structures, algorithms, object-oriented concepts, and clean coding standards across Python and Java.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Building Practical Projects */}
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs transition-all hover:border-emerald-500/40">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    Building Practical Projects
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Turning theoretical coursework into working software, from Java desktop applications to responsive full-stack web prototypes.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Aspiring AI Engineering */}
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs transition-all hover:border-emerald-500/40">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 shrink-0">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    Aspiring AI Engineer
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Actively expanding proficiency in data manipulation tools like NumPy and Pandas, laying the rigorous groundwork for machine intelligence.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4: Continuous Improvement */}
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs transition-all hover:border-emerald-500/40">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    Continuous Skill Evolution
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Eagerly learning modern development tooling, version control with Git & GitHub, and relational & NoSQL database management.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
