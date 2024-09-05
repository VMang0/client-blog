import Image from 'next/image';
import { useTranslations } from 'next-intl';

import WhyStartedImage from '@assets/images/why-started.png';
import { ButtonLink } from '@components/ui/Button/ButtonLink';
import { Routes } from '@constants/routes';

import style from './style.module.scss';

export const WhyWeStarted = () => {
  const trWhyWeStarted = useTranslations('WhyStartedSection');

  return (
    <section className={style.why_started_container} data-testid="section-item">
      <div className={style.why_started__image}>
        <Image src={WhyStartedImage} alt="teams" width={900} height={700} />
      </div>
      <article className={style.why_started__content}>
        <h6 className={style.why_started__content_subtitle}>{trWhyWeStarted('subtitle')}</h6>
        <h2>{trWhyWeStarted('title')}</h2>
        <p>{trWhyWeStarted('description')}</p>
        <ButtonLink title={trWhyWeStarted('btn_title')} styleType="primary" href={Routes.AboutUs} />
      </article>
    </section>
  );
};
