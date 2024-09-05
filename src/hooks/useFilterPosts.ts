import { useParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { TagType } from '@components/ui/Tag/type';
import { useApiWithLocale } from '@hooks/useApiWithLocale';
import { PostType } from '@type/post';
import { getCategoryByName } from '@utils/getCategoryByName';

export const useFilterPosts = (locale: string) => {
  const { category: categoryName } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTag, setActiveTag] = useState<TagType | ''>('');

  const { fetchPostsByCategoryAndTag } = useApiWithLocale(locale);

  const category = useMemo(() => getCategoryByName(categoryName), [categoryName]);

  const getPosts = async () => {
    setIsLoading(true);
    const posts = await fetchPostsByCategoryAndTag(category.name, activeTag);
    setPosts(posts);
    setIsLoading(false);
  };

  const onTagClick = useCallback((tag: TagType) => {
    setActiveTag((prevTag) => (prevTag === tag ? '' : tag));
  }, []);

  useEffect(() => {
    getPosts();
  }, [activeTag, category]);

  return {
    isLoading,
    category,
    posts,
    onTagClick,
    activeTag,
  };
};
