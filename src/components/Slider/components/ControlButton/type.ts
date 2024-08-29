import { ElementType } from 'react';

export type ControlButtonType = {
  direction: 'prev' | 'next';
  Icon: ElementType;
  isDisabled: boolean;
  handleSlideChange: () => void;
};
