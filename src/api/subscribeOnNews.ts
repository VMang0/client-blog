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
const subscribeService = Env.EMAILJS_SERVICE_ID || '';

export const subscribeOnNews = async ({ email }: SubscribeOnNewsParamsType) => {
  await emailjs.send(subscribeService, subscribeTemplate, { email }, publicKey).catch((e: ResponseType) => {
    throw new Error(e.text);
  });
};
