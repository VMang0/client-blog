import { env } from '@constants/env';
import { PostType } from '@type/post';

export const getPostsByAuthorId = async (id: string, locale = 'en'): Promise<PostType[]> => {
  const response = await fetch(`${env.SERVER_API}/api/posts?author.id=${id}&locale=${locale}`);

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  const data = await response.json();
  return data;
};
