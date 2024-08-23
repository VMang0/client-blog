import { ContactsSection } from '@components/Footer/components/ContactsSection';
import { NavSection } from '@components/Footer/components/NavSection';
import { SubscribeSection } from '@components/Footer/components/SubscribeSection';

import style from './style.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <NavSection />
        <SubscribeSection />
        <ContactsSection />
      </div>
    </footer>
  );
};
