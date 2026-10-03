import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { GraduationCap, Award, ShieldAlert, Users, CheckCircle2, Globe2 } from 'lucide-react';
import { fadeUp, fadeSide, popIn, stagger, viewportOnce } from '../lib/motion';
import { CountUp } from './CountUp';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].about;
  const dir = lang === 'ar' ? -1 : 1;

  const stats = [
    { value: t.statsRank, label: t.statsRankLabel, Icon: Award, tone: 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400' },
    { value: t.statsFirst, label: t.statsFirstLabel, Icon: ShieldAlert, tone: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400' },
    { value: t.statsRooms, label: t.statsRoomsLabel, Icon: GraduationCap, tone: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400' },
    { value: t.statsTrainees, label: t.statsTraineesLabel, Icon: Users, tone: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-slate-200/80 bg-slate-50/40 dark:border-slate-800/80 dark:bg-slate-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
            {lang === 'ar' ? 'السيرة الأكاديمية والمهنية' : 'Academic & Professional Profile'}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.subtitle}
          </motion.p>
        </motion.div>

        {/* Narrative & Metrics Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <motion.div
            className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300"
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.p variants={fadeSide(dir)}>{t.bioP1}</motion.p>
            <motion.p variants={fadeSide(dir)}>{t.bioP2}</motion.p>
            <motion.p variants={fadeSide(dir)}>{t.bioP3}</motion.p>

            {/* Soft Skills */}
            <motion.div variants={fadeUp} className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
                {t.softSkillsTitle}
              </h3>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm"
                variants={stagger(0.06)}
              >
                {t.softSkills.map((skill, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={fadeUp} className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                {t.languagesTitle}
              </h3>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {t.languages.map((lng, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <Globe2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-slate-900 dark:text-white">{lng.name}:</span>
                    <span>{lng.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Proof Grid */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4"
            variants={stagger(0.1, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {stats.map(({ value, label, Icon, tone }, i) => (
              <motion.div
                key={i}
                variants={popIn}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow dark:border-slate-800 dark:bg-slate-900"
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg mb-3 ${tone}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-slate-900 dark:text-white">
                  <CountUp value={value} />
                </div>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-snug">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
