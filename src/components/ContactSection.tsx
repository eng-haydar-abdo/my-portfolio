import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { CONTACT_CONFIG } from "../config/contactConfig.ts";
import { sendContactMessage, buildMailtoUrl, ContactFormData } from '../services/contactService';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  ExternalLink,
  Linkedin,
  Github,
  Loader2,
  AlertCircle,
  RefreshCw,
  Inbox,
  ShieldCheck,
} from 'lucide-react';
import { fadeUp, stagger, viewportOnce, EASE_OUT } from '../lib/motion';

interface ContactSectionProps {
  lang: Language;
}

/* أيقونة النسخ مع تبديل متحرك */
const CopyIcon: React.FC<{ copied: boolean }> = ({ copied }) => (
  <AnimatePresence mode="wait" initial={false}>
    <motion.span
      key={copied ? 'check' : 'copy'}
      className="inline-flex"
      initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.15 }}
    >
      {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
    </motion.span>
  </AnimatePresence>
);

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].contact;
  const isRtl = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'flutter' as keyof typeof t.formSubjectOptions,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const getSubjectLabel = (key: keyof typeof t.formSubjectOptions) => {
    return t.formSubjectOptions[key] || key;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload: ContactFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject,
      subjectLabel: getSubjectLabel(formData.subject),
      message: formData.message.trim(),
    };

    try {
      await sendContactMessage(payload);
      setSubmitted(true);
      setErrorMessage(null);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown communication error';
      console.error('Contact submission error:', msg);
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleOpenMailto = () => {
    const mailtoUrl = buildMailtoUrl({
      name: formData.name || 'Visitor',
      email: formData.email || '',
      subject: formData.subject,
      subjectLabel: getSubjectLabel(formData.subject),
      message: formData.message || '',
    });
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-slate-200/80 bg-slate-50/40 dark:border-slate-800/80 dark:bg-slate-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
            {isRtl ? 'بدء محادثة هندسية' : 'Initiate Communication'}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.subtitle}
          </motion.p>
        </motion.div>

        {/* Content Layout */}
        <motion.div
          className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Direct Coordinates (5 cols) */}
          <motion.div variants={fadeUp} className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                {t.directContacts}
              </h3>

              <motion.div className="space-y-4 text-xs sm:text-sm" variants={stagger(0.1, 0.1)}>
                {/* Email Item */}
                <motion.div variants={fadeUp} className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">{t.emailLabel}</p>
                      <a
                        href={`mailto:${CONTACT_CONFIG.recipientEmail}`}
                        className="font-semibold text-slate-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400 break-all"
                      >
                        {CONTACT_CONFIG.recipientEmail}
                      </a>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => copyToClipboard(CONTACT_CONFIG.recipientEmail, 'email')}
                    className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded transition-colors"
                    title={isRtl ? 'نسخ البريد الإلكتروني' : 'Copy Email'}
                  >
                    <CopyIcon copied={copiedEmail} />
                  </motion.button>
                </motion.div>

                {/* Phone & WhatsApp Item */}
                <motion.div variants={fadeUp} className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">{t.phoneLabel}</p>
                      <a
                        href="https://wa.me/963934044938"
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono font-semibold text-slate-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
                      >
                        +963 934044938
                      </a>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => copyToClipboard('+963934044938', 'phone')}
                    className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded transition-colors"
                    title={isRtl ? 'نسخ رقم الهاتف' : 'Copy Phone'}
                  >
                    <CopyIcon copied={copiedPhone} />
                  </motion.button>
                </motion.div>

                {/* Location */}
                <motion.div variants={fadeUp} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">{t.locationLabel}</p>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {t.locationVal}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Direct Recipient Assurance */}
              <div className="mt-5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>{t.recipientNotice}</span>
              </div>

              {/* Social Channels */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://linkedin.com/in/eng-haydar-abdo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://github.com/eng-haydar-abdo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Contact Form (7 cols) */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900 shadow-xs">
              <AnimatePresence mode="wait" initial={false}>
                {submitted ? (
                  /* Success State */
                  <motion.div
                    key="success"
                    className="py-8 text-center space-y-4"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } }}
                    exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                  >
                    <motion.div
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 shadow-xs ring-4 ring-emerald-500/10"
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                    >
                      <Check className="h-7 w-7" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {t.successTitle}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                        {t.successDesc}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                      <Inbox className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Delivered to: {CONTACT_CONFIG.recipientEmail}</span>
                    </div>

                    <div className="pt-3">
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', subject: 'flutter', message: '' });
                        }}
                        className="rounded-lg bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors cursor-pointer"
                      >
                        {isRtl ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  /* Active Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } }}
                    exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                  >
                    {/* Delivery Info Banner */}
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Mail className="h-3.5 w-3.5 text-emerald-500" />
                        <span>{t.recipientNotice}</span>
                      </span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">
                        Serverless Direct Delivery
                      </span>
                    </div>

                    {/* Error Notification Banner if failed */}
                    <AnimatePresence initial={false}>
                      {errorMessage && (
                        <motion.div
                          key="error-banner"
                          className="overflow-hidden"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto', transition: { duration: 0.3, ease: EASE_OUT } }}
                          exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                        >
                          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-xs dark:border-red-900/50 dark:bg-red-950/40">
                            <div className="flex items-start gap-2.5 text-red-800 dark:text-red-300">
                              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                              <div className="flex-1 space-y-1">
                                <p className="font-semibold">{t.errorTitle}</p>
                                <p className="text-[11px] leading-relaxed text-red-700 dark:text-red-400">
                                  {t.errorDesc}
                                </p>
                                <div className="pt-2 flex flex-wrap items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="inline-flex items-center gap-1.5 rounded-md bg-red-600 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-red-500 transition-colors cursor-pointer"
                                  >
                                    <RefreshCw className="h-3 w-3" />
                                    <span>{t.retryBtn}</span>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={handleOpenMailto}
                                    className="inline-flex items-center gap-1.5 rounded-md border border-red-300 bg-white px-3 py-1.5 text-[11px] font-semibold text-red-800 hover:bg-red-50 dark:border-red-800 dark:bg-red-900/50 dark:text-red-200 dark:hover:bg-red-900 transition-colors cursor-pointer"
                                  >
                                    <ExternalLink className="h-3 w-3" />
                                    <span>{t.openEmailApp}</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          {t.formName} *
                        </label>
                        <input
                          type="text"
                          required
                          disabled={isSubmitting}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={isRtl ? 'مثال: أحمد العلي' : 'e.g. Alex Morgan'}
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white disabled:opacity-60 transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          {t.formEmail} *
                        </label>
                        <input
                          type="email"
                          required
                          disabled={isSubmitting}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white disabled:opacity-60 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.formSubject}
                      </label>
                      <select
                        disabled={isSubmitting}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value as keyof typeof t.formSubjectOptions })}
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white disabled:opacity-60 transition-colors cursor-pointer"
                      >
                        <option value="flutter">{t.formSubjectOptions.flutter}</option>
                        <option value="cyber">{t.formSubjectOptions.cyber}</option>
                        <option value="hiring">{t.formSubjectOptions.hiring}</option>
                        <option value="mentorship">{t.formSubjectOptions.mentorship}</option>
                        <option value="general">{t.formSubjectOptions.general}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.formMessage} *
                      </label>
                      <textarea
                        required
                        rows={4}
                        disabled={isSubmitting}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.formMessagePlaceholder}
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white disabled:opacity-60 transition-colors resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={isSubmitting ? undefined : { y: -2 }}
                      whileTap={isSubmitting ? undefined : { scale: 0.98 }}
                      className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-xs cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin shrink-0" />
                          <span>{t.sending}</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          <span>{t.submit}</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
