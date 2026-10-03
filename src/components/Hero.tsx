import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Track } from '../types/portfolio';
import { TRANSLATIONS, PORTRAIT_IMAGE, GOOGLE_DRIVE_LINKS } from '../data/translations';
import portraitPlaceholder from '../assets/images/haydar_profile_placeholder.jpg';
import portrait320 from '../assets/images/optimized/portrait-320.webp';
import portrait640 from '../assets/images/optimized/portrait-640.webp';
import portrait960 from '../assets/images/optimized/portrait-960.webp';
import { Terminal, ArrowDownRight, Award, ShieldCheck, Smartphone, GraduationCap, ExternalLink } from 'lucide-react';
import { fadeUp, popIn, stagger, EASE_OUT } from '../lib/motion';

interface HeroProps {
  lang: Language;
  activeTrack: Track;
}

export const Hero: React.FC<HeroProps> = ({ lang, activeTrack }) => {
  const t = TRANSLATIONS[lang].hero;
  const isRtl = lang === 'ar';
  const portraitX = isRtl ? -48 : 48;
  const [portraitLoaded, setPortraitLoaded] = React.useState(false);

  const getDynamicTagline = () => {
    if (activeTrack === 'flutter') return t.taglineFlutter;
    if (activeTrack === 'cyber') return t.taglineCyber;
    return t.taglineAll;
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24">
      {/* Subtle background tech accents */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 right-1/4 -z-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-emerald-500/5 blur-3xl dark:bg-emerald-500/10 pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 -z-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-cyan-500/5 blur-3xl dark:bg-cyan-500/10 pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1], opacity: [1, 0.8, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Typographic content & CTAs (7 cols) */}
          <motion.div
            className="lg:col-span-7"
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            animate="show"
          >
            {/* Unboxed Status Metadata */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-3 sm:mb-4"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>{t.badge}</span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span className="text-slate-500 dark:text-slate-400">Latakia, Syria / Global Remote</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight break-words"
            >
              {t.name}
            </motion.h1>

            {/* Dynamic Tagline */}
            <motion.div variants={fadeUp} className="mt-2 sm:mt-3">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={`${activeTrack}-${lang}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_OUT } }}
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
                  className="text-base sm:text-lg md:text-xl font-semibold text-emerald-700 dark:text-emerald-400 leading-snug tracking-tight"
                >
                  {getDynamicTagline()}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Bio summary */}
            <motion.p
              variants={fadeUp}
              className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl"
            >
              {t.summary}
            </motion.p>

            {/* Academic & Security Proof Metrics */}
            <motion.div
              variants={stagger(0.1)}
              className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-3 text-xs text-slate-600 dark:text-slate-300"
            >
              <motion.div
                variants={popIn}
                whileHover={{ y: -3 }}
                className="flex items-start gap-2.5 rounded-lg border border-slate-200/90 bg-slate-50/90 px-3 py-2.5 dark:border-slate-800 dark:bg-slate-900/70"
              >
                <Award className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="font-medium text-[11px] sm:text-xs leading-snug">{t.academicHighlight}</span>
              </motion.div>
              <motion.div
                variants={popIn}
                whileHover={{ y: -3 }}
                className="flex items-start gap-2.5 rounded-lg border border-slate-200/90 bg-slate-50/90 px-3 py-2.5 dark:border-slate-800 dark:bg-slate-900/70"
              >
                <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="font-medium text-[11px] sm:text-xs leading-snug">{t.pentestHighlight}</span>
              </motion.div>
            </motion.div>

            {/* Dedicated CV Buttons per Specialization */}
            <motion.div
              variants={stagger(0.08)}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3"
            >
              {/* Flutter CV Button */}
              <motion.a
                variants={fadeUp}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href={GOOGLE_DRIVE_LINKS.cv.flutter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-colors hover:bg-emerald-800 cursor-pointer"
                title={isRtl ? 'معاينة سيرة فلاتر في تبويب جديد (Google Drive)' : 'Preview Flutter CV in new tab (Google Drive)'}
              >
                <Smartphone className="h-4 w-4 shrink-0" />
                <span>{t.downloadFlutterCv}</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-80 shrink-0" />
              </motion.a>

              {/* Cyber Security CV Button */}
              <motion.a
                variants={fadeUp}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href={GOOGLE_DRIVE_LINKS.cv.cyber}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                title={isRtl ? 'معاينة سيرة الأمن السيبراني في تبويب جديد (Google Drive)' : 'Preview Penetration Tester CV in new tab (Google Drive)'}
              >
                <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>{t.downloadCyberCv}</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70 shrink-0" />
              </motion.a>

              {/* AI / Engineering CV Button */}
              <motion.a
                variants={fadeUp}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href={GOOGLE_DRIVE_LINKS.cv.ai}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                title={isRtl ? 'معاينة سيرة الذكاء الاصطناعي في تبويب جديد (Google Drive)' : 'Preview AI / ML CV in new tab (Google Drive)'}
              >
                <GraduationCap className="h-4 w-4 text-indigo-500 shrink-0" />
                <span>{t.downloadAiCv || (isRtl ? 'معاينة سيرة الذكاء الاصطناعي (PDF)' : 'Preview AI / ML CV (PDF)')}</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70 shrink-0" />
              </motion.a>
            </motion.div>

            {/* Quick Links Pills */}
            <motion.div
              variants={stagger(0.06)}
              className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300"
            >
              <motion.a
                variants={fadeUp}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center gap-1 rounded-md bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-slate-700 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400 transition-colors"
              >
                <span>{t.exploreProjects}</span>
                <ArrowDownRight className="h-3.5 w-3.5" />
              </motion.a>
              <motion.a
                variants={fadeUp}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#terminal"
                className="inline-flex items-center gap-1 rounded-md bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-slate-700 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400 transition-colors"
              >
                <Terminal className="h-3.5 w-3.5 text-emerald-500" />
                <span>{t.launchTerminal}</span>
              </motion.a>
              <motion.a
                variants={fadeUp}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/eng-haydar-abdo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3" />
              </motion.a>
              <motion.a
                variants={fadeUp}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/eng-haydar-abdo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="h-3 w-3" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: High-Fidelity Portrait Frame (5 cols) */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0"
            initial={{ opacity: 0, x: portraitX, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.25 }}
          >
            {/* حركة الطفو المستمرة في طبقة منفصلة حتى لا تتعارض مع حركة الدخول */}
            <motion.div
              className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm lg:max-w-md"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            >
              {/* Outer Decorative Tech Border Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900/90">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src={portraitPlaceholder}
                    alt=""
                    aria-hidden="true"
                    className={`absolute inset-0 h-full w-full scale-110 object-cover object-top blur-xl transition-opacity duration-700 ${
                      portraitLoaded ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <img
                    src={PORTRAIT_IMAGE}
                    srcSet={`${portrait320} 320w, ${portrait640} 640w, ${portrait960} 960w`}
                    sizes="(max-width: 639px) 80vw, (max-width: 1023px) 45vw, 40vw"
                    alt={isRtl ? 'صورة شخصية للمهندس حيدر ثائر عبدو' : 'Portrait of Haydar Thaeer Abdo'}
                    referrerPolicy="no-referrer"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    onLoad={() => setPortraitLoaded(true)}
                    className={`relative h-full w-full object-cover object-top transition-[filter,opacity,transform] duration-700 hover:scale-102 ${
                      portraitLoaded ? 'scale-100 blur-0 opacity-100' : 'scale-105 blur-md opacity-0'
                    }`}
                  />
                  {/* Subtle lighting overlay gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Corner Accent Overlay */}
                  <motion.div
                    className={`absolute bottom-3 ${isRtl ? 'right-3 text-right' : 'left-3 text-left'}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.9 }}
                  >
                    <p className="text-xs sm:text-sm font-bold text-emerald-300 drop-shadow-md">
                      {isRtl ? 'م. حيدر ثائر عبدو' : 'Eng. Haydar Abdo'}
                    </p>
                    <p className="text-[11px] text-slate-200 drop-shadow-md">
                      {isRtl ? 'هندسة حاسبات وتحكم آلي (المرتبة 3)' : 'B.Sc. Computer Engineering & Automatic Control (3rd Rank)'}
                    </p>
                  </motion.div>
                </div>

                {/* Tech Status Bar */}
                <motion.div
                  className="mt-2.5 flex items-center justify-between px-2 text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                    <span>STATUS: READY</span>
                  </span>
                  <span>LATAKIA // REMOTE</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
