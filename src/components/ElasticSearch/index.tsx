'use client';

import { useTranslations } from 'next-intl';
import { useRef } from 'react';

import { SearchResult } from '@components/ElasticSearch/components/SearchResult';
import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';
import { useClickOutside } from '@hooks/useClickOutside';
import { useElasticSearch } from '@hooks/useElasticSearch';

import style from './style.module.scss';

export const ElasticSearch = () => {
  const elasticRef = useRef<HTMLDivElement>(null);
  const trInput = useTranslations('Category.Input');
  const { searchQuery, handleSearchChange, handleSearch, hideSearch, isSearchingActive, isLoading, posts } =
    useElasticSearch();

  useClickOutside(elasticRef, hideSearch);

  return (
    <div ref={elasticRef} className={style.elastic_search}>
      <div className={style.input_wrapper}>
        <Input
          name="search"
          placeholder={trInput('placeholder')}
          size="medium"
          isError={false}
          onChange={handleSearchChange}
          value={searchQuery}
        />
        <Button title={trInput('btn_title')} styleType="primary" size="small" onClick={handleSearch} />
      </div>
      {isSearchingActive && <SearchResult isLoading={isLoading} isSearchingActive={isSearchingActive} posts={posts} />}
    </div>
  );
};
