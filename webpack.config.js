const path = require('path');
const Dotenv = require('dotenv-webpack');

const clientConfig = {
  mode: 'development',
  entry: {
    path: path.join(__dirname, './client/src/index.js')
  },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  plugins: [
    new Dotenv({systemvars: true})
  ]
}

module.exports = clientConfig;