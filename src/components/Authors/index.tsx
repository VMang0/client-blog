import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { AuthorCard } from '@components/AuthorCard';
import { ListContainer } from '@components/ListContainer';
import { AuthorType } from '@type/author';

import style from './style.module.scss';

export const Authors: FC<{ authors: AuthorType[] }> = ({ authors }) => {
  const trAuthors = useTranslations('AuthorsSection');

  return (
    <ListContainer title={trAuthors('title')} titleAlign="center" TitleTag="h2">
      <ul className={style.authors__list}>
        {authors.map((author) => (
          <li key={author.id}>
            <AuthorCard {...author} />
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};
