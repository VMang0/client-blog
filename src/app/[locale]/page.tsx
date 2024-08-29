import { getLimitAuthors } from '@api/author/getAuthors';
import { getLimitPosts } from '@api/post/getPosts';
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

const Home = async () => {
  const posts = await getLimitPosts(6);
  const authors = await getLimitAuthors(4);
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
