const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/templates/main/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      applicationStyles: './global-css/main.scss',
      App: './src/components/App/App.jsx',
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env'],
        },
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/main/index.html',
    }),
  ],
};
