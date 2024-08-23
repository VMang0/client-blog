import emailjs from '@emailjs/browser';

import { Env } from '@constants/env';

type SubscribeOnNewsParamsType = {
  email: string;
};

type ResponseType = {
  status: number;
  text: string;
};

const publicKey = Env.EMAILJS_PUBLIC_KEY || '';
const subscribeTemplate = Env.EMAILJS_SUBSCRIBE_TEMPLATE_ID || '';
const subscribeService = Env.EMAILJS_SUBSCRIBE_SERVICE_ID || '';

export const subscribeOnNews = async ({ email }: SubscribeOnNewsParamsType) => {
  await emailjs
    .send(subscribeService, subscribeTemplate, { email }, publicKey)
    .then((response: ResponseType) => {
      if (response.status === 200) {
        console.log('гуд');
      }
    })
    .catch((e: ResponseType) => {
      throw new Error(e.text);
    });
};
