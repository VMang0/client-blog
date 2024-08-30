import { useTranslations } from 'next-intl';

import style from './style.module.scss';

export const TestimonialsHeading = () => {
  const trTestimonials = useTranslations('TestimonialsSection');

  return (
    <div className={style.testimonials_heading}>
      <h6>{trTestimonials('subtitle')}</h6>
      <h2>{trTestimonials('title')}</h2>
      <p>{trTestimonials('description')}</p>
    </div>
  );
};
