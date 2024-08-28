import { Categories } from '@constants/categories';
import { CategoryType } from '@type/category';

export const getCategoryByName = (name: string): CategoryType => Categories.find((item) => item.name === name);
