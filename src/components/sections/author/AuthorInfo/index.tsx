import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import FacebookIcon from '@assets/icons/facebook.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import LinkedinIcon from '@assets/icons/linkedln.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import { MulticoloredSquare } from '@components/ui/MulticoloredSquare';
import { Env } from '@constants/env';
import { AuthorPropsType } from '@type/author';

import style from './style.module.scss';

export const AuthorInfo: FC<AuthorPropsType> = ({ author }) => {
  const trAuthorInfo = useTranslations('AuthorPage');

  const { name, description, image, links } = author;
  const { facebook, twitter, linkedin, instagram } = links;

  return (
    <div className={style.author_info__container}>
      <article className={style.author_info}>
        <div className={style.author_info__image}>
          <Image
            src={`${Env.SERVER_API}${image}`}
            alt={name}
            width={250}
            height={295}
            placeholder="blur"
            blurDataURL="data:image/png;base64,..."
          />
        </div>
        <div className={style.author_info__content}>
          <h1>
            {trAuthorInfo('hello')} {name} {trAuthorInfo('welcome')}
          </h1>
          <p>{description}</p>
          <div className={style.author_info__links}>
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
        </div>
        <MulticoloredSquare align="bottom" />
      </article>
    </div>
  );
};
