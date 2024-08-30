import { useParams } from 'next/navigation';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import { useApiWithLocale } from '@hooks/useApiWithLocale';
import { PostType } from '@type/post';
import { getCategoryByName } from '@utils/getCategoryByName';

export const useElasticSearch = (locale: string) => {
  const [posts, setPosts] = useState<PostType[] | []>([]);
  const [isSearchingActive, setIsSearchingActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { category: categoryName } = useParams<{ category: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const category = useMemo(() => getCategoryByName(categoryName), [categoryName]);
  const { fetchPostsByCategoryAndTag } = useApiWithLocale(locale);

  const getPosts = async () => {
    setIsLoading(true);
    const posts = await fetchPostsByCategoryAndTag(category.name, searchQuery);
    setPosts(posts);
    setIsLoading(false);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = useCallback(() => {
    setIsSearchingActive(true);
    getPosts();
  }, [searchQuery]);

  const hideSearch = useCallback(() => setIsSearchingActive(false), []);

  return {
    isLoading,
    category,
    posts,
    searchQuery,
    handleSearchChange,
    handleSearch,
    hideSearch,
    isSearchingActive,
  };
};
