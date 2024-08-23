import { ChangeEvent } from 'react';

export type InputPropsType = {
  name: string;
  placeholder: string;
  dark?: boolean;
  size: 'small' | 'medium' | 'large';
  isError: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
