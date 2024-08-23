import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { AuthorCard } from '@components/AuthorCard';
import { AuthorType } from '@type/author';

import style from './style.module.scss';

export const Authors: FC<{ authors: AuthorType[] }> = ({ authors }) => {
  const trAuthors = useTranslations('AuthorsSection');

  return (
    <section className={style.authors}>
      <h2>{trAuthors('title')}</h2>
      <ul className={style.authors__list}>
        {authors.map((author) => (
          <li key={author.id}>
            <AuthorCard {...author} />
          </li>
        ))}
      </ul>
    </section>
  );
};
