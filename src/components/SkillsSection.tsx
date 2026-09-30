import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Track } from '../types/portfolio';
import { SKILL_CATEGORIES, TRANSLATIONS } from '../data/translations';
import { Smartphone, Shield, Cpu, Sparkles } from 'lucide-react';
import { fadeUp, stagger, viewportOnce, EASE_OUT } from '../lib/motion';

interface SkillsSectionProps {
  lang: Language;
  activeTrack: Track;
}

type SkillFilter = 'all' | 'flutter' | 'cyber' | 'general';

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang, activeTrack }) => {
  const t = TRANSLATIONS[lang].skills;
  const [selectedFilter, setSelectedFilter] = useState<SkillFilter>(
    activeTrack === 'flutter' ? 'flutter' : activeTrack === 'cyber' ? 'cyber' : 'all'
  );

  // Sync if activeTrack changes from parent switcher
  React.useEffect(() => {
    if (activeTrack === 'flutter') setSelectedFilter('flutter');
    else if (activeTrack === 'cyber') setSelectedFilter('cyber');
  }, [activeTrack]);

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (selectedFilter === 'all') return true;
    return category.track === selectedFilter;
  });

  const filters: { key: SkillFilter; label: string; pill: string; activeText: string }[] = [
    { key: 'all', label: t.filterAll, pill: 'bg-white shadow-xs dark:bg-slate-800', activeText: 'text-slate-900 dark:text-white' },
    { key: 'flutter', label: t.filterFlutter, pill: 'bg-white shadow-xs dark:bg-emerald-600', activeText: 'text-slate-900 dark:text-white' },
    { key: 'cyber', label: t.filterCyber, pill: 'bg-white shadow-xs dark:bg-cyan-600', activeText: 'text-slate-900 dark:text-white' },
    { key: 'general', label: t.filterGeneral, pill: 'bg-white shadow-xs dark:bg-indigo-600', activeText: 'text-slate-900 dark:text-white' },
  ];

  const getCategoryIcon = (track: string) => {
    switch (track) {
      case 'flutter':
        return <Smartphone className="h-5 w-5 text-emerald-500" />;
      case 'cyber':
        return <Shield className="h-5 w-5 text-cyan-500" />;
      default:
        return <Cpu className="h-5 w-5 text-indigo-500" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
              {lang === 'ar' ? 'الخبرات التقنية والمنهجية' : 'Technical Proficiencies'}
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {t.subtitle}
            </motion.p>
          </div>

          {/* Interactive Category Filter Bar */}
          <motion.div
            variants={fadeUp}
            className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1 dark:border-slate-800 dark:bg-slate-900 self-start md:self-auto"
          >
            {filters.map((f) => {
              const isActive = selectedFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setSelectedFilter(f.key)}
                  className={`relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? f.activeText
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skills-filter-pill"
                      className={`absolute inset-0 rounded-md ${f.pill}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, i) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition-[border-color,box-shadow] duration-200 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                    <motion.div
                      className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs"
                      initial={{ scale: 0, rotate: -20 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 18, delay: 0.15 }}
                    >
                      {getCategoryIcon(category.track)}
                    </motion.div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {lang === 'ar' ? category.titleAr : category.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {category.skills.length} {lang === 'ar' ? 'مهارة معتمدة' : 'core competencies'}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <motion.div
                    className="mt-4 divide-y divide-slate-100 dark:divide-slate-800/60"
                    variants={stagger(0.05, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        variants={fadeUp}
                        className="py-2.5 flex items-center justify-between gap-2 text-xs"
                      >
                        <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                          {skill.featured && (
                            <motion.span
                              className="inline-flex shrink-0"
                              animate={{ scale: [1, 1.25, 1], opacity: [1, 0.7, 1] }}
                              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
                            >
                              <Sparkles className="h-3 w-3 text-emerald-500" />
                            </motion.span>
                          )}
                          <span className={skill.featured ? 'font-semibold' : 'font-normal'}>
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 shrink-0">
                          {lang === 'ar' ? skill.levelAr : skill.level}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Bottom Category Note */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>{lang === 'ar' ? 'تطبيقات عملية ومشاريع واقعية' : 'Production-tested'}</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">100% VERIFIED</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};