import { FC, memo } from 'react';

import { BigPost } from '@components/Post/BigPost';
import { PostsPropsType } from '@type/post';

import style from './style.module.scss';

export const PostsList: FC<PostsPropsType & { subtitle: string }> = memo(({ posts, subtitle }) => (
  <ul className={style.post_list}>
    {posts.map((post) => (
      <li key={post.id}>
        <BigPost {...post} subtitle={post[subtitle]} />
      </li>
    ))}
  </ul>
));
