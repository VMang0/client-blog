import { ChangeEvent } from 'react';

type SelectOptionType = {
  value: string;
  label: string;
};

export type SelectPropsType = {
  name: string;
  options: SelectOptionType[];
  placeholder: string;
  isError: boolean;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};
