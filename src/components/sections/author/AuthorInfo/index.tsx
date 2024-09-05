import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { MulticoloredSquare } from '@components/ui/MulticoloredSquare';
import { authorSocials } from '@constants/authorSocials';
import { env } from '@constants/env';
import { AuthorPropsType } from '@type/author';

import style from './style.module.scss';

export const AuthorInfo: FC<AuthorPropsType> = ({ author }) => {
  const trAuthorInfo = useTranslations('AuthorPage');

  const { name, description, image, links } = author;

  return (
    <div className={style.author_info__container}>
      <article className={style.author_info}>
        <div className={style.author_info__image}>
          <Image
            src={`${env.SERVER_API}${image}`}
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
            {authorSocials.map(({ name, Icon }) => (
              <Link key={name} href={links[name]} aria-label={name}>
                <Icon />
              </Link>
            ))}
          </div>
        </div>
        <MulticoloredSquare align="bottom" />
      </article>
    </div>
  );
};
