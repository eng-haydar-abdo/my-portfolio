import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Certificate, Language } from '../types/portfolio';
import { CERTIFICATES, TRANSLATIONS } from '../data/translations';
import { Award, FileText, ExternalLink, X, QrCode, ShieldCheck, Download } from 'lucide-react';
import { fadeUp, stagger, viewportOnce, EASE_OUT } from '../lib/motion';

interface CertificatesSectionProps {
  lang: Language;
}

type Filter = 'all' | 'certificate' | 'recommendation';

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].certifications;
  const isRtl = lang === 'ar';

  const [filter, setFilter] = useState<Filter>('all');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

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
      // Fallback to normal anchor click
    }
  };

  const filteredCerts = CERTIFICATES.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  const filters: { key: Filter; label: string; active: string }[] = [
    { key: 'all', label: t.filterAll, active: 'bg-slate-900 dark:bg-slate-800' },
    { key: 'certificate', label: t.filterCertificates, active: 'bg-emerald-600' },
    { key: 'recommendation', label: t.filterLetters, active: 'bg-amber-600' },
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 border-t border-slate-200/80 bg-slate-50/40 dark:border-slate-800/80 dark:bg-slate-900/20">
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
              {lang === 'ar' ? 'الاعتمادات الموثقة والتوصيات' : 'Verified Credentials'}
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
              const isActive = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="cert-filter-pill"
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

        {/* Credentials Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, i) => {
              const isRec = cert.type === 'recommendation';
              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, ease: EASE_OUT, delay: (i % 3) * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedCert(cert)}
                  className="cursor-pointer group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-emerald-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        {isRec ? (
                          <FileText className="h-4 w-4 text-amber-500" />
                        ) : (
                          <Award className="h-4 w-4 text-emerald-500" />
                        )}
                        <span>{cert.issuer}</span>
                      </span>

                      {cert.certId && (
                        <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">
                          ID: {cert.certId}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400 transition-colors">
                      {isRtl ? cert.titleAr : cert.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {cert.date}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 italic">
                      {isRtl ? cert.summaryAr : cert.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <span className="group-hover:text-emerald-500 transition-colors">
                      {t.viewCredential}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {cert.driveUrl && cert.driveUrl.trim().startsWith('http') && (
                        <a
                          href={cert.driveUrl.trim()}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 rounded bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                          title={isRtl ? 'عرض في Google Drive' : 'Open in Google Drive'}
                        >
                          <span>Drive</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      )}
                      <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Credential Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            key="cert-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 28 } }}
              exit={{ opacity: 0, scale: 0.96, y: 12, transition: { duration: 0.18, ease: EASE_OUT } }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header Badge */}
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                <ShieldCheck className="h-4 w-4" />
                <span>Verified Academy Credential</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-slate-500">{selectedCert.date}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {isRtl ? selectedCert.titleAr : selectedCert.title}
              </h3>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Issued by: <strong className="text-slate-700 dark:text-slate-200">{selectedCert.issuer}</strong>
              </p>

              {/* Content Body */}
              <div className="mt-4 rounded-xl border border-slate-200/80 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {isRtl ? selectedCert.summaryAr : selectedCert.summary}
                </p>

                {/* Endorsement Note */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="italic">
                    Signed by: <strong>Alaa Darwish</strong>, Founder & CEO
                  </span>
                  {selectedCert.certId && (
                    <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                      ID: {selectedCert.certId}
                    </span>
                  )}
                </div>
              </div>

              {/* Verification QR Representation */}
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-slate-200/80 bg-white p-3 dark:border-slate-800 dark:bg-slate-900/60">
                <div className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                  <QrCode className="h-6 w-6" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Official Scan-to-Search Hash
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    {selectedCert.certId ? `focal-x.com/verify/${selectedCert.certId}` : 'focal-x.com/recommendations/haydar-abdo'}
                  </p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                {selectedCert.localPath && (
                  <a
                    href={selectedCert.localPath}
                    download={selectedCert.localPath.split('/').pop() || 'certificate.pdf'}
                    onClick={(e) =>
                      selectedCert.localPath &&
                      handleDownloadClick(
                        e,
                        selectedCert.localPath,
                        selectedCert.localPath.split('/').pop() || 'certificate.pdf'
                      )
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 shadow-xs transition-colors cursor-pointer"
                    title={isRtl ? 'تحميل المستند مباشرة (PDF)' : 'Direct download document PDF'}
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>{isRtl ? 'تحميل مباشر (PDF)' : 'Download PDF'}</span>
                  </a>
                )}

                {selectedCert.driveUrl && selectedCert.driveUrl.trim().startsWith('http') && (
                  <a
                    href={selectedCert.driveUrl.trim()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                    <span>{isRtl ? 'عرض في Google Drive' : 'View on Drive'}</span>
                  </a>
                )}

                <button
                  onClick={() => setSelectedCert(null)}
                  className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};