import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { LocalePrefix, Pathnames } from 'next-intl/routing';

import { Locales } from '@constants/locales';

export const pathnames: Pathnames<typeof Locales> = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    ru: '/pathnames',
  },
};

export const localePrefix: LocalePrefix<typeof Locales> = 'always';

export const { Link, useRouter, usePathname } = createLocalizedPathnamesNavigation({
  locales: Locales,
  pathnames,
  localePrefix,
});
