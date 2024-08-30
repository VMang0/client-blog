import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { Locales } from '@constants/locales';

export default getRequestConfig(async ({ locale }) => {
  if (!Locales.includes(locale as string)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
