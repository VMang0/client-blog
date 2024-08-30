import { useTranslations } from 'next-intl';

import { useFilterPosts } from '@hooks/useFilterPosts';

import style from './style.module.scss';

export const CategoryHeader = ({ locale }: { locale: string }) => {
  const trCategory = useTranslations('Categories');
  const { category } = useFilterPosts(locale);
  const { description, name } = category;

  return (
    <div className={style.category_header}>
      <section className={style.category_header__content}>
        <h1 className="headline-xl">{trCategory(name)}</h1>
        <p>{description}</p>
        <h6 className={style.category_header__subtitle}>
          Blog {'>'} {trCategory(name)}
        </h6>
      </section>
    </div>
  );
};
