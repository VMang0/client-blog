import { ReactNode } from 'react';

export type RootLayoutPropsType = {
  children: ReactNode;
  params: {
    locale: string;
  };
};
