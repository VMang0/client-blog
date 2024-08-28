import { PostsList } from '@components/PostsList';
import { ControlPanel } from '@components/sections/category/ControlPanel';
import { useFilterPosts } from '@hooks/useFilterPosts';

import style from './style.module.scss';

export const CategorySection = () => {
  const { posts, activeTag, onTagClick, category } = useFilterPosts();

  return (
    <section className={style.category_section}>
      <PostsList posts={posts} />
      <ControlPanel activeTag={activeTag} onTagClick={onTagClick} selectedCategory={category.name} />
    </section>
  );
};
