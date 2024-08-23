import { FC } from 'react';

import { BurgerBtnPropsType } from '@components/Header/components/BurgerBtn/type';

import style from './style.module.scss';

export const BurgerBtn: FC<BurgerBtnPropsType> = ({ isOpened, handleOpen }) => (
  <label className={style.burger__container}>
    <input type="checkbox" className={style.burger__switcher} checked={isOpened} onChange={handleOpen} />
    <span className={style.burger__item} />
    <span className={style.burger__item} />
    <span className={style.burger__item} />
  </label>
);
