import classNames from 'classnames';
import { FC } from 'react';

import { InputPropsType } from '@components/ui/Input/type';

import style from './style.module.scss';
import { DATA_TEST_ID } from '../../../../cypress/e2e/data';

export const Input: FC<InputPropsType> = ({ dark = false, size = 'medium', isError = false, ...props }) => {
  const inputClassName = classNames(style.input, {
    [style.input__dark]: dark,
    [style.error]: isError,
    [style.medium]: size === 'medium',
    [style.large]: size === 'large',
  });

  return <input data-testid={DATA_TEST_ID.INPUT} className={inputClassName} {...props} />;
};
