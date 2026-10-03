import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types/portfolio';
import { TRANSLATIONS, GOOGLE_DRIVE_LINKS, CV_DOWNLOAD_FILES } from '../data/translations';
import { X, Printer, Download, Copy, Check, Smartphone, ShieldCheck, GraduationCap, CheckCircle2, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { EASE_OUT } from '../lib/motion';
import { useDialogAccessibility } from '../lib/useDialogAccessibility';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialTrack?: 'flutter' | 'cyber' | 'engineer';
}

type Track = 'flutter' | 'cyber' | 'engineer';

const TRACKS: { key: Track; label: string; Icon: LucideIcon; pill: string }[] = [
  { key: 'flutter', label: 'Flutter', Icon: Smartphone, pill: 'bg-emerald-600' },
  { key: 'cyber', label: 'Security', Icon: ShieldCheck, pill: 'bg-cyan-600' },
  { key: 'engineer', label: 'Eng & AI', Icon: GraduationCap, pill: 'bg-indigo-600' },
];

export const CvModal: React.FC<CvModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialTrack = 'flutter',
}) => {
  const [activeCv, setActiveCv] = useState<Track>(
    initialTrack === 'cyber' ? 'cyber' : initialTrack === 'engineer' ? 'engineer' : 'flutter'
  );
  const [copied, setCopied] = useState(false);
  const cvDialogRef = useDialogAccessibility(isOpen, onClose);

  const handleDownloadClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    filePath: string,
    fileName: string
  ) => {
    try {
      const response = await fetch(filePath);
      if (!response.ok) return;
      const blob = await response.blob();
      if (blob.type.includes('pdf') || blob.size > 10000) {
        e.preventDefault();
        const blobUrl = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
        const tempLink = document.createElement('a');
        tempLink.href = blobUrl;
        tempLink.download = fileName;
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        setTimeout(() => window.URL.revokeObjectURL(blobUrl), 2000);
      }
    } catch {
      // Fallback
    }
  };

  // Sync if initialTrack changes
  React.useEffect(() => {
    if (initialTrack === 'cyber') setActiveCv('cyber');
    else if (initialTrack === 'engineer') setActiveCv('engineer');
    else if (initialTrack === 'flutter') setActiveCv('flutter');
  }, [initialTrack]);

  const t = TRANSLATIONS[lang].cv;
  const isRtl = lang === 'ar';

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    let plainText = '';
    if (activeCv === 'flutter') {
      plainText = `HAYDAR THAEER ABDO
Latakia, Syria | +963 934044938 | eng.haydar.abdo@gmail.com
LinkedIn: linkedin.com/in/eng-haydar-abdo | GitHub: github.com/eng-haydar-abdo
Portfolio: https://eng-haydar-abdo.github.io/my-portfolio/

FLUTTER MOBILE APPLICATION DEVELOPER | COMPUTER ENGINEERING & AUTOMATIC CONTROL
Summary:
Computer Engineering & Automatic Control graduate (Latakia University, ranked 3rd in academic cohort) and certified Flutter Developer (Lvl.1 & Lvl.2, Focal X Academy). Experienced in architecting cross-platform iOS/Android apps with Dart, Clean Architecture, GetX, and Provider.

EDUCATION:
Latakia University – B.Sc. in Computer Engineering & Automatic Control (2026)
Academic Standing: Ranked 3rd in the academic cohort.

KEY PROJECTS:
- Chain Restaurants (Food CR): Restaurant & cafe delivery mobile app with GetX, cart management & REST API (https://github.com/eng-haydar-abdo/chain_restaurants).
- Labetak API: On-demand household & laundry services with backend RESTful API integration (https://github.com/eng-haydar-abdo/labetak_api).
- Hstore: Mobile E-Commerce with infinite scrolling, Hive caching, and checkout flow.
- Hstore Web: Modern front-end with 3D perfume model & showcase (https://eng-haydar-abdo.github.io/h-store-website/).
- Your Bank: Secure web banking platform with responsive financial management (https://waseemnasser.github.io/Bank_Project/).

TECHNICAL SKILLS:
- Flutter SDK, Dart, Clean Architecture, GetX, Provider, BLoC principles
- REST APIs, JSON parsing, Firebase Authentication, Cloud Firestore
- SQLite, Hive, SharedPreferences, Responsive UI, Figma to Flutter
- Git, GitHub, Android Studio, VS Code, Postman`;
    } else if (activeCv === 'cyber') {
      plainText = `HAYDAR THAEER ABDO
Latakia, Syria | +963 934044938 | eng.haydar.abdo@gmail.com
LinkedIn: linkedin.com/in/eng-haydar-abdo | GitHub: github.com/eng-haydar-abdo
Portfolio: https://eng-haydar-abdo.github.io/my-portfolio/

CYBER SECURITY | JUNIOR PENETRATION TESTER (RED TEAM) | COMPUTER ENGINEERING & AUTOMATIC CONTROL
Summary:
Motivated Computer Engineering & Automatic Control graduate (Ranked 3rd) and Red Team Penetration Tester with hands-on experience across the full pentest lifecycle (OSINT, recon, enumeration, exploitation, privilege escalation, reporting). Finished 1st out of 25 trainees in Focal X Academy and coached 19 incoming trainees across 31 sessions with an 80% improvement in performance.

EDUCATION:
Latakia University – B.Sc. in Computer Engineering & Automatic Control (2026)
Academic Standing: Ranked 3rd in the academic cohort.

EXPERIENCE:
- Focal X Academy (Mar 2026 - Aug 2026): Cyber Security Training Mentor (31 sessions, 19 trainees).
- Focal X Academy (Sep 2025 - Feb 2026): Cyber Security Trainee (Ranked 1st of 25).

KEY ENGAGEMENTS:
- CyberX Lab: Ubuntu 16.04 ProFTPD 1.3.3c backdoor exploit, WordPress pivot, and Linux Root escalation.
- OWASP Juice Shop: Full manual assessment of SQLi, XSS, IDOR, broken authentication.
- Offensive Recon Automation Suite: Python & Bash OSINT and network attack surface mapper.

TECHNICAL SKILLS:
- Methodologies: Information Gathering, Scanning, Vulnerability Assessment, Exploitation, PrivEsc
- Tools: Kali Linux, Nmap, Metasploit, Burp Suite, Gobuster, Hydra, Subfinder, Wireshark
- OSINT: Shodan, DNSdumpster, Whois, crt.sh, Exploit-DB, NVD, Maltego
- Platforms: 25+ TryHackMe rooms, 33+ PortSwigger Web Security Academy labs`;
    } else {
      plainText = `HAYDAR THAEER ABDO
Latakia, Syria | +963 934044938 | eng.haydar.abdo@gmail.com
LinkedIn: linkedin.com/in/eng-haydar-abdo | GitHub: github.com/eng-haydar-abdo

COMPUTER ENGINEERING & AUTOMATIC CONTROL (3RD RANK) | AI & SOFTWARE CRAFTSMANSHIP
Latakia University (2026). Specializing in Flutter mobile development and cybersecurity red teaming.`;
    }

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const subtitleText =
    activeCv === 'flutter'
      ? 'FLUTTER MOBILE APPLICATION DEVELOPER · COMPUTER ENGINEERING'
      : activeCv === 'cyber'
      ? 'CYBER SECURITY · JUNIOR PENETRATION TESTER (RED TEAM) · COMPUTER ENGINEERING'
      : 'COMPUTER ENGINEERING & AUTOMATIC CONTROL (3RD RANK) · JUNIOR AI DEVELOPER';

  const summaryText =
    activeCv === 'flutter'
      ? 'Computer Engineering & Automatic Control graduate (Latakia University, ranked 3rd in academic cohort) and certified Flutter Application Developer (Lvl.1 & Lvl.2, Focal X Academy). Experienced in architecting robust, cross-platform Android and iOS mobile applications utilizing Dart, Clean Architecture, GetX, Provider, SQLite, Hive, and RESTful API integrations. Strong background in system fundamentals, responsive UX, and multi-language RTL support.'
      : activeCv === 'cyber'
      ? 'Motivated Computer Engineering & Automatic Control graduate (Latakia University, ranked 3rd in cohort) and Red Team Penetration Tester with hands-on, methodology-driven experience across the penetration testing lifecycle (OSINT, recon, scanning, enumeration, exploitation, privilege escalation, reporting). Finished 1st out of 25 trainees in an intensive program, then promoted to Training Mentor coaching 19 trainees across 31 live sessions with an 80% improvement in assessment performance.'
      : 'Computer Engineering & Automatic Control graduate with hands-on experience in machine learning, deep learning, and computer vision, gained through coursework, a robotics graduation project, and independent practice with Python’s data-science ecosystem. Complements this with production full-stack development and cybersecurity penetration testing. Ranked 3rd in academic cohort.';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cv-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-2 sm:p-4 backdrop-blur-xs overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
        <motion.div
          role="dialog"
          ref={cvDialogRef}
          aria-modal="true"
          aria-labelledby="cv-dialog-title"
          tabIndex={-1}
          className="relative my-8 w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-950 text-slate-900 dark:text-slate-100"
            initial={{ opacity: 0, scale: 0.95, y: 32 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 300, damping: 28 },
            }}
            exit={{ opacity: 0, scale: 0.97, y: 16, transition: { duration: 0.18, ease: EASE_OUT } }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Controls Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800 no-print">
              <div>
                <h2 id="cv-dialog-title" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {t.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* Track Selectors */}
                <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5 dark:border-slate-800 dark:bg-slate-900">
                  {TRACKS.map(({ key, label, Icon, pill }) => {
                    const isActive = activeCv === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveCv(key)}
                        className={`relative flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                          isActive
                            ? 'text-white'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="cv-track-pill"
                            className={`absolute inset-0 rounded-md ${pill}`}
                            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center gap-1">
                          <Icon className="h-3.5 w-3.5" />
                          <span>{label}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Print Button */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                  title="Print CV or Save to PDF"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{t.printCv}</span>
                </motion.button>

                {/* Copy Button */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                  title="Copy Plain Text"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? 'check' : 'copy'}
                      className="inline-flex"
                      initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.15 }}
                    >
                      {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                    </motion.span>
                  </AnimatePresence>
                  <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                </motion.button>

                {/* Close Button */}
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={onClose}
                  aria-label={t.closeModal}
                  className="rounded-lg p-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            {/* Printable Formatted CV Body */}
            <div id="printable-cv" className="mt-6 rounded-xl border border-slate-200/80 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-950 font-sans shadow-xs text-left" dir="ltr">
              {/* CV Header */}
              <div className="border-b-2 border-slate-900 pb-4 dark:border-slate-100">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
                  Haydar Thaeer Abdo
                </h1>
                <motion.p
                  key={`subtitle-${activeCv}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  className="mt-1 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300"
                >
                  {subtitleText}
                </motion.p>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <span>Latakia, Syria</span>
                  <span>·</span>
                  <span>+963 934044938</span>
                  <span>·</span>
                  <span>eng.haydar.abdo@gmail.com</span>
                  <span>·</span>
                  <a href="https://linkedin.com/in/eng-haydar-abdo" target="_blank" rel="noreferrer" className="underline">
                    linkedin.com/in/eng-haydar-abdo
                  </a>
                  <span>·</span>
                  <a href="https://github.com/eng-haydar-abdo" target="_blank" rel="noreferrer" className="underline">
                    github.com/eng-haydar-abdo
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mt-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 pb-1 dark:border-slate-800">
                  Professional Summary
                </h2>
                <motion.p
                  key={`summary-${activeCv}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                  className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  {summaryText}
                </motion.p>
              </div>

              {/* Education */}
              <div className="mt-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 pb-1 dark:border-slate-800">
                  Education
                </h2>
                <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[13px]">
                  <div>
                    <strong className="text-slate-900 dark:text-white">Latakia University (Tishreen University)</strong>
                    <p className="text-slate-600 dark:text-slate-400">
                      Bachelor of Science in Computer Engineering & Automatic Control
                    </p>
                  </div>
                  <div className="text-right sm:text-right text-xs font-mono text-slate-500">
                    <span>Graduated: 2026</span>
                    <p className="font-semibold text-amber-600 dark:text-amber-400">
                      Ranked 3rd in Academic Cohort
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="mt-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 pb-1 dark:border-slate-800">
                  Experience & Distinctions
                </h2>

                {/* Focal X Mentor */}
                <div className="mt-2.5">
                  <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
                    <strong className="text-slate-900 dark:text-white">
                      Cyber Security Training Mentor (Teaching Assistant) · Focal X Academy
                    </strong>
                    <span className="font-mono text-xs text-slate-500">Mar 2026 – Aug 2026</span>
                  </div>
                  <ul className="mt-1 list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    <li>Guided and coached 19 incoming trainees across 31 live interactive sessions in Red Teaming.</li>
                    <li>Trained students in Nmap, Metasploit, Burp Suite, SQLmap, and OWASP Top 10 exploitation.</li>
                    <li>Drove an 80% improvement in trainees’ assessment performance on PortSwigger & TryHackMe.</li>
                  </ul>
                </div>

                {/* Focal X Trainee */}
                <div className="mt-3">
                  <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
                    <strong className="text-slate-900 dark:text-white">
                      Cyber Security Penetration Tester Trainee (Ranked 1st of 25) · Focal X Academy
                    </strong>
                    <span className="font-mono text-xs text-slate-500">Sep 2025 – Feb 2026</span>
                  </div>
                  <ul className="mt-1 list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    <li>Completed 13 graded, timed assignments and 2 full engagements (CyberX, OWASP Juice Shop).</li>
                    <li>Enumerated CyberX lab, exploited ProFTPD 1.3.3c backdoor to root session, and drafted remediation report.</li>
                    <li>Finished 25+ TryHackMe challenge rooms and 33+ PortSwigger Web Security Academy labs.</li>
                  </ul>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mt-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 pb-1 dark:border-slate-800">
                  Technical Proficiencies
                </h2>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Mobile (Flutter):</p>
                    <p>Flutter SDK, Dart, Clean Architecture, GetX, Provider, REST APIs, Hive, SQLite, Firebase</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Cybersecurity & Red Team:</p>
                    <p>Kali Linux, Metasploit, Burp Suite, Nmap, Gobuster, Hydra, Subfinder, OWASP Top 10, PrivEsc</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Engineering & AI:</p>
                    <p>Python (Scikit-learn, OpenCV, NumPy), C++, CNNs, Machine Learning, Data Structures, OOP</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Front-End & Tools:</p>
                    <p>React, JavaScript, HTML5, CSS3, Tailwind CSS, Git/GitHub, Android Studio, VS Code, Figma</p>
                  </div>
                </div>
              </div>

              {/* Certificates */}
              <div className="mt-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 pb-1 dark:border-slate-800">
                  Official Certificates & Recommendations
                </h2>
                <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  <li>
                    <strong>Cyber Security Internship Certificate & Official Recommendation Letter</strong> – Focal X Academy (Valid ID: 9PEDOSS3Z08, Signed by CEO Alaa Darwish)
                  </li>
                  <li>
                    <strong>App Development | Flutter Lvl.1 & Lvl.2 Certificates + Recommendation Letters</strong> – Focal X Academy (Valid ID: 645xrjszj70)
                  </li>
                  <li>
                    <strong>Web Development | Front-end Lvl.1 Certificate & Recommendation Letter</strong> – Focal X Academy (Valid ID: 9PEDOSS3Z08)
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800 no-print">
              <motion.div
                key={`footer-${activeCv}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="text-xs text-slate-500"
              >
                {activeCv === 'flutter' ? t.flutterTitle : activeCv === 'cyber' ? t.cyberTitle : t.engineerTitle}
              </motion.div>
              <div className="flex items-center gap-2">
                {(() => {
                  const fileInfo =
                    activeCv === 'flutter'
                      ? CV_DOWNLOAD_FILES.flutter
                      : activeCv === 'cyber'
                      ? CV_DOWNLOAD_FILES.cyber
                      : CV_DOWNLOAD_FILES.ai;

                  return (
                    <div className="flex items-center gap-1.5">
                      {/* Direct File Download Button */}
                      <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        href={fileInfo.localPath}
                        download={fileInfo.fileName}
                        onClick={(e) => handleDownloadClick(e, fileInfo.localPath, fileInfo.fileName)}
                        className="group inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800 shadow-xs transition-colors cursor-pointer"
                        title={isRtl ? 'تحميل مباشر لملف PDF' : 'Direct Download PDF file'}
                      >
                        <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                        <span>{t.downloadPdf}</span>
                      </motion.a>

                      {/* Optional Google Drive view */}
                      {fileInfo.driveUrl && (
                        <motion.a
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          href={fileInfo.driveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                          title={isRtl ? 'عرض في Google Drive' : 'Open in Google Drive'}
                        >
                          <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                          <span className="hidden sm:inline">Drive</span>
                        </motion.a>
                      )}
                    </div>
                  );
                })()}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onClose}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
