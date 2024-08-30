import { Env } from '@constants/env';
import { PostType } from '@type/post';

export const getPostById = async (id: string, locale = 'en'): Promise<PostType> => {
  const response = await fetch(`${Env.SERVER_API}/api/posts/?id=${id}&locale=${locale}`);

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  const data = await response.json();
  return data[0];
};
