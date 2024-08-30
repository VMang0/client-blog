import classNames from 'classnames';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { PostPropsType } from '@components/Post/type';
import { ButtonLink } from '@components/ui/Button/ButtonLink';
import { Env } from '@constants/env';
import { Routes } from '@constants/routes';
import { Link } from '@navigation';

import style from './style.module.scss';

export const Post: FC<PostPropsType> = ({
  post,
  descriptionGap = 's',
  imageSize = 'm',
  TitleTag = 'h3',
  isImageVisible = false,
  isAuthorVisible = false,
  isCategoryVisible = false,
  isDescriptionVisible = false,
  IsButtonVisible = false,
  isHorizontal = false,
  isCardLink = false,
  isPaddingVisible = false,
  isBorderVisible = false,
}) => {
  const trPost = useTranslations('Post');
  const trCategory = useTranslations('Categories');
  const { id, title, description, img, author, createdAt, category } = post;

  const postClassName = classNames(style.post_card, {
    [style.horizontal]: isHorizontal,
    [style.link]: isCardLink,
    [style.padding_32]: isPaddingVisible,
    [style.border]: isBorderVisible,
  });

  const postContentClassName = classNames(style.post_card__content, {
    [style[`gap_${descriptionGap}`]]: descriptionGap,
  });

  const postImageClassName = classNames(style.post_card__image, {
    [style[`image_${imageSize}`]]: imageSize,
  });

  const content = (
    <article className={postClassName}>
      {isImageVisible && (
        <div className={postImageClassName}>
          <Image
            src={`${Env.SERVER_API}${img}`}
            alt={title}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="data:image/png;base64,..."
          />
        </div>
      )}
      <div className={postContentClassName}>
        {isAuthorVisible && (
          <p className={style.post_card__subtitle_author}>
            {trPost('by')} <span>{author.name}</span> | {createdAt}
          </p>
        )}
        {isCategoryVisible && <h6 className={style.post_card__subtitle_category}>{trCategory(category)}</h6>}
        <TitleTag>{title}</TitleTag>
        {isDescriptionVisible && <p className={style.post_card__description}>{description}</p>}
        {IsButtonVisible && (
          <ButtonLink title={trPost('btn_title')} styleType="primary" href={`${Routes.Post}/${id}`} />
        )}
      </div>
    </article>
  );

  return isCardLink ? (
    <Link href={`${Routes.Post}/${id}`} className={style.post_link}>
      {content}
    </Link>
  ) : (
    content
  );
};
