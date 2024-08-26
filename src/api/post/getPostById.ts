import { PostType } from '@type/post';

export const getPostById = async (id: string): Promise<PostType> => {
  const response = await fetch(`https://client-blog-server-six.vercel.app/api/posts/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  const data = await response.json();
  return data;
};
