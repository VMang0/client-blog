import Image from 'next/image';
import { FC, memo } from 'react';

import { PostType } from '@type/post';

import style from './style.module.scss';

export const BigPost: FC<PostType & { subtitle: string }> = memo(({ subtitle, ...post }) => {
  const { id, title, description, img } = post;

  return (
    <article className={style.big_post}>
      <Image
        src={`https://client-blog-server-six.vercel.app${img}`}
        alt={title}
        width={0}
        height={0}
        sizes="100%"
        priority
      />
      <div className={style.big_post__content}>
        <h6 className={style.subtitle}>{subtitle}</h6>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
});
