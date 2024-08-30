import classNames from 'classnames';
import { FC } from 'react';

import { ButtonPropsType } from '@components/ui/Button/type';

import style from './style.module.scss';

export const Button: FC<ButtonPropsType> = ({
  title,
  onClick,
  type = 'button',
  styleType = 'primary',
  disabled = false,
  size = 'medium',
}) => {
  const buttonClassName = classNames(style.button, {
    [style.primary]: styleType === 'primary',
    [style.secondary]: styleType === 'secondary',
    [style.small]: size === 'small',
  });

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={buttonClassName}>
      {title}
    </button>
  );
};
