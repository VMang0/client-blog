import { Categories } from '@constants/categories';
import { getCategoryByName } from '@utils/getCategoryByName';

describe('getCategoryByName', () => {
  test('should return category by "business" name', () => {
    const categoryName = 'business';
    expect(getCategoryByName(categoryName)).toBe(Categories[0]);
  });

  test('should return category by "startup" name', () => {
    const categoryName = 'startup';
    expect(getCategoryByName(categoryName)).toBe(Categories[1]);
  });

  test('should return category by "economy" name', () => {
    const categoryName = 'economy';
    expect(getCategoryByName(categoryName)).toBe(Categories[2]);
  });

  test('should return category by "technology" name', () => {
    const categoryName = 'technology';
    expect(getCategoryByName(categoryName)).toBe(Categories[3]);
  });

  test('should return business category when category was not founded', () => {
    const categoryName = 'business1234';
    expect(getCategoryByName(categoryName)).toBe(Categories[0]);
  });
});
