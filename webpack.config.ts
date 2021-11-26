import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { Configuration } from 'webpack';
import path from 'path';

const devServer = {
  contentBase: `${__dirname}/dist`,
  compress: true,
  publicPath: 'public',
  port: process.env.PORT || 1234,
  writeToDisk: true,
  historyApiFallback: true,
  overlay: {
    errors: true,
    warnings: true,
  },
  open: true,
};

const config: Configuration & { devServer: typeof devServer } = {
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/dist`,
    filename: '[fullhash].js',
    chunkFilename: '[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.ts', '.tsx', '.js', ',jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(process.cwd(), '/public/assets'), to: 'assets' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: true,
      favicon: 'src/assets/images/terminal.png',
      meta: {
        'theme-color': '#222222',
      },
    }),
    // @ts-ignore
    new CompressionPlugin({
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  devServer,
};

export default config;
