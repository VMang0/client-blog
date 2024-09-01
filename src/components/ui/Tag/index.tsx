import classNames from 'classnames';
import { FC } from 'react';

import { TagPropsType } from '@components/ui/Tag/type';

import style from './style.module.scss';
import { DATA_TEST_ID } from '../../../../cypress/e2e/data';

export const Tag: FC<TagPropsType> = ({ tagName, handleClick, isActive = false }) => {
  const tagClassName = classNames(style.tag, {
    [style.active]: isActive,
  });

  return (
    <button type="button" onClick={handleClick} className={tagClassName} data-testid={DATA_TEST_ID.TAG}>
      {tagName}
    </button>
  );
};
