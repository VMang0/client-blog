import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { PostsPaginationPropsType } from '@components/Pagination/PostsPagination/type';

import style from './style.module.scss';

export const PostsPagination: FC<PostsPaginationPropsType> = ({
  onPrevClick,
  onNextClick,
  isPrevDisabled,
  isNextDisabled,
}) => {
  const trPagination = useTranslations('BlogPosts.Pagination');

  return (
    <div className={style.pagination}>
      <button type="button" onClick={onPrevClick} className={style.pagination_prev} disabled={isPrevDisabled}>
        {trPagination('btn_title_prev')}
      </button>
      <button type="button" onClick={onNextClick} className={style.pagination_next} disabled={isNextDisabled}>
        {trPagination('btn_title_next')}
      </button>
    </div>
  );
};
