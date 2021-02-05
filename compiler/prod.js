import { DefinePlugin } from 'webpack';
import CompressPlugin from 'compression-webpack-plugin';
import BrotliPlugin from 'brotli-webpack-plugin';
import {
  entry, output, resolve, rules, plugins,
} from './common';

module.exports = {
  entry,
  output,
  resolve,
  module: {
    rules,
  },
  plugins: [
    ...plugins,
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ENVIRONMENT': JSON.stringify('process.env.ENVIRONMENT'),
    }),
    new CompressPlugin({
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
