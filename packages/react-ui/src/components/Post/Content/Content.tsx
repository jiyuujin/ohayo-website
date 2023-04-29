import { content as contentStyle } from './Content.css'

export function Content({ children }: React.PropsWithChildren<unknown>) {
  return <div className={contentStyle}>{children}</div>
}
