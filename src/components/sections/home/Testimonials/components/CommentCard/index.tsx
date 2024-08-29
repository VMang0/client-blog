import { FC } from 'react';

import { AuthorInfo } from '@components/sections/home/Testimonials/components/AuthorInfo';
import { CommentType } from '@type/comment';

import style from './style.module.scss';

export const CommentCard: FC<CommentType> = ({ comment, ...author }) => (
  <article className={style.comment_card}>
    <h5>{comment}</h5>
    <AuthorInfo {...author} />
  </article>
);
