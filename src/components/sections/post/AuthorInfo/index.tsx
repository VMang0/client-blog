import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { AuthorInfoPropsType } from '@components/sections/author/AuthorInfo/type';
import { Env } from '@constants/env';

import style from './style.module.scss';

export const AuthorInfo: FC<AuthorInfoPropsType> = ({ img, name, createdAt }) => {
  const trBlogPost = useTranslations('BlogPost');

  return (
    <article className={style.author_info}>
      <div className={style.author_info__image}>
        <Image
          src={`${Env.SERVER_API}${img}`}
          alt={name}
          width={60}
          height={60}
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
        />
      </div>
      <div className={style.author_info__content}>
        <h3>{name}</h3>
        <p>
          {trBlogPost('postedOn')} {createdAt}
        </p>
      </div>
    </article>
  );
};
