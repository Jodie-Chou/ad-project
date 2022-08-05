const path = require('path')

module.exports = {
	entry: path.join(__dirname, '../src/index.jsx'),
	output: {
		filename: '[name].[fullhase:4].js',
		path: path.join(__dirname, './dist')
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader'
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
}