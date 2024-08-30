import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CategoryCardPropsType } from '@components/CategoryCard/types';
import { Routes } from '@constants/routes';
import { Link } from '@navigation';

import style from './style.module.scss';

export const CategoryCard: FC<CategoryCardPropsType> = ({ category, full = false, isActive = false }) => {
  const trCategory = useTranslations('Categories');
  const { Icon, description, name } = category;

  const categoryClassName = classNames(style.category_card, {
    [style.category_card__full]: full,
    [style.category_card__active]: isActive,
  });

  return (
    <Link href={`${Routes.Category}/${name}`} className={categoryClassName}>
      <div className={style.category_card_icon__wrapper}>
        <Icon />
      </div>
      <h3>{trCategory(name)}</h3>
      {full && <p>{description}</p>}
    </Link>
  );
};
