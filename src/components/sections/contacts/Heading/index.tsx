import { useTranslations } from 'next-intl';

import style from './style.module.scss';

export const Heading = () => {
  const trHeading = useTranslations('ContactsUs.Heading');

  return (
    <div className={style.heading}>
      <h6 className={style.subtitle}>{trHeading('subtitle')}</h6>
      <h1>{trHeading('title')}</h1>
      <p>{trHeading('information')}</p>
    </div>
  );
};
