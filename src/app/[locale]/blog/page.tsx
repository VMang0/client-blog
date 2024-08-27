'use client';

import { useTranslations } from 'next-intl';

import { Categories } from '@components/Categories';
import { JoinSection } from '@components/JoinSection';
import { BlogHeader } from '@components/sections/blog/BlogHeader';
import { Posts } from '@components/sections/blog/Posts';
import { usePostsPagination } from '@hooks/usePostsPagination';

const Blog = () => {
  const { featuredPost } = usePostsPagination({});
  const trCategories = useTranslations('CategoriesSection');

  return (
    <>
      <BlogHeader post={featuredPost} />
      <Posts />
      <Categories title={trCategories('allCategories')} titleAlign="left" />
      <JoinSection />
    </>
  );
};

export default Blog;
