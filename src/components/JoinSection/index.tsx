import { useTranslations } from 'next-intl';

import { ButtonLink } from '@components/ui/Button/ButtonLink';
import { Routes } from '@constants/routes';

import style from './style.module.scss';

export const JoinSection = () => {
  const trJoin = useTranslations('JoinSection');

  return (
    <section className={style.join_section} data-testid="section-item">
      <h2>{trJoin('title')}</h2>
      <p>{trJoin('description')}</p>
      <ButtonLink title={trJoin('btn_title')} styleType="primary" href={Routes.ContactUs} />
    </section>
  );
};
