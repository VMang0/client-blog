import { useTranslations } from 'next-intl';
import { FC, memo } from 'react';

import { PostType } from '@type/post';

import style from './style.module.scss';
import postStyle from '../style.module.scss';

export const SmallPost: FC<PostType> = memo(({ ...post }) => {
  const trPost = useTranslations('Post');
  const { id, title, author, createdAt } = post;

  return (
    <article className={style.small_post}>
      <p className={postStyle.author_title}>
        {trPost('by')} <span>{author.name}</span> | {createdAt}
      </p>
      <h4>{title}</h4>
    </article>
  );
});
