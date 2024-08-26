'use server';

import { getLimitAuthors } from '@api/author/getAuthors';
import { getLimitPosts } from '@api/post/getPosts';
import { CommunityInfo } from '@app/[locale]/components/CommunityInfo';
import { HeroPost } from '@app/[locale]/components/HeroPost';
import { Posts } from '@app/[locale]/components/Posts';
import { Authors } from '@components/Authors';
import { Categories } from '@components/Categories';
import { JoinSection } from '@components/JoinSection';

const Home = async () => {
  const posts = await getLimitPosts(6);
  const authors = await getLimitAuthors(4);
  const partOfPosts = posts.slice(0, 6);

  return (
    <>
      <HeroPost post={posts[0]} />
      <Posts posts={partOfPosts} />
      <CommunityInfo />
      <Categories titleAlign="center" />
      <Authors authors={authors} />
      <JoinSection />
    </>
  );
};

export default Home;
