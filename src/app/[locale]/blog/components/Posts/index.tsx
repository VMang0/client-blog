import { useTranslations } from 'next-intl';

import { Divider } from '@components/Devider';
import { PostsPagination } from '@components/Pagination/PostsPagination';
import { PostsList } from '@components/PostsList';
import { usePostsPagination } from '@hooks/usePostsPagination';

import style from './style.module.scss';

export const Posts = () => {
  const { posts, ...paginationProps } = usePostsPagination({});
  const trPosts = useTranslations('BlogPosts');

  return (
    <section className={style.posts_section}>
      <h1>{trPosts('title')}</h1>
      <Divider />
      <div className={style.posts_section__list}>
        <PostsList posts={posts} />
        <PostsPagination {...paginationProps} />
      </div>
    </section>
  );
};
