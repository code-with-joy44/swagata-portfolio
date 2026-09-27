import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, School, Calendar, Award, BookOpen, Clock } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 bg-neutral-50/60 dark:bg-neutral-950/60 border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-14 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Educational Background
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
            Foundational academic studies and technical coursework shaping my engineering journey.
          </p>
        </div>

        {/* Education Cards Grid (2 Columns Desktop, 1 Column Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {EDUCATION_DATA.map((item, index) => {
            const isCurrent = item.isCurrent;

            return (
              <div
                key={item.id}
                id={`education-card-${item.id}`}
                className={`group relative rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Top Header Row of Card */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    {/* Institution Icon */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                      {isCurrent ? (
                        <GraduationCap className="w-6 h-6" />
                      ) : (
                        <School className="w-6 h-6" />
                      )}
                    </div>

                    {/* Status Badge or Passing Badge */}
                    {isCurrent ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>In Progress</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30 shadow-2xs">
                        <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>GPA: {item.gpa}</span>
                      </div>
                    )}
                  </div>

                  {/* Institution Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mb-2">
                    {item.institution}
                  </h3>

                  {/* Program / Level */}
                  <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                    {item.degreeOrLevel}
                  </p>

                  {/* Metadata Row: Session or Year */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">
                    {isCurrent ? (
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                        <span>Session: {item.session}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                        <span>Passing Year: {item.passingYear}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Section: Subjects / Areas */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Subjects / Areas</span>
                  </div>
                  
                  {/* Clean small tags/badges */}
                  <div className="flex flex-wrap gap-2">
                    {item.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700/60 shadow-2xs group-hover:border-emerald-500/30 transition-colors"
                      >
                        {subject}
                      </span>
                    ))}
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
