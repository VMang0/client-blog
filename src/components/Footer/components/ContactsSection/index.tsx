import Link from 'next/link';

import { contactsLinks } from '@constants/contactsLinks';

import style from './style.module.scss';

export const ContactsSection = () => (
  <div className={style.contacts}>
    <div>
      <span>Finstreet 118 2561 Fintown</span>
      <br />
      <span>Hello@finsweet.com 020 7993 2905</span>
    </div>
    <ul className={style.contacts__links}>
      {contactsLinks.map(({ href, Icon }, index) => (
        <li key={index}>
          <Link href={href}>
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
