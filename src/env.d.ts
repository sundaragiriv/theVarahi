/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_CONTACT: string;
  readonly VITE_EMAILJS_TEMPLATE_NEWSLETTER: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_ENABLE_FORM_ANALYTICS: string;
  readonly VITE_GA_ID: string;
  readonly VITE_DEBUG_SPARKLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
