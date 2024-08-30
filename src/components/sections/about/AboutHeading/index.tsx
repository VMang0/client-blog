import { useTranslations } from 'next-intl';

import style from './style.module.scss';

export const AboutHeading = () => {
  const trAboutUs = useTranslations('AboutUs.Heading');

  return (
    <div className={style.heading_container}>
      <div className={style.heading_container_left}>
        <p className={style.heading_subtitle}>{trAboutUs('subtitle')}</p>
        <h2>{trAboutUs('title')}</h2>
      </div>
      <div className={style.heading_container_right}>
        <p>{trAboutUs('description')}</p>
      </div>
    </div>
  );
};
