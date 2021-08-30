const webpack = require('webpack')
const { merge } = require('webpack-merge')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ReactRefreshTypeScript = require('react-refresh-typescript')

const common = require('./webpack.common.config')

const tsLoader = common.module.rules.find((r) => r.loader === 'ts-loader')

if (tsLoader) {
  /* 添加了 Webpack 自带的 HotModuleReplacementPlugin 和 ReactRefreshWebpackPlugin，
  并且在 ts-loader 中添加了自定义的 transformer。
  与传统的 react-hot-reloader 相比，
  使用 react-refresh 的好处是你只需要修改 dev 环境下的 Webpack 配置，
  并且完全无需对你自己的源代码进行修改。
   */
  tsLoader.options = {
    ...tsLoader.options,
    getCustomTransformers: () => ({
      before: [ReactRefreshTypeScript()]
    }),
    transpileOnly: true
  }
}

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ]
})