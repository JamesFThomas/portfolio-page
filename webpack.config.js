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
  devtool: 'eval-source-map',
  mode: 'development',
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
        test: /\.(png|jpe?g|gif|pdf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  }
}