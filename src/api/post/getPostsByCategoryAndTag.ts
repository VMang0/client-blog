import { PostType } from '@type/post';

export const getPostsByCategoryAndTag = async (category: string, tag?: string): Promise<PostType[]> => {
  let url = `https://client-blog-server-six.vercel.app/api/posts?category=${category}`;

  if (tag) {
    url += `&tags_like=${tag}`;
  }

  const response = await fetch(url);

  if (!response.ok) throw new Error('Failed to fetch posts');

  const data = await response.json();
  return data;
};
