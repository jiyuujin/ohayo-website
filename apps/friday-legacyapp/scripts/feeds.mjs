'use strict'

import { read } from 'to-vfile'
import { unified } from 'unified'
import remarkStringify from 'remark-stringify'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'

import { Feed } from 'feed'
import { promisify } from 'util'

import fs from 'fs'
import path from 'path'

const currentDir = './src/pages/posts'

let feed = new Feed({
  title: '金曜日のエンジニアのつどい',
  description: '週刊でエンジニア界隈の最新情報を記録しています',
  feed_url: 'https://ohayo-friday.nekohack.me/feeds.xml',
  site_url: 'https://ohayo-friday.nekohack.me/',
  copyright: 'nekohack',
  language: 'ja',
})

fs.readdir(currentDir, function (err, files) {
  if (err) throw err
  files.forEach(async (file) => {
    await unified()
      .use(remarkParse)
      .use(remarkStringify)
      .use(remarkFrontmatter, ['yaml'])
      .use(() => async (tree) => {
        tree.children.forEach((yaml) => {
          if (yaml.type === 'yaml') {
            if (/title: .*\n/.test(yaml.value)) {
              const title = /title: .*\n/g.exec(yaml.value)[0]
                .replace('title: ', '')
                .replace('\n', '')
              feed.items.push({
                title: title,
                id: `https://ohayo-friday.nekohack.me/posts/${file.replace('.md', '')}`,
                link: `https://ohayo-friday.nekohack.me/posts/${file.replace('.md', '')}`,
                author: [
                  {
                    name: 'jiyuujin',
                  },
                ],
                description: `${title}について書かせていただきました。`,
                body: '',
                date: new Date(file.slice(0, 10)),
              })
            }
          }
        })
        await promisify(fs.writeFile)('./public/feeds.xml', feed.rss2())
      })
      .process(await read(path.join(currentDir, file)))
  })
})

export default function () {}
