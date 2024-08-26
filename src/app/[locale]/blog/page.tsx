'use client';

import { useTranslations } from 'next-intl';

import { BlogHeader } from '@app/[locale]/blog/components/BlogHeader';
import { Posts } from '@app/[locale]/blog/components/Posts';
import { Categories } from '@components/Categories';
import { JoinSection } from '@components/JoinSection';
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
