import { useTranslations } from 'next-intl';

import { AboutCommunity } from '@components/AboutCommunity';
import { AboutHeading } from '@components/sections/about/AboutHeading';
import { Overview } from '@components/sections/about/Overview';

import style from './style.module.scss';

export const AboutHeadingWrapper = () => {
  const trAboutHeading = useTranslations('AboutUs.Community');

  return (
    <section className={style.about_heading_section}>
      <AboutHeading />
      <Overview />
      <AboutCommunity
        firstTitle={trAboutHeading('title_mission')}
        secondTitle={trAboutHeading('title_vision')}
        firstSubtitle={trAboutHeading('subtitle_mission')}
        secondSubtitle={trAboutHeading('subtitle_vision')}
        firstDescription={trAboutHeading('description_mission')}
        secondDescription={trAboutHeading('description_vision')}
      />
    </section>
  );
};
