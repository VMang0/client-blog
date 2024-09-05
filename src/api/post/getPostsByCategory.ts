import { env } from '@constants/env';
import { PostType } from '@type/post';

export const getPostsByCategory = async (category: string, id: string, locale = 'en'): Promise<PostType[]> => {
  const response = await fetch(
    `${env.SERVER_API}/api/posts?category=${category}&id_ne=${id}&_limit=3&locale=${locale}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await response.json();
  return data;
};
