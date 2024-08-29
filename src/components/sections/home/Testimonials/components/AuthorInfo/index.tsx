import Image from 'next/image';
import { FC } from 'react';

import { CommentType } from '@type/comment';

import style from './style.module.scss';

export const AuthorInfo: FC<Omit<CommentType, 'comment'>> = ({ image, country, name }) => (
  <article className={style.author_info}>
    <div className={style.author_info__image}>
      <Image src={image} alt={name} width={50} height={50} />
    </div>
    <div className={style.author_info__content}>
      <h4>{name}</h4>
      <p>{country}</p>
    </div>
  </article>
);
