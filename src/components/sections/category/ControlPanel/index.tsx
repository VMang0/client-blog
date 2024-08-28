import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CategoryCard } from '@components/CategoryCard';
import { ElasticSearch } from '@components/ElasticSearch';
import { ControlPanelPropsType } from '@components/sections/category/ControlPanel/type';
import { Tag } from '@components/ui/Tag';
import { TagType } from '@components/ui/Tag/type';
import { Categories as CategoriesConst } from '@constants/categories';
import { Tags } from '@constants/tags';

import style from './style.module.scss';

export const ControlPanel: FC<ControlPanelPropsType> = ({ activeTag, onTagClick, selectedCategory }) => {
  const trControlPanel = useTranslations('Category');

  const handleTagClick = (tag: TagType) => () => onTagClick(tag);

  return (
    <div className={style.control_panel}>
      <ElasticSearch />
      <div className={style.control_panel__block}>
        <h2>{trControlPanel('categoriesTitle')}</h2>
        <ul className={style.control_panel__categories}>
          {CategoriesConst.map((category, index) => (
            <li key={index}>
              <CategoryCard category={category} isActive={selectedCategory === category.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className={style.control_panel__block}>
        <h2>{trControlPanel('tagsTitle')}</h2>
        <ul className={style.control_panel__tags}>
          {Tags.map((tag, index) => (
            <li key={index}>
              <Tag tagName={tag} handleClick={handleTagClick(tag)} isActive={activeTag === tag} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
