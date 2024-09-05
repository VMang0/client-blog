import emailjs from '@emailjs/browser';

import { env } from '@constants/env';
import { ContactsFormType } from '@type/contacts';

type ResponseType = {
  status: number;
  text: string;
};

const publicKey = env.EMAILJS_PUBLIC_KEY || '';
const subscribeTemplate = env.EMAILJS_CONTACTS_TEMPLATE_ID || '';
const subscribeService = env.EMAILJS_SERVICE_ID || '';

export const sendContactsForm = async ({ email, message, queryRelated, name }: ContactsFormType) => {
  await emailjs
    .send(
      subscribeService,
      subscribeTemplate,
      { from_name: name, from_email: email, query_related: queryRelated, message },
      publicKey,
    )
    .catch((e: ResponseType) => {
      throw new Error(e.text);
    });
};
