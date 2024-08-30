import { AuthorInfo } from '@components/sections/author/AuthorInfo';
import { AuthorsPosts } from '@components/sections/author/AuthorsPosts';
import { useApiWithLocale } from '@hooks/useApiWithLocale';
import { IdLocaleParamsPropsType } from '@type/params';

const Author = async ({ params: { locale, id } }: IdLocaleParamsPropsType) => {
  const { fetchAuthorById, fetchPostsByAuthorId } = useApiWithLocale(locale);

  const author = await fetchAuthorById(id);
  const authorsPosts = await fetchPostsByAuthorId(id);

  return (
    <>
      <AuthorInfo author={author} />
      <AuthorsPosts posts={authorsPosts} />
    </>
  );
};

export default Author;
