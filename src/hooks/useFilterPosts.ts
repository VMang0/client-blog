import { useParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { getPostsByCategoryAndTag } from '@api/post/getPostsByCategoryAndTag';
import { TagType } from '@components/ui/Tag/type';
import { PostType } from '@type/post';
import { getCategoryByName } from '@utils/getCategoryByName';

export const useFilterPosts = () => {
  const { category: categoryName } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTag, setActiveTag] = useState<TagType | ''>('');

  const category = useMemo(() => getCategoryByName(categoryName), [categoryName]);

  const getPosts = async () => {
    setIsLoading(true);
    const posts = await getPostsByCategoryAndTag(category.title, activeTag);
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
