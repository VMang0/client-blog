import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CategoriesPropsType } from '@components/Categories/type';
import { CategoryCard } from '@components/CategoryCard';
import { ListContainer } from '@components/ListContainer';
import { Categories as CategoriesConst } from '@constants/categories';

import style from './style.module.scss';

export const Categories: FC<CategoriesPropsType> = ({ title, titleAlign }) => {
  const trCategories = useTranslations('CategoriesSection');

  return (
    <ListContainer title={title || trCategories('chooseACategory')} titleAlign={titleAlign} TitleTag="h2">
      <ul className={style.categories__list}>
        {CategoriesConst.map((category, index) => (
          <li key={index}>
            <CategoryCard category={category} full />
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};
