import { TestimonialsHeading } from '@components/sections/home/Testimonials/components/TestimonialsHeading';
import { Slider } from '@components/Slider';

import style from './style.module.scss';

export const Testimonials = () => (
  <section className={style.testimonials_container}>
    <TestimonialsHeading />
    <div className={style.line} />
    <Slider />
  </section>
);
