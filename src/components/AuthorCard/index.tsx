'use server';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import FacebookIcon from '@assets/icons/facebook.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import LinkedinIcon from '@assets/icons/linkedln.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import { Routes } from '@constants/routes';
import { Link as LinkLocalized } from '@navigation';
import { AuthorType } from '@type/author';

import style from './style.module.scss';

export const AuthorCard: FC<AuthorType> = ({ ...author }) => {
  const { id, name, company, position, links, image } = author;
  const { facebook, twitter, linkedin, instagram } = links;

  return (
    <article className={style.author_card}>
      <LinkLocalized href={`${Routes.Author}/${id}`} className={style.author_card__link} />
      <Image
        src={`https://client-blog-server-six.vercel.app${image}`}
        alt={name}
        width={0}
        height={0}
        sizes="100%"
        priority
      />
      <div>
        <h3>{name}</h3>
        <p className={style.author_card__company}>
          {position} {company}
        </p>
      </div>
      <div className={style.author_card__links}>
        <Link href={facebook} aria-label="Facebook">
          <FacebookIcon />
        </Link>
        <Link href={twitter} aria-label="Twitter">
          <TwitterIcon />
        </Link>
        <Link href={instagram} aria-label="Instagram">
          <InstagramIcon />
        </Link>
        <Link href={linkedin} aria-label="LinkedIn">
          <LinkedinIcon />
        </Link>
      </div>
    </article>
  );
};
