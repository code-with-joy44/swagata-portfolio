import React from 'react';
import { X, FileText, Download, GraduationCap, Code2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Create an anchor and trigger download
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.cvPdfUrl;
    link.download = 'Swagata_Sen_Joy_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-7 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close CV dialog"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl border border-emerald-500/20">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="cv-modal-title" className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Curriculum Vitae (CV)
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {PERSONAL_INFO.name} • {PERSONAL_INFO.title}
            </p>
          </div>
        </div>

        <div className="space-y-4 my-5 text-sm text-neutral-600 dark:text-neutral-300">
          {/* Quick Academic Snapshot */}
          <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/60">
            <div className="flex items-start gap-2.5">
              <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100 block">
                  {PERSONAL_INFO.education.degree}
                </span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  {PERSONAL_INFO.education.institution}, {PERSONAL_INFO.education.location}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Focus Snapshot */}
          <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/60">
            <div className="flex items-start gap-2.5">
              <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100 block">
                  {PERSONAL_INFO.secondaryTitle}
                </span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  Core Skills: Python, Java, JavaScript, Web & Data Foundations
                </span>
              </div>
            </div>
          </div>

          {/* Configuration Note for Swagata */}
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs border border-amber-500/20">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <p>
              <strong>Developer note:</strong> Place your PDF file in the{' '}
              <code className="px-1 py-0.5 bg-amber-500/20 rounded font-mono">/public</code> folder as{' '}
              <code className="px-1 py-0.5 bg-amber-500/20 rounded font-mono">Swagata_Sen_Joy_CV.pdf</code> or update the path in{' '}
              <code className="px-1 py-0.5 bg-amber-500/20 rounded font-mono">portfolioData.ts</code>.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-sm transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          >
            <Download className="w-4 h-4" />
            Download CV PDF
          </button>
        </div>
      </div>
    </div>
  );
};
