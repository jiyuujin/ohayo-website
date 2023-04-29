import {
  item,
  itemLink,
  date as dateStyle,
  title as titleStyle,
  subtitle as subtitleStyle,
} from './Post.css'

export interface PostProps {
  url: string
  date?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
}

export function Post({ url, date, title, subtitle }: PostProps) {
  return (
    <div className={item}>
      <a href={url} className={itemLink}>
        <div className={dateStyle}>{date}</div>
        <h2 className={titleStyle}>{title}</h2>
        <p className={subtitleStyle}>{subtitle}</p>
      </a>
    </div>
  )
}
