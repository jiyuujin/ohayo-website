import { Post as _Post } from './Post'
import { Content } from './Content/Content'

export type { PostProps } from './Post'

export const Post = Object.assign(_Post, { Content })
