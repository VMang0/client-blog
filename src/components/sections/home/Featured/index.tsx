import { useTranslations } from 'next-intl';

import { Logos } from '@constants/logos';

import style from './style.module.scss';

export const Featured = () => {
  const trFeaturedSection = useTranslations('FeaturedSection');

  return (
    <section className={style.featured_container}>
      <div>
        <p>{trFeaturedSection('subtitle')}</p>
        <h4>{trFeaturedSection('title')}</h4>
      </div>
      <ul className={style.featured_logos}>
        {Logos.map((Logo, index) => (
          <li key={index}>
            <Logo />
          </li>
        ))}
      </ul>
    </section>
  );
};
