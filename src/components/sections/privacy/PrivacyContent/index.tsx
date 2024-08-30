import { useTranslations } from 'next-intl';

import style from './style.module.scss';

export const PrivacyContent = () => {
  const trPrivacy = useTranslations('PrivacyPolicy.Content');

  return (
    <section className={style.privacy_content}>
      <h1>{trPrivacy('title_1')}</h1>
      <p>{trPrivacy('description_1')}</p>
      <h1>{trPrivacy('title_2')}</h1>
      <p>{trPrivacy('description_2')}</p>
    </section>
  );
};
