import { TagType } from '@components/ui/Tag/type';

export type ControlPanelPropsType = {
  activeTag: TagType | '';
  onTagClick: (tag: TagType) => void;
  selectedCategory: string;
};
