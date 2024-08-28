import { FC } from 'react';

import { SearchResultPropsType } from '@components/ElasticSearch/components/SearchResult/type';
import style from '@components/ElasticSearch/style.module.scss';
import { NoDataImage } from '@components/NoDataImage';
import { Post } from '@components/Post';

export const SearchResult: FC<SearchResultPropsType> = ({ isLoading, posts, isSearchingActive }) => {
  const isPostsExist = posts && posts.length > 0 && !isLoading;
  const isNoPostsData = posts && posts.length === 0 && !isLoading && isSearchingActive;

  return (
    <div className={style.search_result}>
      {isLoading && <p>Loading...</p>}
      {isPostsExist && (
        <ul>
          {posts.map((post) => (
            <Post key={post.id} post={post} TitleTag="h6" isAuthorVisible />
          ))}
        </ul>
      )}
      {isNoPostsData && <NoDataImage size={200} />}
    </div>
  );
};
