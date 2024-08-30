import { getAuthorById } from '@api/author/getAuthorById';
import { getLimitAuthors } from '@api/author/getAuthors';
import { getPostById } from '@api/post/getPostById';
import { getLimitPosts } from '@api/post/getPosts';
import { getPostsByAuthorId } from '@api/post/getPostsByAuthorId';
import { getPostsByCategory } from '@api/post/getPostsByCategory';
import { getPostsByCategoryAndTag } from '@api/post/getPostsByCategoryAndTag';

export const useApiWithLocale = (locale: string) => {
  const fetchAuthorById = (id: string | number) => getAuthorById(id, locale);
  const fetchLimitAuthors = (limit = 4) => getLimitAuthors(limit, locale);
  const fetchLimitPosts = (limit = 6, offset = 0) => getLimitPosts(limit, offset, locale);
  const fetchPostById = (id: string) => getPostById(id, locale);
  const fetchPostsByAuthorId = (id: string) => getPostsByAuthorId(id, locale);
  const fetchPostsByCategory = (category: string, id: string) => getPostsByCategory(category, id, locale);
  const fetchPostsByCategoryAndTag = (category: string, tag?: string) =>
    getPostsByCategoryAndTag(category, locale, tag);

  return {
    fetchAuthorById,
    fetchLimitAuthors,
    fetchLimitPosts,
    fetchPostById,
    fetchPostsByAuthorId,
    fetchPostsByCategory,
    fetchPostsByCategoryAndTag,
  };
};
