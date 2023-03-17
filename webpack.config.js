const path = require('path');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const clientConfig = {
  mode: 'production',
  entry: {
    path: path.join(__dirname, './client/src/index.js'),
    // path: './app.js'
  },
  output: {
    path: path.join(__dirname, './client/dist'),
    // filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    filename: 'bundle.js',
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
    new Dotenv({systemvars: true})
  ]
}

module.exports = clientConfig;