import { ReactNode } from 'react';

export type ModalPropsType = {
  children: ReactNode;
  handleClose: () => void;
};
