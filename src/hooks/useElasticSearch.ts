import { useParams } from 'next/navigation';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import { getPostsByCategoryAndTag } from '@api/post/getPostsByCategoryAndTag';
import { PostType } from '@type/post';
import { getCategoryByName } from '@utils/getCategoryByName';

export const useElasticSearch = () => {
  const [posts, setPosts] = useState<PostType[] | []>([]);
  const [isSearchingActive, setIsSearchingActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { category: categoryName } = useParams<{ category: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const category = useMemo(() => getCategoryByName(categoryName), [categoryName]);

  const getPosts = async () => {
    setIsLoading(true);
    const posts = await getPostsByCategoryAndTag(category.title, searchQuery);
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
