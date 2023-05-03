const { loadConfigFromFile, mergeConfig } = require('vite')
const svgLoader = require('vite-svg-loader')
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', '@storybook/addon-links'],
  framework: '@storybook/vue3-vite',
  async viteFinal(previousConfig) {
    const { config } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'))
    return mergeConfig(previousConfig, {
      ...config,
      plugins: [svgLoader()],
    })
  },
}
