import { Env } from '@constants/env';

export const getLimitPosts = async (limit = 6, offset = 0, locale = 'en') => {
  const response = await fetch(`${Env.SERVER_API}/api/posts?_limit=${limit}&_start=${offset}&locale=${locale}`);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await response.json();
  return data;
};
