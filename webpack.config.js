const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
 mode,
 entry: './src/index.js',
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].js',
 },
 resolve: {
  alias: {
   '@src': path.resolve(__dirname, 'src'),
   '@public': path.resolve(__dirname, 'public'),
  },
  extensions: ['.ts', '.css', '.js'],
 },
 devServer: {
  host: 'localhost',
  port: process.env.PORT || 3000,
  open: true,
  historyApiFallback: true,
 },
 module: {
  rules: [
   {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
   },
   {
    test: /\.(js|ts)$/,
    exclude: /(node_modules)/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
     },
    },
   },
   {
    test: /\.(png|jp(e*)g)$/,
    loader: 'file-loader',
    options: {
     name: 'asset/[name].[ext]?[hash]',
    },
   },
  ],
 },

 resolve: {
  modules: ['node_modules'],
  extensions: ['.js', '.ts'],
 },

 plugins: [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
   template: './src/index.html', // 템플릿 경로
   hash: true,
  }),
 ],
};
