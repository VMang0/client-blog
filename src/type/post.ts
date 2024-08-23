type DetailType = {
  title: string;
  information: string;
};

type AuthorType = {
  id: number;
  name: string;
};

export type PostType = {
  id: string;
  title: string;
  author: AuthorType;
  createdAt: string;
  description: string;
  category: string;
  tags: string[];
  img: string;
  details: DetailType[];
};

export type PostPropsType = {
  post: PostType;
};

export type PostsPropsType = {
  posts: PostType[];
};
