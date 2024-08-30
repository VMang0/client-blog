import { ElementType } from 'react';

import { PostType } from '@type/post';

export type PostPropsType = {
  post: PostType;
  descriptionGap?: 's' | 'm';
  imageSize?: 's' | 'm';
  TitleTag?: ElementType;
  isHorizontal?: boolean;
  isCardLink?: boolean;
  IsButtonVisible?: boolean;
  isImageVisible?: boolean;
  isAuthorVisible?: boolean;
  isDescriptionVisible?: boolean;
  isCategoryVisible?: boolean;
  isPaddingVisible?: boolean;
  isBorderVisible?: boolean;
};
