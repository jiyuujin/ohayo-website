import Endpoints from './endpoints.constants'

export const SOCIAL_LIST = ['twitter', 'hatena', 'note', 'github']
export const TWITTER_URL = (title: string, slug: string) =>
  `http://twitter.com/share?text=${title}&url=${Endpoints.BASE_URL}posts/${slug}`
export const HATENA_URL = (slug: string) => `http://b.hatena.ne.jp/entry/ohayo.nekohack.me/posts/${slug}`
export const NOTE_URL = (slug: string) =>
  `https://note.mu/intent/post?url=${Endpoints.BASE_URL}posts/${slug}`
