import { useFilterPosts } from '@hooks/useFilterPosts';

import style from './style.module.scss';

export const CategoryHeader = () => {
  const { category } = useFilterPosts();
  const { title, description } = category;

  return (
    <div className={style.category_header}>
      <section className={style.category_header__content}>
        <h1 className="headline-xl">{title}</h1>
        <p>{description}</p>
        <h6 className={style.category_header__subtitle}>
          Blog {'>'} {title}
        </h6>
      </section>
    </div>
  );
};
