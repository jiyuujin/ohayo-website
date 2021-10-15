import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const viteEnv = {}
Object.keys(process.env).forEach((key) => {
  if (key.startsWith(`VITE_`)) {
    viteEnv[`import.meta.env.${key}`] = process.env[key]
  }
})

module.exports = defineConfig({
  outDir: 'out',
  plugins: [vue()],
  define: viteEnv,
  optimizeDeps: {
    include: ['@apollo/client/core'],
    exclude: ['@apollo/client']
  }
})
