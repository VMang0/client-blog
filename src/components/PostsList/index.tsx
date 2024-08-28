import { FC, memo } from 'react';

import { NoDataImage } from '@components/NoDataImage';
import { Post } from '@components/Post';
import { PostsPropsType } from '@type/post';

import style from './style.module.scss';

export const PostsList: FC<PostsPropsType> = memo(({ posts }) => (
  <ul className={style.post_list}>
    {posts.length > 0 &&
      posts.map((post) => (
        <li key={post.id}>
          <Post
            post={post}
            isHorizontal
            isImageVisible
            isCategoryVisible
            isDescriptionVisible
            imageSize="s"
            TitleTag="h2"
            descriptionGap="m"
            isCardLink
          />
        </li>
      ))}
    {posts.length === 0 && <NoDataImage size={400} />}
  </ul>
));
