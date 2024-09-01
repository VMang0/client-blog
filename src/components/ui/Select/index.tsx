import classNames from 'classnames';
import { FC } from 'react';

import { SelectPropsType } from '@components/ui/Select/type';

import style from './style.module.scss';
import { DATA_TEST_ID } from '../../../../cypress/e2e/data';

export const Select: FC<SelectPropsType> = ({ isError = false, options, ...props }) => {
  const selectClassName = classNames(style.select, {
    [style.error]: isError,
  });

  return (
    <select className={selectClassName} data-testid={DATA_TEST_ID.SELECT} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
