import { CommentCard } from '@components/sections/home/Testimonials/components/CommentCard';
import { comments } from '@constants/comments';

import style from '../../style.module.scss';

export const Slides = () =>
  comments.map((item, index) => (
    <div key={index} className={style.slide}>
      <CommentCard {...item} />
    </div>
  ));
