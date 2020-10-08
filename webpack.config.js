// const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'app.js',
    path: __dirname + '/build',
    publicPath: '/'
  },
  devServer: {
    contentBase: './build'
  },
  // devtool: 'eval-source-map',
  // node: {
  //   fs: 'empty'
  // },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx|jpg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif|wav|mp3|eot|ttf|woff|woff2|pdf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader', options: { injectType: 'styleTag' } }, 'css-loader',],
      },
    ]
  }
}