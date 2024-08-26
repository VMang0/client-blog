import { PostType } from '@type/post';

export const getPostsByCategory = async (category: string, id: string): Promise<PostType[]> => {
  const response = await fetch(
    `https://client-blog-server-six.vercel.app/api/posts?category=${category}&id_ne=${id}&_limit=3`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await response.json();
  return data;
};
