import Image from 'next/image';
import { useTranslations } from 'next-intl';

import TeamsImage from '@assets/images/overview.png';
import { MulticoloredSquare } from '@components/ui/MulticoloredSquare';

import style from './style.module.scss';

export const Overview = () => {
  const trAboutUs = useTranslations('AboutUs.Overview');

  return (
    <div className={style.overview_container}>
      <MulticoloredSquare align="bottom" isReverse />
      <div className={style.statistics}>
        <div>
          <h3 className="headline-xl">12+</h3>
          <p>{trAboutUs('blogsPublished')}</p>
        </div>
        <div>
          <h3 className="headline-xl">18K+</h3>
          <p>{trAboutUs('views')}</p>
        </div>
        <div>
          <h3 className="headline-xl">30K+</h3>
          <p>{trAboutUs('totalUsers')}</p>
        </div>
      </div>
      <Image src={TeamsImage} className={style.overview_image} alt="teams" />
    </div>
  );
};
