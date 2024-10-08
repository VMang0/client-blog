export const env = {
  EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  EMAILJS_SUBSCRIBE_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBE_TEMPLATE_ID,
  EMAILJS_CONTACTS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_CONTACTS_TEMPLATE_ID,
  MAPBOX_KEY: process.env.NEXT_PUBLIC_MAPBOX_KEY,
  SERVER_API: process.env.NEXT_PUBLIC_SERVER_API,
} as const;
