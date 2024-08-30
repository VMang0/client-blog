import Image from 'next/image';
import { FC, memo } from 'react';

import { HeroPostInfo } from '@components/HeroPostInfo';
import { Env } from '@constants/env';
import { PostPropsType } from '@type/post';

import style from './style.module.scss';

export const BlogHeader: FC<PostPropsType | { post: null }> = memo(({ post }) => {
  return (
    <div className={style.blog_header}>
      <section className={style.blog_header__content}>
        {post && (
          <>
            <HeroPostInfo {...post} />
            <Image src={`${Env.SERVER_API}${post.img}`} alt={post.title} width={0} height={0} sizes="100%" priority />
          </>
        )}
      </section>
    </div>
  );
});
