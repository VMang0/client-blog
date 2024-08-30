import { StaticImageData } from 'next/image';

export type CommunityDetailPropsType = {
  image: StaticImageData;
  isReversed?: boolean;
  title: string;
  subtitle: string;
  description: string;
};
