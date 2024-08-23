export const getLimitAuthors = async (limit = 4) => {
  const response = await fetch(`https://client-blog-server-six.vercel.app/api/authors?_limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch authors');
  }
  const data = await response.json();
  return data;
};
