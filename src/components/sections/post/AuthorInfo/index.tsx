import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { AuthorInfoPropsType } from '@components/sections/author/AuthorInfo/type';
import { env } from '@constants/env';
import { Routes } from '@constants/routes';
import { Link } from '@navigation';

import style from './style.module.scss';

export const AuthorInfo: FC<AuthorInfoPropsType> = ({ img, name, createdAt, id }) => {
  const trBlogPost = useTranslations('BlogPost');

  return (
    <article className={style.author_info}>
      <div className={style.author_info__image}>
        <Image
          src={`${env.SERVER_API}${img}`}
          alt={name}
          width={60}
          height={60}
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
        />
      </div>
      <div className={style.author_info__content}>
        <Link href={`${Routes.Author}/${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>
          {trBlogPost('postedOn')} {createdAt}
        </p>
      </div>
    </article>
  );
};
