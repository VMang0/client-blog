import createMiddleware from 'next-intl/middleware';

import { Locales } from '@constants/locales';

export default createMiddleware({
  locales: Locales,
  defaultLocale: 'en',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(ru|en)/:path*'],
};
