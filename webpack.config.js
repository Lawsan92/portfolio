const path = require('path');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = (env) => {
  console.log('env:', env);
  const analyzer = env['--analyze'] ? new BundleAnalyzerPlugin() : () => {console.log("ANALYZER INACTIVE")};
  return {
    mode: env['--mode'] || 'development',
    entry: {
      path: path.join(__dirname, './src/index.js'),
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      filename: 'bundle.js',
    },
    devServer: {
      historyApiFallback: true,
      static: path.join(__dirname, 'public'),
      proxy: {
        '/': 'http://127.0.0.1:3000'
      }
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
      new Dotenv({systemvars: true}), analyzer
    ]
  }
}

module.exports = config;
