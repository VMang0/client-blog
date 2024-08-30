import classNames from 'classnames';
import { FC } from 'react';

import { ButtonLinksPropsType } from '@components/ui/Button/ButtonLink/type';
import { Link } from '@navigation';

import style from '../style.module.scss';

export const ButtonLink: FC<ButtonLinksPropsType> = ({ title, href, styleType = 'primary' }) => {
  const buttonClassName = classNames(style.button, {
    [style.primary]: styleType === 'primary',
    [style.secondary]: styleType === 'secondary',
  });

  return (
    <Link href={href} className={buttonClassName}>
      {title}
    </Link>
  );
};
