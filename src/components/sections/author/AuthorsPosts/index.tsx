import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ListContainer } from '@components/ListContainer';
import { PostsList } from '@components/PostsList';
import { PostsPropsType } from '@type/post';

export const AuthorsPosts: FC<PostsPropsType> = ({ posts }) => {
  const trAuthors = useTranslations('AuthorPage');

  return (
    <ListContainer title={trAuthors('title')} titleAlign="left" TitleTag="h2">
      <PostsList posts={posts} />
    </ListContainer>
  );
};
