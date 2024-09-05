import { env } from '@constants/env';
import { AuthorType } from '@type/author';

export const getAuthorById = async (id: string | number, locale = 'en'): Promise<AuthorType> => {
  const response = await fetch(`${env.SERVER_API}/api/authors/?id=${id}&locale=${locale}`);

  if (!response.ok) {
    throw new Error('Failed to fetch author');
  }

  const data = await response.json();
  return data[0];
};
