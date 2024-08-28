import { Tags } from '@constants/tags';

export type TagType = (typeof Tags)[number];

export type TagPropsType = {
  tagName: TagType;
  handleClick: () => void;
  isActive?: boolean;
};
