import { tags } from '@constants/tags';

export type TagType = (typeof tags)[number];

export type TagPropsType = {
  tagName: TagType;
  handleClick: () => void;
  isActive?: boolean;
};
