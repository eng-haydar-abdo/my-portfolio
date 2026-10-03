import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Language } from '../types/portfolio';
import { EXPERIENCES, TRANSLATIONS } from '../data/translations';
import { Briefcase, Award, GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { fadeUp, stagger, viewportOnce, EASE_OUT } from '../lib/motion';

interface ExperienceSectionProps {
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].experience;
  const isRtl = lang === 'ar';
  const dir = isRtl ? -1 : 1;

  // تقدّم رسم الخط حسب التمرير عبر قائمة البطاقات
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 80%', 'end 60%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="h-4 w-4 text-cyan-500" />;
      default:
        return <Briefcase className="h-4 w-4 text-emerald-500" />;
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
            {lang === 'ar' ? 'مسيرة العمل والتعليم' : 'Career Timeline'}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.subtitle}
          </motion.p>
        </motion.div>

        {/* Timeline Stack */}
        <div ref={listRef} className="relative mt-12">
          {/* خط الخلفية (ثابت) */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 start-3 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"
          />
          {/* الخط المرسوم مع التمرير */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY: lineScale }}
            className="absolute top-2 bottom-2 start-3 w-px origin-top bg-gradient-to-b from-emerald-500 to-cyan-500 hidden sm:block"
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className="relative sm:ps-12">
                {/* نقطة الـ Timeline */}
                <motion.span
                  aria-hidden="true"
                  className="absolute start-3 top-8 hidden sm:block h-3 w-3 -translate-x-1/2 rtl:translate-x-1/2 rounded-full border-2 border-emerald-500 bg-white ring-4 ring-emerald-500/10 dark:bg-slate-950"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.15 }}
                />

                <motion.div
                  initial={{ opacity: 0, x: 32 * dir, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, ease: EASE_OUT }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="relative rounded-xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/40 transition-[border-color,box-shadow] hover:border-slate-300 hover:shadow-md dark:hover:border-slate-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1">
                        {getTypeIcon(exp.type)}
                        <span>{isRtl ? exp.organizationAr : exp.organization}</span>
                        <span aria-hidden="true" className="opacity-40">·</span>
                        <span className="flex items-center gap-1 font-mono text-slate-500 dark:text-slate-400">
                          <Calendar className="h-3 w-3" />
                          {isRtl ? exp.periodAr : exp.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {isRtl ? exp.roleAr : exp.role}
                      </h3>
                    </div>

                    {/* Distinction Badge */}
                    <motion.div
                      className="shrink-0"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.3 }}
                    >
                      <span className="inline-flex items-center gap-1 rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-300">
                        <Award className="h-3.5 w-3.5" />
                        <span>
                          {index === 0
                            ? t.mentorBadge
                            : index === 1
                            ? t.traineeBadge
                            : t.eduBadge}
                        </span>
                      </span>
                    </motion.div>
                  </div>

                  {/* Achievements Bullet List */}
                  <motion.ul
                    className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                    variants={stagger(0.08, 0.25)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    {(isRtl ? exp.achievementsAr : exp.achievements).map((item, idx) => (
                      <motion.li key={idx} variants={fadeUp} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
