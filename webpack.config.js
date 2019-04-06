const path = require('path');

module.exports = {
  target: 'web',
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './app/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            },
          },
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
      }
    ],
  },
};
