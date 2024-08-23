import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC, memo } from 'react';

import { ButtonLink } from '@components/Button/ButtonLink';
import { Routes } from '@constants/routes';
import { PostType } from '@type/post';

import style from './style.module.scss';
import postStyle from '../style.module.scss';

export const FeaturedPost: FC<PostType> = memo(({ ...post }) => {
  const trPost = useTranslations('Post');
  const { id, title, author, createdAt, description, img } = post;

  return (
    <article className={style.featured_post}>
      <Image
        src={`https://client-blog-server-six.vercel.app${img}`}
        alt={title}
        width={0}
        height={0}
        sizes="100%"
        priority
      />
      <p className={postStyle.author_title}>
        {trPost('by')} <span>{author.name}</span> | {createdAt}
      </p>
      <h3>{title}</h3>
      <p className={style.featured_post__description}>{description}</p>
      <ButtonLink title={trPost('btn_title')} styleType="primary" href={`${Routes.Post}/${id}`} />
    </article>
  );
});
