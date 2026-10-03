import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { ArrowUp } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].footer;
  const isRtl = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white py-8 dark:border-slate-800/80 dark:bg-slate-950 text-xs text-slate-500 dark:text-slate-400 no-print">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ ...viewportOnce, amount: 0.1 }}
      >
        <motion.div variants={fadeUp}>
          <p className="font-medium text-slate-800 dark:text-slate-200">
            {isRtl ? 'م. حيدر ثائر عبدو' : 'Eng. Haydar Thaeer Abdo'}
          </p>
          <p className="mt-0.5 text-[11px] text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} {t.rights} · {t.builtWith}
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center gap-6">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/eng-haydar-abdo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/eng-haydar-abdo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </motion.a>
          <motion.button
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 font-medium hover:text-emerald-500 transition-colors cursor-pointer"
          >
            <span>{t.backToTop}</span>
            <motion.span
              className="inline-flex"
              variants={{
                rest: { y: 0 },
                hover: { y: [0, -3, 0], transition: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' } },
              }}
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
};
