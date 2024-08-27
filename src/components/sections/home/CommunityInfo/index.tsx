import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { MulticoloredSquare } from '@components/ui/MulticoloredSquare';

import style from './style.module.scss';

export const CommunityInfo = () => {
  const trInfo = useTranslations('HomeInfoSection');

  return (
    <section className={style.info}>
      <MulticoloredSquare />
      <div className={style.info_about}>
        <h6 className={style.info__subtitle}>{trInfo('about_subtitle')}</h6>
        <h2 className={style.info_about__title}>{trInfo('about_title')}</h2>
        <p className={style.info__description}>{trInfo('about_description')}</p>
        <Link className={style.info_about__link} href="/">
          {trInfo('link_title')}
        </Link>
      </div>
      <div className={style.info_mission}>
        <h6 className={style.info__subtitle}>{trInfo('mission_subtitle')}</h6>
        <h3 className={style.info_mission__title}>{trInfo('mission_title')}</h3>
        <p className={style.info__description}>{trInfo('mission_description')}</p>
      </div>
    </section>
  );
};
