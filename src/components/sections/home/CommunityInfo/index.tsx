import { useTranslations } from 'next-intl';

import { AboutCommunity } from '@components/AboutCommunity';

export const CommunityInfo = () => {
  const trInfo = useTranslations('HomeInfoSection');

  return (
    <section data-testid="section-item">
      <AboutCommunity
        isLinkVisible
        linkTitle={trInfo('link_title')}
        firstTitle={trInfo('about_title')}
        secondTitle={trInfo('mission_title')}
        firstSubtitle={trInfo('about_subtitle')}
        secondSubtitle={trInfo('mission_subtitle')}
        firstDescription={trInfo('about_description')}
        secondDescription={trInfo('mission_description')}
      />
    </section>
  );
};
