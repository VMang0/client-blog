'use client';

import { useTransition } from 'react';

import { Locales } from '@constants/locales';
import { useRouter, usePathname } from '@navigation';

import style from './style.module.scss';

export const SwitchLocale = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [_, startTransition] = useTransition();

  const updateLocale = (locale: string) => () => {
    startTransition(() => {
      router.replace({ pathname }, { locale });
    });
  };

  return (
    <div className={style.switcher}>
      {Locales.map((locale) => (
        <button key={locale} type="button" onClick={updateLocale(locale)}>
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
