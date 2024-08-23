import { useTranslations } from 'next-intl';

import { CategoryCard } from '@components/CategoryCard';
import { Categories as CategoriesConst } from '@constants/categories';

import style from './style.module.scss';

export const Categories = () => {
  const trCategories = useTranslations('CategoriesSection');

  return (
    <section className={style.categories}>
      <h2>{trCategories('title')}</h2>
      <ul className={style.categories__list}>
        {CategoriesConst.map((category, index) => (
          <li key={index}>
            <CategoryCard category={category} full />
          </li>
        ))}
      </ul>
    </section>
  );
};
