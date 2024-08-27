import Image from 'next/image';
import { FC } from 'react';

import { AuthorInfo } from '@components/sections/post/AuthorInfo';
import { PostPropsType } from '@type/post';

import style from './style.module.scss';

export const PostInformation: FC<PostPropsType> = ({ post }) => {
  const { img, title, author, createdAt, category, details } = post;

  return (
    <section className={style.post_information}>
      <div className={style.post_information__header}>
        <AuthorInfo img={img} name={author.name} createdAt={createdAt} />
        <h1>{title}</h1>
        <p className={style.post_information__header_category}>{category}</p>
      </div>
      <div className={style.post_information__image}>
        <Image
          src={`https://client-blog-server-six.vercel.app${img}`}
          alt={title}
          width={1280}
          height={582}
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
        />
      </div>
      <ul className={style.post_information__description}>
        {details.map(({ title, information }, index) => (
          <li key={index}>
            <h2>{title}</h2>
            <p>{information}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
