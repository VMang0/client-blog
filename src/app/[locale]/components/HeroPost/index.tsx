import { FC, memo } from 'react';

import { HeroPostInfo } from '@components/Post/HeroPostInfo';
import { PostPropsType } from '@type/post';

import style from './style.module.scss';

export const HeroPost: FC<PostPropsType> = memo(({ post }) => (
  <div className={style.hero_post}>
    <section>
      <HeroPostInfo {...post} isHomePage />
    </section>
  </div>
));
