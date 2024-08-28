import { PostType } from '@type/post';

export type SearchResultPropsType = {
  isLoading: boolean;
  posts: PostType[];
  isSearchingActive: boolean;
};
