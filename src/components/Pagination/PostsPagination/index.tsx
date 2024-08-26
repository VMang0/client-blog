import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { PostsPaginationPropsType } from '@components/Pagination/PostsPagination/type';

import style from './style.module.scss';

export const PostsPagination: FC<PostsPaginationPropsType> = ({
  isNextDisabled,
  isPrevDisabled,
  handlePrevClick,
  handleNextClick,
}) => {
  const trPagination = useTranslations('BlogPosts.Pagination');

  return (
    <div className={style.pagination}>
      <button type="button" onClick={handlePrevClick} className={style.pagination_prev} disabled={isPrevDisabled}>
        {trPagination('btn_title_prev')}
      </button>
      <button type="button" onClick={handleNextClick} className={style.pagination_next} disabled={isNextDisabled}>
        {trPagination('btn_title_next')}
      </button>
    </div>
  );
};
