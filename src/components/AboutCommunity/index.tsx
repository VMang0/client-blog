import { FC } from 'react';

import style from '@components/AboutCommunity/style.module.scss';
import { AboutCommunityPropsType } from '@components/AboutCommunity/type';
import { MulticoloredSquare } from '@components/ui/MulticoloredSquare';
import { Routes } from '@constants/routes';
import { Link } from '@navigation';

export const AboutCommunity: FC<AboutCommunityPropsType> = ({
  firstTitle,
  secondTitle,
  firstSubtitle,
  secondSubtitle,
  firstDescription,
  secondDescription,
  isLinkVisible = false,
  linkTitle,
}) => (
  <div className={style.info}>
    <MulticoloredSquare />
    <div className={style.info_about}>
      <h6 className={style.info__subtitle}>{firstSubtitle}</h6>
      <h2 className={style.info_about__title}>{firstTitle}</h2>
      <p className={style.info__description}>{firstDescription}</p>
      {isLinkVisible && (
        <Link className={style.info_about__link} href={Routes.AboutUs}>
          {linkTitle}
        </Link>
      )}
    </div>
    <div className={style.info_mission}>
      <h6 className={style.info__subtitle}>{secondSubtitle}</h6>
      <h3 className={style.info_mission__title}>{secondTitle}</h3>
      <p className={style.info__description}>{secondDescription}</p>
    </div>
  </div>
);
