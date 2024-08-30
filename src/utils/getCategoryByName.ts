import { Categories } from '@constants/categories';
import { CategoryType } from '@type/category';

export const getCategoryByName = (name: string): CategoryType => {
  const category = Categories.find((item) => item.name === name);
  return category || Categories[0];
};
