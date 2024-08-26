import classNames from 'classnames';
import { FC } from 'react';

import { ListContainerPropsType } from '@components/ListContainer/type';

import style from './style.module.scss';

export const ListContainer: FC<ListContainerPropsType> = ({
  TitleTag = 'h3',
  title,
  titleAlign = 'left',
  children,
}) => {
  const listClassname = classNames(style.list_container, {
    [style[titleAlign]]: titleAlign,
  });

  return (
    <section className={listClassname}>
      {title && <TitleTag>{title}</TitleTag>}
      {children}
    </section>
  );
};
