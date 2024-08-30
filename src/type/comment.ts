import { StaticImageData } from 'next/image';

export type CommentType = {
  image: StaticImageData;
  name: string;
  country: string;
  comment: string;
};
