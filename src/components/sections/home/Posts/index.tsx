import { useTranslations } from 'next-intl';
import { FC, memo } from 'react';

import { Post } from '@components/Post';
import { Routes } from '@constants/routes';
import { Link } from '@navigation';
import { PostsPropsType } from '@type/post';

import style from './style.module.scss';

export const Posts: FC<PostsPropsType> = memo(({ posts }) => {
  const trPosts = useTranslations('HomePostsSection');

  return (
    <section className={style.home_posts}>
      <div className={style.featured_post_section}>
        <h2>{trPosts('featuredPost')}</h2>
        <Post
          post={posts[1]}
          descriptionGap="m"
          isImageVisible
          isAuthorVisible
          isDescriptionVisible
          IsButtonVisible
          isPaddingVisible
          isBorderVisible
        />
      </div>
      <div className={style.all_posts_section}>
        <div className={style.all_posts_titles}>
          <h2>{trPosts('allPosts')}</h2>
          <Link href={Routes.Blog}>{trPosts('viewAll')}</Link>
        </div>
        <ul>
          {posts.slice(2).map((post) => (
            <li key={post.id}>
              <Post post={post} isAuthorVisible isCardLink isPaddingVisible TitleTag="h4" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});
