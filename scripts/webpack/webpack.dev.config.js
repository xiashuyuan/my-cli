const { merge } = require('webpack-merge')

const common = require('./webpack.common.config')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {}
})