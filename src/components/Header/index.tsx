'use client';

import classNames from 'classnames';
import { useCallback, useState } from 'react';

import { BurgerButton } from '@components/Header/components/BurgerButton';
import { SwitchLocale } from '@components/Header/components/SwitchLocale';
import { VideoButton } from '@components/Header/components/VideoButton';
import { Logo } from '@components/Logo';
import { Navbar } from '@components/Navbar';

import style from './style.module.scss';

export const Header = () => {
  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);

  const NavbarClassName = classNames(style.header__nav, {
    [style.header__nav_visible]: isSideMenuOpened,
  });

  const handleOpen = () => setIsSideMenuOpened((prevState) => !prevState);

  const handleVideoButtonClick = useCallback(() => {
    if (isSideMenuOpened) setIsSideMenuOpened(false);
  }, [isSideMenuOpened]);

  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__logo}>
          <Logo />
        </div>
        <div className={NavbarClassName}>
          <SwitchLocale />
          <Navbar />
          <VideoButton handleClick={handleVideoButtonClick} />
        </div>
        <BurgerButton isOpened={isSideMenuOpened} handleOpen={handleOpen} />
      </div>
    </header>
  );
};
