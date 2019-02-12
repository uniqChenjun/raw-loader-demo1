const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        exclude: /node_modules/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    inject: false,
    hash: true,
    template: './src/index.html',
    filename: 'index.html'
  })]
};