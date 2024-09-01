'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';

import { Locales } from '@constants/locales';
import { useRouter, usePathname } from '@navigation';

import style from './style.module.scss';

export const SwitcherLocale = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const [isPending, startTransition] = useTransition();

  const handleUpdateLanguage = (locale: string) => () => {
    startTransition(() => {
      router.replace({ pathname }, { locale });
    });
  };

  return (
    <div className={style.switcher}>
      {Locales.map((locale) => (
        <button
          key={locale}
          type="button"
          className={style.switcher_btn}
          disabled={currentLocale === locale || isPending}
          onClick={handleUpdateLanguage(locale)}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
