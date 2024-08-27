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
}) => {
  const buttonClassName = classNames(style.button, {
    [style.primary]: styleType === 'primary',
    [style.secondary]: styleType === 'secondary',
  });

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={buttonClassName}>
      {title}
    </button>
  );
};
