import emailjs from '@emailjs/browser';
import { CONTACT_CONFIG } from '../config/contactConfig.ts';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  subjectLabel: string;
  message: string;
}

export interface SendResult {
  success: boolean;
  message?: string;
  provider: 'emailjs' | 'formspree' | 'formsubmit';
}

/**
 * Dispatches contact messages to eng.haydar.abdo@gmail.com
 * Supports EmailJS, Formspree, and FormSubmit serverless gateways.
 */
export async function sendContactMessage(data: ContactFormData): Promise<SendResult> {
  const { name, email, subject, subjectLabel, message } = data;

  // 1. Try EmailJS if configured
  if (
    CONTACT_CONFIG.emailJs.serviceId &&
    CONTACT_CONFIG.emailJs.templateId &&
    CONTACT_CONFIG.emailJs.publicKey
  ) {
    try {
      const templateParams = {
        from_name: name,
        reply_to: email,
        subject: `[Portfolio Inquiry] ${subjectLabel}`,
        topic: subject,
        message: message,
        to_email: CONTACT_CONFIG.recipientEmail,
      };

      await emailjs.send(
        CONTACT_CONFIG.emailJs.serviceId,
        CONTACT_CONFIG.emailJs.templateId,
        templateParams,
        CONTACT_CONFIG.emailJs.publicKey
      );

      return {
        success: true,
        provider: 'emailjs',
        message: 'Message delivered successfully via EmailJS',
      };
    } catch (err: unknown) {
      console.warn('EmailJS attempt failed, falling back to serverless form gateway:', err);
      // Fall through to next provider
    }
  }

  // 2. Try Formspree if custom endpoint is specified
  if (CONTACT_CONFIG.formspreeEndpoint) {
    try {
      const response = await fetch(CONTACT_CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `[Portfolio Contact] ${subjectLabel}: ${name}`,
          subject: subjectLabel,
          message,
          _replyto: email,
        }),
      });

      if (response.ok) {
        return {
          success: true,
          provider: 'formspree',
          message: 'Message delivered successfully via Formspree',
        };
      }
      console.warn('Formspree returned non-200 status, falling back to serverless form gateway');
    } catch (err: unknown) {
      console.warn('Formspree dispatch failed, attempting serverless fallback:', err);
    }
  }

  // 3. Send via FormSubmit serverless gateway directed to eng.haydar.abdo@gmail.com
  try {
    const payload = {
      name,
      email,
      _subject: `[Portfolio Contact] ${subjectLabel} - From ${name}`,
      subject_category: subjectLabel,
      message,
      _replyto: email,
      _template: 'table',
      _captcha: 'false',
    };

    const response = await fetch(CONTACT_CONFIG.formSubmitEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json().catch(() => ({}));
      return {
        success: true,
        provider: 'formsubmit',
        message: data.message || 'Message transmitted successfully',
      };
    }

    throw new Error(`Server returned status ${response.status}`);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown communication error';
    console.error('All form dispatch providers failed:', errorMessage);
    throw new Error(errorMessage);
  }
}

/**
 * Generates a pre-filled mailto URL as an immediate failsafe
 */
export function buildMailtoUrl(data: ContactFormData): string {
  const subject = encodeURIComponent(`[Portfolio Contact] ${data.subjectLabel} - ${data.name}`);
  const body = encodeURIComponent(
    `Hello Eng. Haydar,\n\n` +
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Subject: ${data.subjectLabel}\n\n` +
    `Message:\n${data.message}\n`
  );
  return `mailto:${CONTACT_CONFIG.recipientEmail}?subject=${subject}&body=${body}`;
}
