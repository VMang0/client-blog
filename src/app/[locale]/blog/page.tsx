'use client';

import { useCallback, useEffect, useState } from 'react';

import { getLimitPosts } from '@api/getPosts';
import { BlogHeader } from '@app/[locale]/blog/components/BlogHeader';
import { Posts } from '@app/[locale]/blog/components/Posts';
import { Categories } from '@components/Categories';
import { JoinSection } from '@components/JoinSection';
import { PostType } from '@type/post';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredPost, setFeaturedPost] = useState<PostType | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const limit = 5;

  const fetchPosts = async (page: number) => {
    const offset = (page - 1) * limit;
    const fetchedPosts = await getLimitPosts(limit, offset);

    setPosts(fetchedPosts);
    setIsPrevDisabled(page === 1);
    setIsNextDisabled(fetchedPosts.length < limit);
  };

  const fetchFeaturedPost = async () => {
    const [fetchedPost] = await getLimitPosts(1);
    setFeaturedPost(fetchedPost || null);
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
    fetchFeaturedPost();
  }, []);

  return (
    <>
      <BlogHeader post={featuredPost} />
      <Posts
        posts={posts}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
      />
      <Categories />
      <JoinSection />
    </>
  );
};

export default Blog;
