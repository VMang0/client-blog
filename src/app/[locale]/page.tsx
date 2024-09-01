import { Authors } from '@components/Authors';
import { Categories } from '@components/Categories';
import { InfiniteScroll } from '@components/InfiniteScroll';
import { JoinSection } from '@components/JoinSection';
import { CommunityInfo } from '@components/sections/home/CommunityInfo';
import { Featured } from '@components/sections/home/Featured';
import { HeroPost } from '@components/sections/home/HeroPost';
import { Posts } from '@components/sections/home/Posts';
import { Testimonials } from '@components/sections/home/Testimonials';
import { WhyWeStarted } from '@components/sections/home/WhyWeStarted';
import { useApiWithLocale } from '@hooks/useApiWithLocale';
import { LocaleParamsPropsType } from '@type/params';

export const revalidate = 3600;

const Home = async ({ params: { locale } }: LocaleParamsPropsType) => {
  const { fetchLimitPosts, fetchLimitAuthors } = useApiWithLocale(locale);

  const posts = await fetchLimitPosts(6);
  const authors = await fetchLimitAuthors(4);
  const partOfPosts = posts.slice(0, 6);

  return (
    <InfiniteScroll>
      <HeroPost post={posts[0]} />
      <Posts posts={partOfPosts} />
      <CommunityInfo />
      <Categories titleAlign="center" />
      <WhyWeStarted />
      <Authors authors={authors} />
      <Featured />
      <Testimonials />
      <JoinSection />
    </InfiniteScroll>
  );
};

export default Home;
