'use client';

import { useTranslations } from 'next-intl';

import { Categories } from '@components/Categories';
import { JoinSection } from '@components/JoinSection';
import { BlogHeader } from '@components/sections/blog/BlogHeader';
import { Posts } from '@components/sections/blog/Posts';
import { usePostsPagination } from '@hooks/usePostsPagination';
import { LocaleParamsPropsType } from '@type/params';

const Blog = ({ params: { locale } }: LocaleParamsPropsType) => {
  const { featuredPost } = usePostsPagination({ locale });
  const trCategories = useTranslations('CategoriesSection');

  return (
    <>
      <BlogHeader post={featuredPost} />
      <Posts locale={locale} />
      <Categories title={trCategories('allCategories')} titleAlign="left" />
      <JoinSection />
    </>
  );
};

export default Blog;
