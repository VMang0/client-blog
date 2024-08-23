import { useTranslations } from 'next-intl';

import { SubscribeForm } from '@components/Forms/SubscribeForm';

import style from './style.module.scss';

export const SubscribeSection = () => {
  const trSubscribe = useTranslations('SubscribeForm');

  return (
    <div className={style.subscribe__section}>
      <h2>{trSubscribe('title')}</h2>
      <SubscribeForm />
    </div>
  );
};
