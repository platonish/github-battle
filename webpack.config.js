const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(js)$/, use: 'babel-loader'}
    ]
  },

  devServer: {
    historyApiFallback: true
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
};