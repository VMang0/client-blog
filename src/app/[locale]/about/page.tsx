import { Authors } from '@components/Authors';
import { JoinSection } from '@components/JoinSection';
import { AboutHeadingWrapper } from '@components/sections/about/AboutHeadingWrapper';
import { CommunityDetails } from '@components/sections/about/CommunityDetails';
import { useApiWithLocale } from '@hooks/useApiWithLocale';
import { IdLocaleParamsPropsType } from '@type/params';

export const revalidate = 3600;

const AboutUs = async ({ params: { locale } }: IdLocaleParamsPropsType) => {
  const { fetchLimitAuthors } = useApiWithLocale(locale);

  const authors = await fetchLimitAuthors(8);

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
