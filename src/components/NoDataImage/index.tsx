import Image from 'next/image';

import NoData from '@assets/images/no-data.png';

import style from './style.module.scss';

export const NoDataImage = ({ size }: { size: number }) => (
  <Image src={NoData} width={size} height={size} alt="no data" className={style.no_data} />
);
