import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export const entry = './src/index.tsx';

export const output = {
  path: path.join(process.cwd(), '/dist'),
  filename: '[name].[hash].bundle.js',
  chunkFilename: '[name].[hash].bundle.js',
};

export const devServer = {
  hot: true,
  contentBase: path.join(process.cwd(), '/dist'),
  writeToDisk: true,
  historyApiFallback: true,
  compress: true,
  overlay: {
    errors: true,
    warnings: true,
  },
};

export const rules = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: 'ts-loader',
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: 'babel-loader',
    enforce: 'pre',
  },
  {
    test: /\.js$/,
    use: ['source-map-loader'],
    enforce: 'pre',
  },
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: 'eslint-loader',
    enforce: 'pre',
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'postcss-loader'],
  },
  {
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
];

export const resolve = {
  extensions: ['.js', '.ts', '.tsx'],
  modules: [ // add these to improve module resolves
    'node_modules',
    path.resolve(process.cwd(), 'src'),
  ],
};

export const plugins = [
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin([
    { from: path.join(process.cwd(), '/public/assets'), to: 'assets' },
  ]),
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    minify: true,
    favicon: 'src/assets/images/terminal.png',
    meta: {
      'theme-color': '#002400',
    },
  }),
];
