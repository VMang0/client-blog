import { getLimitAuthors } from '@api/author/getAuthors';
import { Authors } from '@components/Authors';
import { JoinSection } from '@components/JoinSection';
import { AboutHeadingWrapper } from '@components/sections/about/AboutHeadingWrapper';
import { CommunityDetails } from '@components/sections/about/CommunityDetails';

const AboutUs = async () => {
  const authors = await getLimitAuthors(8);

  return (
    <>
      <AboutHeadingWrapper />
      <CommunityDetails />
      <Authors authors={authors} />
      <JoinSection />
    </>
  );
};

export default AboutUs;
