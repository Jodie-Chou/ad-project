const path = require('path')

module.exports = {
  entry: path.join(__dirname, '../src/index.jsx'),
  output: {
    filename: '[name].[fullhase:4].js',
    path: path.join(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
