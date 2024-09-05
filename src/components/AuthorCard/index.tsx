import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { authorSocials } from '@constants/authorSocials';
import { env } from '@constants/env';
import { Routes } from '@constants/routes';
import { Link as LinkLocalized } from '@navigation';
import { AuthorType } from '@type/author';

import style from './style.module.scss';

export const AuthorCard: FC<AuthorType> = ({ ...author }) => {
  const { id, name, company, position, links, image } = author;

  return (
    <article className={style.author_card}>
      <div className={style.author_image}>
        <Image src={`${env.SERVER_API}${image}`} alt={name} width={128} height={128} />
      </div>
      <div>
        <h3>
          <LinkLocalized href={`${Routes.Author}/${id}`}>{name}</LinkLocalized>
        </h3>
        <p className={style.author_card__company}>
          {position} {company}
        </p>
      </div>
      <div className={style.author_card__links}>
        {authorSocials.map(({ name, Icon }) => (
          <Link key={name} href={links[name]} aria-label={name}>
            <Icon />
          </Link>
        ))}
      </div>
    </article>
  );
};
