import { useTranslations } from 'next-intl';

import FirstCardImage from '@assets/images/about-details-1.png';
import SecondCardImage from '@assets/images/about-details-2.png';
import { CommunityDetail } from '@components/CommunityDetail';

import style from './style.module.scss';

export const CommunityDetails = () => {
  const trDetail = useTranslations('AboutUs.Details');

  return (
    <section className={style.community_details_container}>
      {Array(2)
        .fill(2)
        .map((_, index) => {
          const number = index + 1;
          const isEven = number % 2 === 0;
          const image = isEven ? SecondCardImage : FirstCardImage;

          return (
            <CommunityDetail
              key={index}
              image={image}
              isReversed={!isEven}
              title={trDetail(`title_${number}`)}
              subtitle={trDetail(`subtitle_${number}`)}
              description={trDetail(`description_${number}`)}
            />
          );
        })}
    </section>
  );
};
