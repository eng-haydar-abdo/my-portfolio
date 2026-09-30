import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import {
  Terminal as TerminalIcon,
  RefreshCw,
  CornerDownLeft,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface TerminalSectionProps {
  lang: Language;
  onOpenCvModal?: (track?: 'flutter' | 'cyber' | 'engineer') => void;
}

interface CommandLog {
  command: string;
  output: string;
  isError?: boolean;
}

/**
 * Triggers a clean, direct browser download of the PDF file to the Downloads folder
 */
const downloadPdfFile = async (filePath: string, fileName: string) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const blob = await response.blob();
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    const blobUrl = window.URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = blobUrl;
    link.download = fileName;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    }, 2000);
  } catch (err) {
    console.error('Blob download failed, using standard anchor download fallback', err);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = filePath;
    link.download = fileName;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 2000);
  }
};

export const TerminalSection: React.FC<TerminalSectionProps> = ({ lang, onOpenCvModal }) => {
  const t = TRANSLATIONS[lang].terminal;
  const isRtl = lang === 'ar';

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'init --engineer="Haydar Thaeer Abdo"',
      output:
        'Haydar Thaeer Abdo [v2.4 LTS]\n' +
        'B.Sc. Computer Engineering & Automatic Control · Latakia University (3rd in Cohort)\n' +
        'Flutter Developer & Red Team Penetration Tester (1st of 25 at Focal X)\n' +
        'Direct PDF Downloads ready: "cv flutter", "cv cyber", "cv ai" or click the download buttons below.',
    },
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Only scroll the internal terminal container, never the window
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdToRun?: string) => {
    const raw = (cmdToRun !== undefined ? cmdToRun : inputVal).trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    let response = '';
    let isErr = false;

    if (lower === 'help') {
      response =
        'Available commands:\n' +
        '  whoami          - Engineering background and academic cohort rank\n' +
        '  skills          - Breakdown of Flutter, Red Teaming, and AI proficiencies\n' +
        '  projects        - List of active mobile apps and penetration engagements\n' +
        '  cv flutter      - Direct download Flutter Developer CV (/Haydar_Abdo_Flutter_CV.pdf)\n' +
        '  cv cyber        - Direct download Cyber Security CV (/Haydar_Abdo_Cyber_Security_CV.pdf)\n' +
        '  cv ai           - Direct download AI / ML CV (/Haydar_Abdo_AI_CV.pdf)\n' +
        '  rank            - Show academic and competition rankings\n' +
        '  nmap-scan       - Run simulated offensive reconnaissance probe on lab target\n' +
        '  flutter-run     - Simulate Flutter clean architecture build workflow\n' +
        '  contact         - Direct communication coordinates\n' +
        '  clear           - Wipe terminal output buffer';
    } else if (lower === 'whoami') {
      response =
        'Name: Eng. Haydar Thaeer Abdo\n' +
        'Degree: B.Sc. in Computer Engineering & Automatic Control, Latakia University (2026)\n' +
        'Standing: Ranked 3rd in the academic cohort\n' +
        'Security: Junior Penetration Tester & Former Mentor (Focal X Academy)\n' +
        'Location: Latakia, Syria · Open to Worldwide Remote Engagements';
    } else if (lower === 'skills') {
      response =
        'MOBILE (FLUTTER):\n' +
        '  - Flutter SDK Lvl.1 & Lvl.2, Dart, GetX, Provider, Clean Architecture, REST APIs, Hive/SQLite\n' +
        'OFFENSIVE SECURITY (RED TEAM):\n' +
        '  - Kali Linux, Metasploit, Burp Suite, Nmap, Gobuster, Hydra, Subfinder, OWASP Top 10, PrivEsc\n' +
        'CORE ENGINEERING & AI:\n' +
        '  - Python, C++, Scikit-learn, OpenCV, CNNs, Computer Vision, React, Automatic Control';
    } else if (lower === 'projects') {
      response =
        'FEATURED PORTFOLIO PROJECTS:\n' +
        '  1. Chain Restaurants (Food CR) [GitHub: https://github.com/eng-haydar-abdo/chain_restaurants]\n' +
        '  2. Labetak API                 [GitHub: https://github.com/eng-haydar-abdo/labetak_api]\n' +
        '  3. Hstore Web                  [Live: https://eng-haydar-abdo.github.io/h-store-website/]\n' +
        '  4. Your Bank                   [Live: https://waseemnasser.github.io/Bank_Project/]\n' +
        '  5. CyberX Pentest              [Offensive Security / ProFTPD 1.3.3c Root Escalation]\n' +
        '  6. OWASP Juice Shop            [Burp Suite / OWASP Top 10 Red Team Audit]\n' +
        '  7. Hstore Mobile               [Flutter / Cross-Platform E-Commerce]';
    } else if (
      lower === 'cv flutter' ||
      lower === 'download flutter cv' ||
      lower === 'download cv flutter' ||
      lower === 'flutter cv'
    ) {
      downloadPdfFile('/Haydar_Abdo_Flutter_CV.pdf', 'Haydar_Abdo_Flutter_CV.pdf');
      response =
        '[✓] Direct download initiated: /Haydar_Abdo_Flutter_CV.pdf\n' +
        '[✓] Saving file to Downloads folder: "Haydar_Abdo_Flutter_CV.pdf" (PDF Document, ~380 KB)';
    } else if (
      lower === 'cv cyber' ||
      lower === 'download cyber cv' ||
      lower === 'download cv cyber' ||
      lower === 'cyber cv' ||
      lower === 'cv pentest'
    ) {
      downloadPdfFile('/Haydar_Abdo_Cyber_Security_CV.pdf', 'Haydar_Abdo_Cyber_Security_CV.pdf');
      response =
        '[✓] Direct download initiated: /Haydar_Abdo_Cyber_Security_CV.pdf\n' +
        '[✓] Saving file to Downloads folder: "Haydar_Abdo_Cyber_Security_CV.pdf" (PDF Document, ~366 KB)';
    } else if (
      lower === 'cv ai' ||
      lower === 'cv engineer' ||
      lower === 'download ai cv' ||
      lower === 'download cv ai' ||
      lower === 'ai cv'
    ) {
      downloadPdfFile('/Haydar_Abdo_AI_CV.pdf', 'Haydar_Abdo_AI_CV.pdf');
      response =
        '[✓] Direct download initiated: /Haydar_Abdo_AI_CV.pdf\n' +
        '[✓] Saving file to Downloads folder: "Haydar_Abdo_AI_CV.pdf" (PDF Document, ~345 KB)';
    } else if (lower === 'cv' || lower === 'download cv') {
      response =
        'Please specify which CV to download directly:\n' +
        '  - "cv flutter"  -> Downloads Haydar_Abdo_Flutter_CV.pdf\n' +
        '  - "cv cyber"    -> Downloads Haydar_Abdo_Cyber_Security_CV.pdf\n' +
        '  - "cv ai"       -> Downloads Haydar_Abdo_AI_CV.pdf\n' +
        'Or click any of the direct download buttons in the panel below.';
    } else if (lower === 'rank') {
      response =
        'DISTINCTIONS:\n' +
        '  ★ Latakia University: Ranked 3rd across entire academic cohort (B.Sc. Computer Engineering & Automatic Control)\n' +
        '  ★ Focal X Academy: Ranked 1st of 25 trainees in Cyber Security Penetration Testing\n' +
        '  ★ Focal X Mentorship: Promoted to Mentor, training 19 students over 31 sessions';
    } else if (lower === 'nmap-scan') {
      response =
        'Starting Nmap 7.94 ( https://nmap.org ) at 2026-09-28 13:50\n' +
        'Nmap scan report for cyberx-lab.internal (10.10.10.45)\n' +
        'PORT     STATE SERVICE VERSION\n' +
        '21/tcp   open  ftp     ProFTPD 1.3.3c (VULNERABLE: OSVDB-69562 Backdoor)\n' +
        '22/tcp   open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8\n' +
        '80/tcp   open  http    Apache httpd 2.4.18 ((Ubuntu) WordPress 4.9)\n' +
        '3306/tcp open  mysql   MySQL 5.7.29\n' +
        '[+] Exploit identified: exploit/unix/ftp/proftpd_133c_backdoor\n' +
        '[+] Target is verified vulnerable. Session 1 opened -> root@cyberx:~#';
    } else if (lower === 'flutter-run') {
      response =
        '$ flutter doctor -v\n' +
        '[✓] Flutter (Channel stable, 3.24.x, on Linux)\n' +
        '[✓] Android toolchain - develop for Android devices (Android SDK version 34.0.0)\n' +
        '[✓] Chrome - develop for the web\n' +
        '$ flutter pub get\n' +
        'Running "flutter pub get" in food_cr... 1.2s\n' +
        '$ flutter build apk --release\n' +
        '✓ Built build/app/outputs/flutter-apk/app-release.apk (18.4MB)\n' +
        'Architecture: Clean Architecture (Domain / Data / Presentation with GetX)';
    } else if (lower === 'contact') {
      response =
        'Direct coordinates:\n' +
        '  Email:    eng.haydar.abdo@gmail.com\n' +
        '  Phone:    +963 934044938 (WhatsApp Available)\n' +
        '  GitHub:   https://github.com/eng-haydar-abdo\n' +
        '  LinkedIn: https://linkedin.com/in/eng-haydar-abdo\n' +
        '  City:     Latakia, Syria';
    } else if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      isErr = true;
      response = `command not found: "${raw}". Type "help" for a list of available commands.`;
    }

    setHistory((prev) => [...prev, { command: raw, output: response, isError: isErr }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand();
    }
  };

  const quickCommands = [
    'whoami',
    'skills',
    'projects',
    'cv flutter',
    'cv cyber',
    'cv ai',
    'nmap-scan',
    'flutter-run',
    'rank',
  ];

  return (
    <section id="terminal" className="py-16 sm:py-20 border-t border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 font-mono">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl font-sans"
        >
          <p className="text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
            {lang === 'ar' ? 'بيئة سطر الأوامر التفاعلية' : 'Interactive Sandbox'}
          </p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Terminal Window Box */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 overflow-hidden rounded-xl border border-slate-300 bg-slate-950 shadow-2xl dark:border-slate-800 text-slate-200 text-left"
          dir="ltr"
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-medium text-slate-400">
                haydar@dev-workstation:~ (bash)
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setHistory([])}
                className="hover:text-slate-300 transition-colors cursor-pointer"
                title="Clear terminal"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </motion.button>
            </div>
          </div>

          {/* Terminal Output Body */}
          <div
            ref={terminalBodyRef}
            className="p-4 sm:p-6 max-h-[380px] overflow-y-auto space-y-4 text-xs sm:text-[13px] leading-relaxed"
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="text-slate-500">haydar@engineers:~$</span>
                  <span className="font-semibold text-white">{item.command}</span>
                </div>
                <div
                  className={`whitespace-pre-wrap ${
                    item.isError ? 'text-rose-400' : 'text-slate-300'
                  }`}
                >
                  {item.output}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Buttons Ribbon */}
          <div className="border-t border-slate-800/80 bg-slate-900/60 px-4 py-2 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-500 font-sans text-[11px] mr-1">CLI Presets:</span>
            {quickCommands.map((qc) => (
              <motion.button
                key={qc}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCommand(qc)}
                className="rounded bg-slate-800 px-2 py-0.5 text-[11px] font-mono text-emerald-300 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
              >
                {qc}
              </motion.button>
            ))}
          </div>

          {/* Command Input Row */}
          <div className="flex items-center gap-2 border-t border-slate-800 bg-slate-900/90 px-4 py-3">
            <span className="text-emerald-400 font-bold shrink-0">haydar@engineers:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.placeholder}
              className="flex-1 bg-transparent text-xs sm:text-sm text-white focus:outline-none placeholder:text-slate-600"
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleCommand()}
              className="inline-flex items-center gap-1 rounded bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors cursor-pointer"
            >
              <span>{t.run}</span>
              <CornerDownLeft className="h-3 w-3" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
