import { PostType } from '@type/post';

export type PostsPropsType = {
  posts: PostType[];
  onPrevClick: () => void;
  onNextClick: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
};
