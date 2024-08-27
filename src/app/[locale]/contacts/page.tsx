import dynamic from 'next/dynamic';

import { ContactData } from '@app/[locale]/contacts/components/ContactData';
import { Heading } from '@app/[locale]/contacts/components/Heading';
import { ContactsForm } from '@components/Forms/ContactsForm';

import style from './style.module.scss';

const MapComponent = dynamic(() => import(`../../../components/Map`), { ssr: false });

const Contacts = () => {
  return (
    <>
      <section className={style.contacts_section}>
        <Heading />
        <ContactData />
        <ContactsForm />
      </section>
      <MapComponent />
    </>
  );
};

export default Contacts;
