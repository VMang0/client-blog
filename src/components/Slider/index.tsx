'use client';

import classNames from 'classnames';
import React, { useState } from 'react';

import LeftArrow from '@assets/icons/arrow-left.svg';
import RightArrow from '@assets/icons/arrow-right.svg';
import { ControlButton } from '@components/Slider/components/ControlButton';
import { Slides } from '@components/Slider/components/Slides';
import { Comments } from '@constants/comments';

import style from './style.module.scss';

export const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const isHasPrevSlide = currentSlideIndex > 0;
  const isHasNextSlide = currentSlideIndex < Comments.length - 1;

  const sliderClassNames = classNames(style.slider_visible, {
    [style.slider_visible__first]: currentSlideIndex === 0,
    [style.slider_visible__second]: currentSlideIndex === 1,
    [style.slider_visible__third]: currentSlideIndex === 2,
  });

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
        <div className={sliderClassNames}>
          <Slides />
        </div>
      </div>
      <div className={style.slider_control}>
        <ControlButton direction="prev" Icon={LeftArrow} isDisabled={!isHasPrevSlide} handleSlideChange={onPrevSlide} />
        <ControlButton
          direction="next"
          Icon={RightArrow}
          isDisabled={!isHasNextSlide}
          handleSlideChange={onNextSlide}
        />
      </div>
    </div>
  );
};
