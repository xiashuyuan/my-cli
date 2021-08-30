const path = require('path')

const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')
const ProgressBarPlugin = require('webpackbar')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: { index: path.resolve(__dirname, '../../src/index.tsx') },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist'),
    clean: true
  },
  stats: 'error-warnings',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  module: {
    rules :[
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ]
  },
  plugins: [
    new CleanTerminalPlugin(),
    new ProgressBarPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    })
  ],
  optimization: {
    usedExports: true
  }
}