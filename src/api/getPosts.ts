export const getPosts = async () => {
  const response = await fetch('http://localhost:5000/api/posts');
  const data = await response.json();

  return data;
};

export const getLimitPosts = async (limit = 6, offset = 0) => {
  const response = await fetch(`https://client-blog-server-six.vercel.app/api/posts?_limit=${limit}&_start=${offset}`);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await response.json();
  return data;
};
