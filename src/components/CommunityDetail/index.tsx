import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { CommunityDetailPropsType } from '@components/CommunityDetail/type';

import style from './style.module.scss';

export const CommunityDetail: FC<CommunityDetailPropsType> = ({
  image,
  isReversed = false,
  title,
  subtitle,
  description,
}) => {
  const detailClassName = classNames(style.detail_card, {
    [style.reversed]: isReversed,
  });

  return (
    <article className={detailClassName}>
      <div className={style.detail_card__image}>
        <Image src={image} alt={title} />
      </div>
      <div className={style.detail_card__content}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
};
