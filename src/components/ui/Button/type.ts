import { MouseEventHandler } from 'react';

export type ButtonPropsType = {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button';
  styleType: 'primary' | 'secondary';
  disabled?: boolean;
  size?: 'small' | 'medium';
};
