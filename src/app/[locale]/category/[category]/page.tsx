'use client';

import { CategoryHeader } from '@components/sections/category/CategoryHeader';
import { CategorySection } from '@components/sections/category/CategorySection';
import { LocaleParamsPropsType } from '@type/params';

const Category = ({ params: { locale } }: LocaleParamsPropsType) => (
  <>
    <CategoryHeader locale={locale} />
    <CategorySection locale={locale} />
  </>
);

export default Category;
