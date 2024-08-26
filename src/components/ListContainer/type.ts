import { ElementType, ReactNode } from 'react';

export type ListContainerPropsType = {
  children: ReactNode;
  TitleTag?: ElementType;
  title?: string;
  titleAlign?: 'center' | 'left' | 'right';
};
