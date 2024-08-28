import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { NavbarPropsType } from '@components/Navbar/types';
import { NavLinks } from '@constants/navLinks';
import { Link } from '@navigation';

import style from './style.module.scss';

export const Navbar: FC<NavbarPropsType> = ({ isPrivacyVisible = false }) => {
  const trNavbar = useTranslations('Navbar');

  const navLinks = isPrivacyVisible ? NavLinks : NavLinks.slice(0, NavLinks.length - 1);

  return (
    <nav>
      <ul className={style.navbar__list}>
        {navLinks.map(({ link, title }, index) => (
          <li key={index}>
            <Link href={link}>{trNavbar(title)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
