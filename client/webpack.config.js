const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathJoin = (targetPath) => path.join(__dirname, targetPath);

const isDevelopment = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isDevelopment ? 'production' : 'development',
  devtool: isDevelopment ? 'hidden-source-map' : 'eval',

  entry: ['@babel/polyfill', pathJoin('src/index.tsx')],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': pathJoin('src'),
      '@pages': pathJoin('src/pages'),
      '@shared': pathJoin('src/shared'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: '/node_modules/',
      },
    ],
  },

  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: pathJoin('dist'),
    publicPath: '/',
  },

  devServer: {
    contentBase: pathJoin('dist'),
    compress: false,
    hot: true,
    port: 8000,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      path: pathJoin('dist'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
  ],
};
