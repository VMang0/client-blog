import { useTranslations } from 'next-intl';

import style from './style.module.scss';

export const ContactData = () => {
  const trContactData = useTranslations('ContactsUs.ContactData');

  return (
    <div className={style.contact_data__container}>
      <div className={style.contact_data__block}>
        <span className={style.contact_data__title}>{trContactData('workingHours')}</span>
        <div className={style.divider} />
        <p className={style.contact_data__text_main}>{trContactData('mondayToFriday')}</p>
        <p className={style.contact_data__text_main}>{trContactData('workTime')}</p>
        <p className={style.contact_data__text_secondary}>{trContactData('supportAvailable')}</p>
      </div>
      <div className={style.contact_data__block}>
        <span className={style.contact_data__title}>{trContactData('contactUs')}</span>
        <div className={style.divider} />
        <p className={style.contact_data__text_main}>020 7993 2905</p>
        <p className={style.contact_data__text_secondary}>hello@finsweet.com</p>
      </div>
    </div>
  );
};
