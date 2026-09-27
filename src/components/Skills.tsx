import React, { useState } from 'react';
import {
  Code2,
  Coffee,
  FileCode2,
  Layout,
  Palette,
  Component,
  Binary,
  Database,
  Server,
  Boxes,
  GitBranch,
  FolderGit2,
  Terminal,
  Figma,
  Layers,
  Sparkles,
  Filter,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Map icon string to Lucide icon components
const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-5 h-5" />;
    case 'Coffee':
      return <Coffee className="w-5 h-5" />;
    case 'FileCode2':
      return <FileCode2 className="w-5 h-5" />;
    case 'Layout':
      return <Layout className="w-5 h-5" />;
    case 'Palette':
      return <Palette className="w-5 h-5" />;
    case 'Component':
      return <Component className="w-5 h-5" />;
    case 'Binary':
      return <Binary className="w-5 h-5" />;
    case 'Database':
      return <Database className="w-5 h-5" />;
    case 'Server':
      return <Server className="w-5 h-5" />;
    case 'Boxes':
      return <Boxes className="w-5 h-5" />;
    case 'GitBranch':
      return <GitBranch className="w-5 h-5" />;
    case 'FolderGit2':
      return <FolderGit2 className="w-5 h-5" />;
    case 'Terminal':
      return <Terminal className="w-5 h-5" />;
    case 'Figma':
      return <Figma className="w-5 h-5" />;
    default:
      return <Layers className="w-5 h-5" />;
  }
};

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-5 h-5" />;
    case 'Layout':
      return <Layout className="w-5 h-5" />;
    case 'Binary':
      return <Binary className="w-5 h-5" />;
    case 'Server':
      return <Server className="w-5 h-5" />;
    case 'Terminal':
      return <Terminal className="w-5 h-5" />;
    default:
      return <Layers className="w-5 h-5" />;
  }
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Categorized Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
            Categorized overview of my technical foundation across programming, web development, data manipulation, databases, and development workflows.
          </p>
        </div>

        {/* Quick Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/40 ${
              selectedCategory === 'all'
                ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-sm'
                : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 border border-neutral-200 dark:border-neutral-800'
            }`}
          >
            <span>All Categories</span>
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/40 ${
                  isSelected
                    ? 'bg-neutral-900 text-white dark:bg-emerald-600 dark:text-white shadow-sm'
                    : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 border border-neutral-200 dark:border-neutral-800'
                }`}
              >
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Layout: Distinct categorized sections */}
        <div className="space-y-10">
          {visibleCategories.map((category) => (
            <div
              key={category.id}
              id={`category-${category.id}`}
              className="p-6 sm:p-8 rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800 shadow-xs transition-all"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-200/80 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Grid for this specific Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/90 shadow-xs hover:shadow-md transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-0.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-200 flex items-center justify-center">
                          {getSkillIcon(skill.iconName)}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 bg-neutral-50 dark:bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-200/60 dark:border-neutral-700/60">
                          {category.title}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {skill.focus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Philosophy Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            <strong>Practical Focus:</strong> Each technology is practiced through academic problem solving and applied software implementations, building a durable engineering mindset.
          </p>
        </div>

      </div>
    </section>
  );
};
