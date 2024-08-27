import { FC } from 'react';

import { getAuthorById } from '@api/author/getAuthorById';
import { getPostsByAuthorId } from '@api/post/getPostsByAuthorId';
import { AuthorInfo } from '@components/sections/author/AuthorInfo';
import { AuthorsPosts } from '@components/sections/author/AuthorsPosts';
import { ParamsPropsType } from '@type/params';

const Author: FC<ParamsPropsType> = async ({ params }) => {
  const { id } = params;

  const author = await getAuthorById(id);
  const authorsPosts = await getPostsByAuthorId(id);

  return (
    <>
      <AuthorInfo author={author} />
      <AuthorsPosts posts={authorsPosts} />
    </>
  );
};

export default Author;
