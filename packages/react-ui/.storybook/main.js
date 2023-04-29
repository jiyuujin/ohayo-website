const react = require('@vitejs/plugin-react')
const Inspect = require('vite-plugin-inspect')

module.exports = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', '@storybook/addon-links'],

  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  async viteFinal(config) {
    config.plugins = config.plugins.filter(
      (plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react')),
    )

    config.plugins.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
    )

    config.plugins.push(Inspect())

    return config
  },
}
