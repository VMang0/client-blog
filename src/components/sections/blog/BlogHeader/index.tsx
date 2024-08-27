import Image from 'next/image';
import { FC, memo } from 'react';

import { HeroPostInfo } from '@components/HeroPostInfo';
import { PostPropsType } from '@type/post';

import style from './style.module.scss';

export const BlogHeader: FC<PostPropsType | { post: null }> = memo(({ post }) => {
  return (
    <>
      {post && (
        <div className={style.blog_header}>
          <section className={style.blog_header__content}>
            <HeroPostInfo {...post} />
            <Image
              src={`https://client-blog-server-six.vercel.app${post.img}`}
              alt={post.title}
              width={0}
              height={0}
              sizes="100%"
              priority
            />
          </section>
        </div>
      )}
    </>
  );
});
