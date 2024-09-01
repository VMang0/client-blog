import classNames from 'classnames';
import { FC, useEffect } from 'react';

import CheckIcon from '@assets/icons/check.svg';
import CrossIcon from '@assets/icons/cross.svg';
import { Portal } from '@components/Portal';

import style from './style.module.scss';
import { DATA_TEST_ID } from '../../../cypress/e2e/data';

export const Toast: FC<ToastPropsType> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Portal>
      <div className={classNames(style.toast, style[type])} data-testid={DATA_TEST_ID.TOAST}>
        {type === 'error' ? <CrossIcon /> : <CheckIcon />}
        <p className={style.toast_message}>{message}</p>
      </div>
    </Portal>
  );
};
