import { useTranslations } from 'next-intl';

import { PostsList } from '@components/PostsList';
import { PostsPagination } from '@components/PostsPagination';
import { Divider } from '@components/ui/Devider';
import { usePostsPagination } from '@hooks/usePostsPagination';

import style from './style.module.scss';

export const Posts = ({ locale }: { locale: string }) => {
  const { posts, isLoading, ...paginationProps } = usePostsPagination({ locale });
  const trPosts = useTranslations('BlogPosts');

  return (
    <section className={style.posts_section}>
      <h1>{trPosts('title')}</h1>
      <Divider />
      <div className={style.posts_section__list}>
        <PostsList posts={posts} isLoading={isLoading} />
        {!isLoading && <PostsPagination {...paginationProps} />}
      </div>
    </section>
  );
};
