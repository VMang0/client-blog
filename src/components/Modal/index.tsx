import { FC, memo, MouseEventHandler } from 'react';

import { ModalPropsType } from '@components/Modal/types';
import { Portal } from '@components/Portal';
import { useBodyOverflow } from '@hooks/useBodyOverflow';

import style from './style.module.scss';

export const Modal: FC<ModalPropsType> = memo(({ children, handleClose }) => {
  const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();

  useBodyOverflow(true);

  return (
    <Portal>
      <div className={style.background_blur} onClick={handleClose}>
        <div className={style.modal_container} onClick={stopPropagation}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
