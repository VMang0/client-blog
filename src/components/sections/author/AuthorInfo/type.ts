import { AuthorType } from '@type/author';
import { PostType } from '@type/post';

export type AuthorInfoPropsType = Pick<PostType, 'img' | 'createdAt'> & Pick<AuthorType, 'name' | 'id'>;
