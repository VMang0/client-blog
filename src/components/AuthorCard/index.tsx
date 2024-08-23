import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import FacebookIcon from '@assets/icons/facebook.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import LinkedinIcon from '@assets/icons/linkedln.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import { AuthorType } from '@type/author';

import style from './style.module.scss';

export const AuthorCard: FC<AuthorType> = ({ ...author }) => {
  const { name, company, position, links, image } = author;
  const { facebook, twitter, linkedin, instagram } = links;

  return (
    <article className={style.author_card}>
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
        <Link href={facebook}>
          <FacebookIcon />
        </Link>
        <Link href={twitter}>
          <TwitterIcon />
        </Link>
        <Link href={instagram}>
          <InstagramIcon />
        </Link>
        <Link href={linkedin}>
          <LinkedinIcon />
        </Link>
      </div>
    </article>
  );
};
