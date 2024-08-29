'use client';

import classNames from 'classnames';
import React, { useState } from 'react';

import LeftArrow from '@assets/icons/arrow-left.svg';
import RightArrow from '@assets/icons/arrow-right.svg';
import { CommentCard } from '@components/sections/home/Testimonials/components/CommentCard';
import { Comments } from '@constants/comments';

import style from './style.module.scss';

const createCarouselStyle = (currentSlide: number) => ({
  transform: `translateX(-${currentSlide * 100}%)`,
});

export const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const isHasPrevSlide = currentSlideIndex > 0;
  const isHasNextSlide = currentSlideIndex < Comments.length - 1;

  const onPrevSlide = () => {
    if (isHasPrevSlide) {
      setCurrentSlideIndex((prevState) => prevState - 1);
    }
  };

  const onNextSlide = () => {
    if (isHasNextSlide) {
      setCurrentSlideIndex((prevState) => prevState + 1);
    }
  };

  return (
    <div className={style.slider_container}>
      <div className={style.slides}>
        <div className={style.slider_visible} style={createCarouselStyle(currentSlideIndex)}>
          {Comments.map((item, index) => (
            <div key={index} className={style.slide}>
              <CommentCard {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className={style.slider_control}>
        <button
          type="button"
          onClick={onPrevSlide}
          disabled={!isHasPrevSlide}
          className={classNames(style.control_btn, style.prev_btn)}
        >
          <LeftArrow />
        </button>
        <button
          type="button"
          onClick={onNextSlide}
          disabled={!isHasNextSlide}
          className={classNames(style.control_btn, style.next_next)}
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};
