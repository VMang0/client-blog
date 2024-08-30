import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { LocalePrefix } from 'next-intl/routing';

import { Locales } from '@constants/locales';

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    ru: '/pathnames',
  },
};

export const localePrefix: LocalePrefix<typeof Locales> = 'always';

export const { Link, useRouter, usePathname, getPathname } = createLocalizedPathnamesNavigation({
  locales: Locales,
  pathnames,
  localePrefix,
});
