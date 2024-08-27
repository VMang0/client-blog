import classNames from 'classnames';
import { FC } from 'react';

import { TextAreaPropsType } from '@components/ui/TextArea/type';

import style from './style.module.scss';

export const TextArea: FC<TextAreaPropsType> = ({ isError = false, ...props }) => {
  const textareaClassName = classNames(style.textarea, {
    [style.error]: isError,
  });

  return <textarea className={textareaClassName} {...props} />;
};
