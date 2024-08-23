import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { FC, memo } from 'react';

import { ButtonLink } from '@components/Button/ButtonLink';
import { Routes } from '@constants/routes';
import { PostType } from '@type/post';

import style from './style.module.scss';
import postStyle from '../style.module.scss';

export const HeroPostInfo: FC<PostType & { isHomePage?: boolean }> = memo(({ isHomePage = false, ...post }) => {
  const trHeroPost = useTranslations('Post');
  const { id, title, category, author, createdAt, description } = post;

  const titleClassName = classNames({ 'headline-xl': isHomePage });
  const authorClassName = classNames({ [postStyle.author_title]: !isHomePage });

  const postInfoClassName = classNames(style.hero_post__info, {
    [style.home]: isHomePage,
    [style.blog]: !isHomePage,
  });

  const subTitle = isHomePage ? (
    <>
      {trHeroPost('postedOn')} <span>{category}</span>
    </>
  ) : (
    'Featured Post'
  );

  return (
    <div className={postInfoClassName}>
      <h6 className={style.hero_post__subtitle}>{subTitle}</h6>
      <h2 className={titleClassName}>{title}</h2>
      <p className={authorClassName}>
        {trHeroPost('by')} <span>{author.name}</span> | {createdAt}
      </p>
      <p>{description}</p>
      <ButtonLink title={trHeroPost('btn_title')} styleType="primary" href={`${Routes.Post}/${id}`} />
    </div>
  );
});
