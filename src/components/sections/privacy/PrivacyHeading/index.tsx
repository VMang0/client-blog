import { useTranslations } from 'next-intl';

import style from './style.module.scss';

export const PrivacyHeading = () => {
  const trPrivacy = useTranslations('PrivacyPolicy.Heading');

  return (
    <div className={style.privacy_header}>
      <section className={style.privacy_header_content}>
        <h1 className="headline-xl">{trPrivacy('title')}</h1>
        <p>{trPrivacy('subtitle')}</p>
      </section>
    </div>
  );
};
