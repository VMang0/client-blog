import type { Preview } from '@storybook/react';
import enMessages from '../messages/en.json';
import { NextIntlClientProvider } from 'next-intl';

import '@styles/globals.scss';


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <NextIntlClientProvider locale='en' messages={enMessages}>
      <Story />
    </NextIntlClientProvider>
),
];

export default preview;
