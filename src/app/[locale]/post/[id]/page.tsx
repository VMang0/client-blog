import { FC } from 'react';

import { getPostById } from '@api/post/getPostById';
import { getPostsByCategory } from '@api/post/getPostsByCategory';
import { JoinSection } from '@components/JoinSection';
import { PostInformation } from '@components/sections/post/PostInformation';
import { ReadNextPosts } from '@components/sections/post/ReadNextPosts';
import { IdParamsPropsType } from '@type/params';

const Post: FC<IdParamsPropsType> = async ({ params }) => {
  const { id } = params;

  const post = await getPostById(id);
  const readNextPosts = await getPostsByCategory(post.category, post.id);

  return (
    <>
      <PostInformation post={post} />
      <ReadNextPosts posts={readNextPosts} />
      <JoinSection />
    </>
  );
};

export default Post;
