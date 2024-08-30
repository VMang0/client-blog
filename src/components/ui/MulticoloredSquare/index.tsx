import classNames from 'classnames';
import { FC } from 'react';

import style from './style.module.scss';

type MulticoloredSquarePropsType = {
  isReverse?: boolean;
  align?: 'bottom' | 'top';
};

export const MulticoloredSquare: FC<MulticoloredSquarePropsType> = ({ isReverse = false, align = 'top' }) => {
  const squareClassName = classNames(style.square_container, {
    [style.reverse]: isReverse,
    [style[align]]: align,
  });

  return (
    <div className={squareClassName}>
      <div className={style.square_container__yellow} />
      <div className={style.square_container__purple} />
    </div>
  );
};
