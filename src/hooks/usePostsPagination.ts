import { useCallback, useEffect, useState } from 'react';

import { getLimitPosts } from '@api/post/getPosts';
import { INITIAL_PAGE, ITEMS_LIMIT } from '@constants/pagination';
import { PostType, UsePostsPaginationPropsType, UsePostsPaginationReturn } from '@type/post';

export const usePostsPagination = ({
  initialPage,
  limit = ITEMS_LIMIT,
}: UsePostsPaginationPropsType): UsePostsPaginationReturn => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage ?? INITIAL_PAGE);
  const [featuredPost, setFeaturedPost] = useState<PostType | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);

  const fetchPosts = async (page: number) => {
    const offset = (page - 1) * limit;
    const fetchedPosts = await getLimitPosts(limit, offset);

    if (page === 1 && !featuredPost) {
      setFeaturedPost(fetchedPosts[0] || null);
    }

    setPosts(fetchedPosts);
    setIsPrevDisabled(page === 1);
    setIsNextDisabled(fetchedPosts.length < limit);
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
    featuredPost,
    posts,
    isNextDisabled,
    isPrevDisabled,
    handlePrevClick,
    handleNextClick,
  };
};
