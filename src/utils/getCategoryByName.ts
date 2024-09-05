import { categories } from '@constants/categories';
import { CategoryType } from '@type/category';

export const getCategoryByName = (name: string): CategoryType => {
  const category = categories.find((item) => item.name === name);
  return category || categories[0];
};
