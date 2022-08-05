const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack4-plugin')
const baseConfig = require('./webpack.base.config')

const PORT = '8081'
const config = merge(baseConfig, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新
    new HTMLWebpackPlugin({
      inject: 'body',
      title: 'React App',
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html'),
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/`,
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: PORT,
  },
})
module.exports = config
