import classNames from 'classnames';
import { FC } from 'react';

import { InputPropsType } from '@components/Input/type';

import style from './style.module.scss';

export const Input: FC<InputPropsType> = ({ dark = false, size = 'medium', isError = false, ...props }) => {
  const inputClassName = classNames(style.input, {
    [style.input__dark]: dark,
    [style.error]: isError,
    [style.small]: size === 'small',
    [style.medium]: size === 'medium',
    [style.large]: size === 'large',
  });

  return <input className={inputClassName} {...props} />;
};
