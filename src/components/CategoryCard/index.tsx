import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { CategoryCardPropsType } from '@components/CategoryCard/types';
import { Routes } from '@constants/routes';

import style from './style.module.scss';

export const CategoryCard: FC<CategoryCardPropsType> = ({ category, full = false }) => {
  const { title, Icon, description, name } = category;

  const categoryClassName = classNames(style.category_card, {
    [style.category_card__full]: full,
  });

  return (
    <Link href={`${Routes.Category}/${name}`} className={categoryClassName}>
      <div className={style.category_card_icon__wrapper}>
        <Icon />
      </div>
      <h3>{title}</h3>
      {full && <p>{description}</p>}
    </Link>
  );
};
