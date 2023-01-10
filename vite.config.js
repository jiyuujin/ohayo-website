import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

const viteEnv = {}
Object.keys(process.env).forEach((key) => {
  if (key.startsWith(`VITE_`)) {
    viteEnv[`import.meta.env.${key}`] = process.env[key]
  }
})

module.exports = defineConfig({
  outDir: 'out',
  plugins: [
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/head', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts'
    }),
    Pages({
      extensions: ['vue'],
    }),
    Layouts(),
    vue(),
    svgLoader()
  ],
  css: {
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  },
  define: viteEnv,
  server: {
    fs: {
      strict: true
    }
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head', '@apollo/client/core'],
    exclude: ['@apollo/client']
  }
})
