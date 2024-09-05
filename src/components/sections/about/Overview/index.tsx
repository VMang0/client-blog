import Image from 'next/image';
import { useTranslations } from 'next-intl';

import TeamsImage from '@assets/images/overview.png';
import { MulticoloredSquare } from '@components/ui/MulticoloredSquare';
import { aboutStatistic } from '@constants/aboutStatistic';

import style from './style.module.scss';

export const Overview = () => {
  const trAboutUs = useTranslations('AboutUs.Overview');

  return (
    <div className={style.overview_container}>
      <MulticoloredSquare align="bottom" isReverse />
      <div className={style.statistics}>
        {aboutStatistic.map(({ name, content }, index) => (
          <div key={index}>
            <h3 className="headline-xl">{content}</h3>
            <p>{trAboutUs(name)}</p>
          </div>
        ))}
      </div>
      <Image src={TeamsImage} className={style.overview_image} alt="teams" />
    </div>
  );
};
