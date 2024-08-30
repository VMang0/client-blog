import dynamic from 'next/dynamic';

import { ContactsForm } from '@components/Forms/ContactsForm';
import { ContactData } from '@components/sections/contacts/ContactData';
import { Heading } from '@components/sections/contacts/Heading';

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
