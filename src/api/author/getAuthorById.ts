import { AuthorType } from '@type/author';

export const getAuthorById = async (id: string): Promise<AuthorType> => {
  const response = await fetch(`https://client-blog-server-six.vercel.app/api/authors/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch author');
  }

  const data = await response.json();
  return data;
};
