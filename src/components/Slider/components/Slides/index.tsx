import { CommentCard } from '@components/sections/home/Testimonials/components/CommentCard';
import { Comments } from '@constants/comments';

import style from '../../style.module.scss';

export const Slides = () =>
  Comments.map((item, index) => (
    <div key={index} className={style.slide}>
      <CommentCard {...item} />
    </div>
  ));
