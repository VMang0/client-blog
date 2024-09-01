type LinksType = {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
};

export type AuthorType = {
  id: number;
  name: string;
  image: string;
  location: string;
  position: string;
  company: string;
  description: string;
  links: LinksType;
};

export type AuthorPropsType = {
  author: AuthorType;
};
