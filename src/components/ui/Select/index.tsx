import classNames from 'classnames';
import { FC } from 'react';

import { SelectPropsType } from '@components/ui/Select/type';

import style from './style.module.scss';

export const Select: FC<SelectPropsType> = ({ isError = false, options, ...props }) => {
  const selectClassName = classNames(style.select, {
    [style.error]: isError,
  });

  return (
    <select className={selectClassName} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
