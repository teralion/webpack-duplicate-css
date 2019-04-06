const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './app/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          MiniCssPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            },
          },
          {
            loader: 'stylus-loader',
            options: {
              import: [path.resolve(__dirname, 'app', 'styles', 'import.styl')],
              sourceMap: true,
              preferPathResolver: 'webpack',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
    ],
  },
};
