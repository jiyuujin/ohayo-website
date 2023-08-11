import { defineConfig } from 'astro/config'
import remarkToc from 'remark-toc'
import rehypeToc from 'rehype-toc'
import image from '@astrojs/image'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import vue from '@astrojs/vue'
import vanillaExtract from 'astro-vanilla-extract'

// https://astro.build/config
export default defineConfig({
    remarkPlugins: [
        [
            remarkToc,
            {
                tight: true,
                ordered: true,
            },
        ],
    ],
    rehypePlugins: [
      [
        rehypeToc,
        {
          headings: ['h1', 'h2', 'h3'],
          cssClasses: {
            toc: 'toc-post', 
            link: 'toc-link', 
          },
        },
      ],
    ],
    integrations: [
        react(),
        svelte(),
        vue(),
        vanillaExtract(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
    ],
})
