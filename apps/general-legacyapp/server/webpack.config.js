const path = require('path')
const GasPlugin = require('gas-webpack-plugin')

module.exports = {
  entry: './src/index.ts',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },

  resolve: {
    alias: {
      '~': path.resolve('src'),
    },
    extensions: ['.ts'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },

  plugins: [new GasPlugin()],
}
