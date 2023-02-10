const path = require('path');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require("compression-webpack-plugin");

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
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|pdf)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new Dotenv({systemvars: true}),
    // new CompressionPlugin({
    //   test: /\.js(\?.*)?$/i,
    //   filename: path.join(__dirname, './client/dist'),
    //   algorithm: "gzip",
    //   deleteOriginalAssets: false,
    // })
  ]
}

module.exports = clientConfig;