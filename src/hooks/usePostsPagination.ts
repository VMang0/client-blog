import { useCallback, useEffect, useState } from 'react';

import { INITIAL_PAGE, ITEMS_LIMIT } from '@constants/pagination';
import { useApiWithLocale } from '@hooks/useApiWithLocale';
import { PostType, UsePostsPaginationPropsType, UsePostsPaginationReturn } from '@type/post';

export const usePostsPagination = ({
  initialPage,
  limit = ITEMS_LIMIT,
  locale,
}: UsePostsPaginationPropsType): UsePostsPaginationReturn => {
  const { fetchLimitPosts } = useApiWithLocale(locale);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(initialPage ?? INITIAL_PAGE);
  const [featuredPost, setFeaturedPost] = useState<PostType | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);

  const fetchPosts = async (page: number) => {
    setIsLoading(true);
    const offset = (page - 1) * limit;
    const fetchedPosts = await fetchLimitPosts(limit, offset);

    if (page === 1 && !featuredPost) {
      setFeaturedPost(fetchedPosts[0] || null);
    }

    setPosts(fetchedPosts);
    setIsPrevDisabled(page === 1);
    setIsNextDisabled(fetchedPosts.length < limit);

    setIsLoading(false);
  };

  const handlePrevClick = useCallback(() => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      fetchPosts(newPage);
    }
  }, [currentPage]);

  const handleNextClick = useCallback(() => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    fetchPosts(newPage);
  }, [currentPage]);

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  return {
    isLoading,
    featuredPost,
    posts,
    isNextDisabled,
    isPrevDisabled,
    handlePrevClick,
    handleNextClick,
  };
};
