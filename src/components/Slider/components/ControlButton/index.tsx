import classNames from 'classnames';
import { FC, memo } from 'react';

import { ControlButtonType } from '@components/Slider/components/ControlButton/type';

import style from './style.module.scss';

export const ControlButton: FC<ControlButtonType> = memo(({ direction, Icon, isDisabled, handleSlideChange }) => {
  const buttonClassNames = classNames(style.control_btn, {
    [style.prev_btn]: direction === 'prev',
    [style.next_btn]: direction === 'next',
  });

  return (
    <button
      type="button"
      aria-label={direction}
      onClick={handleSlideChange}
      disabled={isDisabled}
      className={buttonClassNames}
    >
      <Icon />
    </button>
  );
});
