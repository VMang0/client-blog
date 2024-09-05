import { env } from '@constants/env';
import { PostType } from '@type/post';

export const getPostsByCategoryAndTag = async (category: string, locale = 'en', tag?: string): Promise<PostType[]> => {
  let url = `${env.SERVER_API}/api/posts?category=${category}&locale=${locale}`;

  if (tag) {
    url += `&tags_like=${tag}`;
  }

  const response = await fetch(url);

  if (!response.ok) throw new Error('Failed to fetch posts');

  const data = await response.json();
  return data;
};
