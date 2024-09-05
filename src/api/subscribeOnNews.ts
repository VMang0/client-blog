import emailjs from '@emailjs/browser';

import { env } from '@constants/env';

type SubscribeOnNewsParamsType = {
  email: string;
};

type ResponseType = {
  status: number;
  text: string;
};

const publicKey = env.EMAILJS_PUBLIC_KEY || '';
const subscribeTemplate = env.EMAILJS_SUBSCRIBE_TEMPLATE_ID || '';
const subscribeService = env.EMAILJS_SERVICE_ID || '';

export const subscribeOnNews = async ({ email }: SubscribeOnNewsParamsType) => {
  await emailjs.send(subscribeService, subscribeTemplate, { email }, publicKey).catch((e: ResponseType) => {
    throw new Error(e.text);
  });
};
