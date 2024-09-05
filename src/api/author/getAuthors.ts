import { env } from '@constants/env';

export const getLimitAuthors = async (limit = 4, locale = 'en') => {
  const response = await fetch(`${env.SERVER_API}/api/authors?_limit=${limit}&locale=${locale}`);
  if (!response.ok) {
    throw new Error('Failed to fetch authors');
  }
  const data = await response.json();
  return data;
};
