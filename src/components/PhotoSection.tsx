import React, { useState } from 'react';
import { GraduationCap, MapPin, User, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PhotoSectionProps {
  variant?: 'hero' | 'standalone';
}

export const PhotoSection: React.FC<PhotoSectionProps> = () => {
  const [hasError, setHasError] = useState(false);

  // Normalize photo URL
  const getPhotoSrc = () => {
    if (!PERSONAL_INFO.photoUrl || !PERSONAL_INFO.photoUrl.trim()) {
      return '/profile-photo.jpg';
    }
    let url = PERSONAL_INFO.photoUrl.trim();
    if (url.startsWith('/public/')) {
      url = url.replace(/^\/public/, '');
    } else if (url.startsWith('public/')) {
      url = '/' + url.replace(/^public\//, '');
    }
    return encodeURI(url);
  };

  const photoSrc = getPhotoSrc();

  return (
    <div id="personal-photo-container" className="relative group max-w-sm sm:max-w-md mx-auto w-full">
      {/* Decorative ambient background glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-transparent rounded-3xl blur-xl group-hover:blur-2xl opacity-70 dark:opacity-40 transition-all duration-500 pointer-events-none" />

      {/* Main card container */}
      <div className="relative rounded-2xl p-2.5 sm:p-3.5 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800/90 shadow-xl transition-all duration-300 group-hover:border-emerald-500/40">
        
        {/* Window Bar Header */}
        <div className="flex items-center px-3 py-2 border-b border-neutral-100 dark:border-neutral-800/80 mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
          </div>
        </div>

        {/* 
          Photo frame:
          - If the user places their photo in public/profile-photo.jpg, it displays automatically.
          - If the image hasn't been added yet, a sleek developer monogram placeholder is displayed.
          - No drag-and-drop, upload button, or editing overlay.
        */}
        <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-xl overflow-hidden bg-neutral-950 flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800">
          {!hasError && photoSrc ? (
            <img
              src={photoSrc}
              alt={PERSONAL_INFO.name}
              onError={() => setHasError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
              loading="eager"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center text-neutral-400 select-none">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 shadow-inner">
                <span className="text-3xl font-extrabold font-mono text-emerald-400 tracking-wider">
                  SJ
                </span>
              </div>
              <span className="text-base font-bold text-neutral-100">{PERSONAL_INFO.name}</span>
              <span className="text-xs text-neutral-400 mt-1 font-mono">
                Computer Science & Technology
              </span>
              <div className="mt-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60 text-[11px] text-neutral-300 font-mono">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Software Developer</span>
              </div>
            </div>
          )}

          {/* Subtly graduated vignette overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Floating bottom status pill */}
          <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-neutral-900/85 backdrop-blur-md border border-white/10 shadow-lg text-xs flex items-center justify-between pointer-events-none text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-neutral-100 text-[11px] sm:text-xs">
                Open to Internships
              </span>
            </div>
            <div className="flex items-center gap-1 text-neutral-300 text-[11px] sm:text-xs">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Dhaka, BD</span>
            </div>
          </div>
        </div>

        {/* Academic status footer under photo */}
        <div className="mt-3 pt-2.5 px-2 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800/80">
          <div className="flex items-center gap-1.5 truncate">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="truncate font-medium text-neutral-700 dark:text-neutral-300">
              Dhaka Polytechnic Institute
            </span>
          </div>
          <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 shrink-0 font-medium">
            CST Student
          </span>
        </div>
      </div>
    </div>
  );
};
