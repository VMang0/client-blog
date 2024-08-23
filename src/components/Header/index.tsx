'use client';

import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Button } from '@components/Button';
import { BurgerBtn } from '@components/Header/components/BurgerBtn';
import { Logo } from '@components/Logo';
import { Navbar } from '@components/Navbar';

import style from './style.module.scss';

export const Header = () => {
  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);
  const trButton = useTranslations('ModalVideo');

  const NavbarClassName = classNames(style.header__nav, {
    [style.header__nav_visible]: isSideMenuOpened,
  });

  const handleOpen = () => setIsSideMenuOpened((prevState) => !prevState);

  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <Logo />
        </div>
        <div className={NavbarClassName}>
          <Navbar />
          <Button title={trButton('btn_title')} styleType="secondary" onClick={() => {}} />
        </div>
        <BurgerBtn isOpened={isSideMenuOpened} handleOpen={handleOpen} />
      </div>
    </header>
  );
};
