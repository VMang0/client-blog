import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Routes } from '@constants/routes';

import style from './style.module.scss';

export const Logo = () => {
  const trLogo = useTranslations('Logo');

  return (
    <Link href={Routes.Home} className={style.logo}>
      {trLogo('title')}
    </Link>
  );
};
