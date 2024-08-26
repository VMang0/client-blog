import { FC } from 'react';

import { getPostById } from '@api/post/getPostById';
import { getPostsByCategory } from '@api/post/getPostsByCategory';
import { PostInformation } from '@app/[locale]/post/[id]/components/PostInformation';
import { ReadNextPosts } from '@app/[locale]/post/[id]/components/ReadNextPosts';
import { JoinSection } from '@components/JoinSection';
import { ParamsPropsType } from '@type/params';

const Post: FC<ParamsPropsType> = async ({ params }) => {
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
