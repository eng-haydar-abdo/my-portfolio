import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Language, Theme } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { EASE_OUT } from '../lib/motion';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  theme,
  toggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.certifications, href: '#certifications' },
    { label: t.nav.contact, href: '#contact' },
  ];

  // مؤشر تقدّم التمرير
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  // تحديد القسم النشط أثناء التمرير
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');

  const handleMobileNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    window.history.pushState(null, '', href);

    // Wait for the drawer's exit animation so the sticky header has its final height.
    window.setTimeout(() => {
      const target = document.getElementById(href.slice(1));
      if (!target) return;

      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }, 220);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-200 border-slate-200/80 bg-white/95 dark:border-slate-800/80 dark:bg-slate-950/95"
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
    >
      <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 lg:px-8">
        {/* Zone 1: Wordmark */}
        <motion.a
          href="#"
          whileTap={{ scale: 0.97 }}
          className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-slate-900 transition-colors hover:text-emerald-600 dark:text-slate-100 dark:hover:text-emerald-400 truncate whitespace-nowrap min-w-0"
        >
          {isRtl ? 'م. حيدر ثائر عبدو' : 'Eng Haydar Abdo'}
        </motion.a>

        {/* Zone 2: Desktop navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link, i) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.25 + i * 0.05 }}
                className={`relative py-1 transition-colors hover:text-slate-900 dark:hover:text-white ${
                  isActive ? 'text-slate-900 dark:text-white' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-emerald-500"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Language Switcher */}
          <motion.button
            whileTap={{ scale: 0.94 }}
            initial="rest"
            whileHover="hover"
            onClick={toggleLang}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 sm:px-2.5 sm:py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800 shrink-0 cursor-pointer"
            aria-label="Toggle language"
            title={lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
          >
            <motion.span
              className="inline-flex"
              variants={{ rest: { rotate: 0 }, hover: { rotate: 180, transition: { duration: 0.5, ease: EASE_OUT } } }}
            >
              <Globe className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
            </motion.span>
            <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
          </motion.button>

          {/* Theme Switcher */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 shrink-0 cursor-pointer"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                className="inline-flex"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-amber-400" />
                ) : (
                  <Moon className="h-4 w-4 text-slate-600" />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 shrink-0 cursor-pointer"
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? 'close' : 'open'}
                className="inline-flex"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            className="overflow-hidden border-b border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-950"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.3, ease: EASE_OUT } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
          >
            <nav className="flex flex-col gap-3 px-4 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleMobileNavClick(event, link.href)}
                  initial={{ opacity: 0, x: 16 * (isRtl ? -1 : 1) }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.05 + i * 0.04 }}
                  className={`py-1.5 transition-colors hover:text-slate-900 dark:hover:text-white ${
                    activeId === link.href.slice(1) ? 'text-emerald-600 dark:text-emerald-400' : ''
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              {/* Mobile Actions Row */}
              <div className="pt-3 mt-1 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={toggleTheme}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800 cursor-pointer"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="h-4 w-4 text-amber-400" />
                      <span>{isRtl ? 'الوضع النهاري' : 'Light Mode'}</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 text-slate-600" />
                      <span>{isRtl ? 'الوضع الليلي' : 'Dark Mode'}</span>
                    </>
                  )}
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={toggleLang}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800 cursor-pointer"
                >
                  <Globe className="h-3.5 w-3.5 text-slate-500" />
                  <span>{lang === 'en' ? 'العربية' : 'English'}</span>
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* مؤشر تقدّم التمرير */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left rtl:origin-right bg-gradient-to-r from-emerald-500 to-cyan-500"
      />
    </motion.header>
  );
};
