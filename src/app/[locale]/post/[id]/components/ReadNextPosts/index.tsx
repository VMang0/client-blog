import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Divider } from '@components/Devider';
import { ListContainer } from '@components/ListContainer';
import { Post } from '@components/Post';
import { PostsPropsType } from '@type/post';

import style from './style.module.scss';

export const ReadNextPosts: FC<PostsPropsType> = ({ posts }) => {
  const trBlogPost = useTranslations('BlogPost');

  return (
    <ListContainer title={trBlogPost('whatToReadNext')} titleAlign="left" TitleTag="h2">
      <ul className={style.post_list}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post
              post={post}
              isImageVisible
              isAuthorVisible
              isDescriptionVisible
              imageSize="s"
              TitleTag="h3"
              descriptionGap="m"
              isCardLink
            />
          </li>
        ))}
      </ul>
      <Divider />
    </ListContainer>
  );
};
