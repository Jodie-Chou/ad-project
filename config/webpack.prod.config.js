const path = require('path')
const  { merge } = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin({
			protectWebpackAssets: true
		}),
		new HTMLWebpackPlugin({
			inject: 'body',
			title: 'React App',
			filename: 'index.html',
			template: path.join(__dirname, '../src/index.html')
		})
	]
})