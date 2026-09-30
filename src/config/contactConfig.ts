// Contact Form Configuration
// Configured to send inquiries directly to eng.haydar.abdo@gmail.com

export const CONTACT_CONFIG = {
  // Primary recipient personal email address
  recipientEmail: 'eng.haydar.abdo@gmail.com',

  // Formspree endpoint if custom ID is configured (e.g., https://formspree.io/f/xyz)
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',

  // Serverless FormSubmit endpoint targeting eng.haydar.abdo@gmail.com directly
  formSubmitEndpoint: 'https://formsubmit.co/ajax/eng.haydar.abdo@gmail.com',

  // EmailJS configuration (can be supplied via environment variables)
  emailJs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
};
