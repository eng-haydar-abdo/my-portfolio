import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Track } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { Smartphone, Shield, Layers } from 'lucide-react';
import { EASE_OUT } from '../lib/motion';

interface SpecializationSwitcherProps {
  activeTrack: Track;
  setActiveTrack: (track: Track) => void;
  lang: Language;
}

export const SpecializationSwitcher: React.FC<SpecializationSwitcherProps> = ({
  activeTrack,
  setActiveTrack,
  lang,
}) => {
  const t = TRANSLATIONS[lang].trackSwitcher;

  const tracks: { id: Track; label: string; icon: React.ReactNode }[] = [
    {
      id: 'all',
      label: t.all,
      icon: <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />,
    },
    {
      id: 'flutter',
      label: t.flutter,
      icon: <Smartphone className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />,
    },
    {
      id: 'cyber',
      label: t.cyber,
      icon: <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />,
    },
  ];

  const description =
    activeTrack === 'all'
      ? t.descAll
      : activeTrack === 'flutter'
      ? t.descFlutter
      : t.descCyber;

  return (
    <motion.div
      className="w-full border-y border-slate-200/80 bg-slate-50/70 py-2 sm:py-2.5 dark:border-slate-800/80 dark:bg-slate-900/50 backdrop-blur-xs transition-colors"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
    >
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 lg:px-8">
        {/* Dynamic Context Description / Perspective Label */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 justify-center sm:justify-start text-center sm:text-start min-w-0">
          <span className="inline-flex items-center gap-1.5 shrink-0 px-2 py-0.5 rounded-md bg-slate-200/70 text-slate-800 dark:bg-slate-800 dark:text-slate-200 font-semibold text-[10px] sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            {t.title}
          </span>
          <span aria-hidden="true" className="hidden sm:inline opacity-40">·</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={`${activeTrack}-${lang}`}
              className="font-normal text-slate-600 dark:text-slate-300 leading-snug"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE_OUT } }}
              exit={{ opacity: 0, y: -6, transition: { duration: 0.12 } }}
            >
              {description}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Segmented Control */}
        <div className="w-full sm:w-auto flex justify-center shrink-0 overflow-x-auto scrollbar-none py-0.5">
          <div className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-950 shadow-2xs shrink-0 max-w-full">
            {tracks.map((track) => {
              const isActive = activeTrack === track.id;
              return (
                <motion.button
                  key={track.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTrack(track.id)}
                  aria-pressed={isActive}
                  className={`group relative inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 sm:px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-900/70'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="track-switcher-pill"
                      className="absolute inset-0 rounded-md bg-slate-900 shadow-xs dark:bg-emerald-600"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 inline-flex items-center gap-1.5">
                    <span className="inline-flex transition-transform duration-200 group-hover:scale-110">
                      {track.icon}
                    </span>
                    <span>{track.label}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
