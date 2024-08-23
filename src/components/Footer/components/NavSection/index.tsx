import { Logo } from '@components/Logo';
import { Navbar } from '@components/Navbar';

import style from './style.module.scss';

export const NavSection = () => (
  <div className={style.navigation__section}>
    <Logo />
    <Navbar isPrivacyVisible />
  </div>
);
