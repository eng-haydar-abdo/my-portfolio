/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Theme, Track } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { SpecializationSwitcher } from './components/SpecializationSwitcher';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificatesSection } from './components/CertificatesSection';
import { TerminalSection } from './components/TerminalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
// import { CvModal } from './components/CvModal';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved === 'ar' || saved === 'en') ? saved : 'en';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // Dark mode is default for modern cybersecurity vibe
  });

  const [activeTrack, setActiveTrack] = useState<Track>('all');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [cvInitialTrack, setCvInitialTrack] = useState<'flutter' | 'cyber' | 'engineer'>('flutter');

  // Sync Language and Direction
  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Sync Theme
  useEffect(() => {
    localStorage.setItem('portfolio_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Always reset scroll to the very top (0, 0) upon initial load or refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Handle any delayed browser rendering to guarantee landing at top
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 20);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenCvModal = (track?: 'flutter' | 'cyber' | 'engineer') => {
    if (track) setCvInitialTrack(track);
    else if (activeTrack === 'cyber') setCvInitialTrack('cyber');
    else setCvInitialTrack('flutter');
    setIsCvModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Specialization Lens Switcher */}
      <SpecializationSwitcher
        activeTrack={activeTrack}
        setActiveTrack={setActiveTrack}
        lang={lang}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          activeTrack={activeTrack}
        />

        {/* About Section */}
        <AboutSection lang={lang} />

        {/* Skills Section */}
        <SkillsSection
          lang={lang}
          activeTrack={activeTrack}
        />

        {/* Featured Projects Section */}
        <ProjectsSection
          lang={lang}
          activeTrack={activeTrack}
        />

        {/* Experience & Mentorship Section */}
        <ExperienceSection lang={lang} />

        {/* Certificates & Recommendation Letters Section */}
        <CertificatesSection lang={lang} />

        {/* Interactive Hacker CLI Terminal Sandbox */}
        <TerminalSection
          lang={lang}
          onOpenCvModal={handleOpenCvModal}
        />

        {/* Contact Section */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive CV Modal (Printable & Downloadable) */}
      {/* <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        lang={lang}
        initialTrack={cvInitialTrack}
      /> */}
    </div>
  );
}
