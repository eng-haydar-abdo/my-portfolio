import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Project, Track } from '../types/portfolio';
import { PROJECTS, TRANSLATIONS } from '../data/translations';
import { ExternalLink, Github, Eye, Terminal, Smartphone, Globe, X, Check } from 'lucide-react';
import { fadeUp, stagger, viewportOnce, EASE_OUT } from '../lib/motion';

interface ProjectsSectionProps {
  lang: Language;
  activeTrack: Track;
}

type ProjectFilter = 'all' | 'flutter' | 'cyber' | 'web';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang, activeTrack }) => {
  const t = TRANSLATIONS[lang].projects;
  const isRtl = lang === 'ar';

  const [activeFilter, setActiveFilter] = useState<ProjectFilter>(
    activeTrack === 'flutter' ? 'flutter' : activeTrack === 'cyber' ? 'cyber' : 'all'
  );

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync with main page activeTrack
  React.useEffect(() => {
    if (activeTrack === 'flutter') setActiveFilter('flutter');
    else if (activeTrack === 'cyber') setActiveFilter('cyber');
  }, [activeTrack]);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  const filters: { key: ProjectFilter; label: string; active: string }[] = [
    { key: 'all', label: t.filterAll, active: 'bg-slate-900 dark:bg-slate-800' },
    { key: 'flutter', label: t.filterFlutter, active: 'bg-emerald-600' },
    { key: 'cyber', label: t.filterCyber, active: 'bg-cyan-600' },
    { key: 'web', label: t.filterWeb, active: 'bg-indigo-600' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'flutter':
        return <Smartphone className="h-3.5 w-3.5 text-emerald-500" />;
      case 'cyber':
        return <Terminal className="h-3.5 w-3.5 text-cyan-500" />;
      default:
        return <Globe className="h-3.5 w-3.5 text-indigo-500" />;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-slate-200/80 bg-slate-50/40 dark:border-slate-800/80 dark:bg-slate-900/20">
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
              {lang === 'ar' ? 'معرض الأعمال والإنجازات' : 'Selected Engagements & Work'}
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {t.subtitle}
            </motion.p>
          </div>

          {/* Filter Bar */}
          <motion.div
            variants={fadeUp}
            className="inline-flex rounded-lg border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-900 self-start md:self-auto shadow-2xs"
          >
            {filters.map((f) => {
              const isActive = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className={`absolute inset-0 rounded-md ${f.active}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Project Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white transition-[border-color,box-shadow] duration-200 hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
              >
                <div>
                  {/* Media Container */}
                  <div className="relative aspect-16/9 overflow-hidden bg-slate-100 dark:bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Corner Category Indicator */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-md bg-slate-950/80 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-xs">
                      {getCategoryIcon(project.category)}
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400 transition-colors">
                      {isRtl ? project.titleAr : project.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      {isRtl ? project.taglineAr : project.tagline}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                      {isRtl ? project.descriptionAr : project.description}
                    </p>

                    {/* Tech Stack tags */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                        {project.tags.slice(0, 4).map((tag, idx) => (
                          <React.Fragment key={tag}>
                            {idx > 0 && <span aria-hidden="true" className="opacity-40">·</span>}
                            <span>{tag}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="border-t border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-900/60 flex items-center justify-between">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>{t.viewDetails}</span>
                  </motion.button>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 transition-colors"
                        title={t.liveDemo}
                      >
                        <span>{t.liveDemo}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ y: -2, rotate: -8 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                        title={t.viewCode}
                      >
                        <Github className="h-4 w-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="project-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 28 } }}
              exit={{ opacity: 0, scale: 0.96, y: 12, transition: { duration: 0.18, ease: EASE_OUT } }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 rounded-lg bg-white/70 p-1.5 text-slate-400 backdrop-blur-xs hover:bg-slate-100 hover:text-slate-600 dark:bg-slate-900/70 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                aria-label={t.closeModal}
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Modal Image */}
              <div className="aspect-16/9 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Title & Tagline */}
              <div className="mt-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="capitalize">{selectedProject.category} Track</span>
                  <span aria-hidden="true">·</span>
                  <span>Production Implementation</span>
                </div>
                <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                  {isRtl ? selectedProject.titleAr : selectedProject.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {isRtl ? selectedProject.taglineAr : selectedProject.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isRtl ? selectedProject.descriptionAr : selectedProject.description}
              </p>

              {/* Technical Highlights */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                  {t.modalHighlights}
                </h4>
                <motion.ul
                  className="mt-2 space-y-2 text-xs text-slate-600 dark:text-slate-300"
                  variants={stagger(0.06, 0.15)}
                  initial="hidden"
                  animate="show"
                >
                  {(isRtl ? selectedProject.highlightsAr : selectedProject.highlights).map((item, idx) => (
                    <motion.li key={idx} variants={fadeUp} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                  {t.modalTechStack}
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-mono text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-6 flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {selectedProject.liveUrl && (
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 shadow-xs transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{t.liveDemo}</span>
                  </motion.a>
                )}
                {selectedProject.githubUrl && (
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <Github className="h-4 w-4" />
                    <span>{t.viewCode}</span>
                  </motion.a>
                )}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer"
                >
                  {t.closeModal}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};