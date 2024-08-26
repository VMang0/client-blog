import { FC } from 'react';

import { getAuthorById } from '@api/author/getAuthorById';
import { getPostsByAuthorId } from '@api/post/getPostsByAuthorId';
import { AuthorInfo } from '@app/[locale]/author/[id]/components/AuthorInfo';
import { AuthorsPosts } from '@app/[locale]/author/[id]/components/AuthorsPosts';
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
