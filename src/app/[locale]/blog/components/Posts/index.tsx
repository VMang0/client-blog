import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { PostsPropsType } from '@app/[locale]/blog/components/Posts/type';
import { Divider } from '@components/Devider';
import { PostsPagination } from '@components/Pagination/PostsPagination';
import { PostsList } from '@components/PostsList';

import style from './style.module.scss';

export const Posts: FC<PostsPropsType> = ({ posts, ...paginationProps }) => {
  const trPosts = useTranslations('BlogPosts');

  return (
    <section className={style.posts_section}>
      <h1>{trPosts('title')}</h1>
      <Divider />
      <div className={style.posts_section__list}>
        <PostsList posts={posts} subtitle="category" />
        <PostsPagination {...paginationProps} />
      </div>
    </section>
  );
};
