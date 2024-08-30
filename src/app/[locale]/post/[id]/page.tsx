import { FC } from 'react';

import { JoinSection } from '@components/JoinSection';
import { PostInformation } from '@components/sections/post/PostInformation';
import { ReadNextPosts } from '@components/sections/post/ReadNextPosts';
import { useApiWithLocale } from '@hooks/useApiWithLocale';
import { IdLocaleParamsPropsType } from '@type/params';

const Post: FC<IdLocaleParamsPropsType> = async ({ params }) => {
  const { id, locale } = params;
  const { fetchPostById, fetchPostsByCategory, fetchAuthorById } = useApiWithLocale(locale);

  const post = await fetchPostById(id);
  const readNextPosts = await fetchPostsByCategory(post.category, post.id);
  const author = await fetchAuthorById(post.author.id);

  return (
    <>
      <PostInformation post={post} authorImage={author.image} />
      {readNextPosts.length > 0 && <ReadNextPosts posts={readNextPosts} />}
      <JoinSection />
    </>
  );
};

export default Post;
