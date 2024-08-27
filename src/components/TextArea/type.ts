import { ChangeEvent } from 'react';

export type TextAreaPropsType = {
  name: string;
  placeholder: string;
  isError: boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
};
